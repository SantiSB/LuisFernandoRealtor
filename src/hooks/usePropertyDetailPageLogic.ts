// Importa los hooks useEffect y useState de React para manejar efectos y estado local
import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// Importa el tipo Property para tipar la propiedad
import { Property } from '../types/property';
// Importa el servicio para interactuar con propiedades en Firestore
import { propertyService } from '../../firebase/firestoreService';
import { getRandomPropertyImages, getRandomPropertyImage } from '../constants/propertyImages';

// Hook personalizado para manejar la lógica de la página de detalle de una propiedad
export function usePropertyDetailPageLogic(id: string | string[]) {
  const [activeImage, setActiveImage] = useState(0);
  const queryClient = useQueryClient();

  // React Query para obtener la propiedad
  const { data: property, isLoading, error } = useQuery({
    queryKey: ['property', id],
    queryFn: () => propertyService.getPropertyById(id as string),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });

  // Pre-cargar cache si la propiedad ya existe en el cache de la lista
  // Buscar la propiedad en el cache de propiedades paginadas
  if (!property && id && !isLoading) {
    // Intentar obtener datos del cache de propiedades
    const propertiesData = queryClient.getQueryData(['properties', 1, 12]) as { properties?: Property[] } | undefined;
    if (propertiesData?.properties) {
      const cachedProperty = propertiesData.properties.find(p => p.id === id);
      if (cachedProperty) {
        queryClient.setQueryData(['property', id], cachedProperty);
      }
    }
  }

  // Obtiene el arreglo de imágenes de la propiedad, o imágenes de fallback si no existe
  const images = (() => {
    if (Array.isArray(property?.images) && property.images.length > 0) {
      return property.images;
    }
    
    // Si no hay imágenes, generar imágenes de fallback basadas en el tipo
    if (property?.type) {
      return getRandomPropertyImages(property.type, 5);
    }
    
    // Si no hay tipo específico, usar imágenes aleatorias
    return Array.from({ length: 5 }, () => getRandomPropertyImage());
  })();
  
  // Función para mostrar la siguiente imagen en el carrusel
  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  
  // Función para mostrar la imagen anterior en el carrusel
  const prevImage = () => setActiveImage((prev) => (prev - 1 + images.length) % images.length);

  // Genera la URL para el mapa de Google Maps usando la dirección de la propiedad
  const mapUrl = property?.address
    ? `https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`
    : '';

  return {
    property,
    isLoading,
    error,
    activeImage,
    images,
    nextImage,
    prevImage,
    mapUrl,
  };
} 