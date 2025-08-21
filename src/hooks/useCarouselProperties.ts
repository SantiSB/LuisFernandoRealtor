import { useQuery } from '@tanstack/react-query';
import { getPaginatedProperties } from '../../firebase/firestoreService';
import { Property } from '../types/property';
import { getRandomPropertyImages, getRandomPropertyImage } from '../constants/propertyImages';

/**
 * Hook para obtener las propiedades del carrusel principal
 * 
 * Este hook obtiene las primeras 6 propiedades más recientes para mostrar
 * en el carrusel principal del home (sección superior).
 */
export function useCarouselProperties() {
  return useQuery({
    queryKey: ['carousel-properties'],
    queryFn: async () => {
      // Obtener las primeras 6 propiedades para el carrusel
      const result = await getPaginatedProperties(1, 6);
      const properties = result.properties as Property[];
      
      // Agregar imágenes de fallback a las propiedades que no tengan imágenes
      return properties.map(property => {
        if (!property.images || property.images.length === 0) {
          const fallbackImages = property.type 
            ? getRandomPropertyImages(property.type, 3)
            : Array.from({ length: 3 }, () => getRandomPropertyImage());
          
          return {
            ...property,
            images: fallbackImages
          };
        }
        return property;
      });
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });
}