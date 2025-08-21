import { useMemo } from 'react';
import { getRandomPropertyImages, getRandomPropertyImage } from '../constants/propertyImages';

interface UsePropertyImagesProps {
  propertyImages?: string[];
  propertyType?: string;
  fallbackCount?: number;
}

export function usePropertyImages({ 
  propertyImages = [], 
  propertyType = '', 
  fallbackCount = 3 
}: UsePropertyImagesProps) {
  
  const images = useMemo(() => {
    // Si hay imágenes reales de la propiedad, usarlas
    if (propertyImages && propertyImages.length > 0) {
      return propertyImages;
    }
    
    // Si no hay imágenes, generar imágenes de fallback basadas en el tipo
    if (propertyType && propertyType.trim() !== '') {
      return getRandomPropertyImages(propertyType, fallbackCount);
    }
    
    // Si no hay tipo específico, usar imágenes aleatorias
    return Array.from({ length: fallbackCount }, () => getRandomPropertyImage());
  }, [propertyImages, propertyType, fallbackCount]);

  const hasImages = images.length > 0;
  const primaryImage = images[0] || '';
  const secondaryImages = images.slice(1);

  return {
    images,
    hasImages,
    primaryImage,
    secondaryImages,
    imageCount: images.length
  };
} 