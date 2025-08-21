import Image from 'next/image';
import { useState } from 'react';
import { getRandomPropertyImage } from '../../constants/propertyImages';

interface PropertyImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallbackImage?: string;
}

export function PropertyImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fallbackImage
}: PropertyImageProps) {
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src || fallbackImage || getRandomPropertyImage());

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      // Si falla la imagen original, usar una imagen de fallback
      const fallback = fallbackImage || getRandomPropertyImage();
      setCurrentSrc(fallback);
    }
  };

  const imageProps = {
    src: currentSrc,
    alt,
    className,
    priority,
    sizes,
    onError: handleError,
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
      />
    );
  }

  return (
    <Image
      {...imageProps}
      width={width || 800}
      height={height || 600}
    />
  );
} 