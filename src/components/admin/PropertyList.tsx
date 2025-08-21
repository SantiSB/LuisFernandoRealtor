'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Property } from '../../types/property';
import Link from 'next/link';
import { usePropertyCardLogic } from '../../hooks/usePropertyCardLogic';
import { usePropertyImages } from '../../hooks/usePropertyImages';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Edit, 
  Trash2,
  Building2,
  Image as ImageIcon,
  Star,
  Heart,
  Eye,
  Phone
} from "lucide-react";

interface PropertyListProps {
  properties: Property[];
  onEdit?: (property: Property) => void;
  onDelete?: (id: string) => void;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function PropertyCard({ property, onEdit, onDelete }: any) {
  const { images, hasImages, primaryImage } = usePropertyImages({
    propertyImages: property.images,
    propertyType: property.type,
    fallbackCount: 3
  });
  const { activeImage, nextImage, prevImage } = usePropertyCardLogic(images);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'available':
        return {
          label: 'Disponible',
          className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800'
        };
      case 'sold':
        return {
          label: 'Vendida',
          className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800'
        };
      default:
        return {
          label: 'Alquilada',
          className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800'
        };
    }
  };

  const statusConfig = getStatusConfig(property.status);

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
        <Link href={`/propiedades/${property.id}`} className="block">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              {hasImages ? (
                <>
                  <Image
                    src={images[activeImage]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    priority={false}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => { e.preventDefault(); prevImage(); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl hover:bg-white dark:hover:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                      >
                        <ChevronLeft className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => { e.preventDefault(); nextImage(); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl hover:bg-white dark:hover:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                      >
                        <ChevronRight className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                      </Button>
                    </>
                  )}

                  {/* Image counter */}
                  {images.length > 1 && (
                    <motion.div 
                      className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {activeImage + 1} / {images.length}
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                  <div className="text-center text-zinc-400 dark:text-zinc-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Sin imagen</span>
                  </div>
                </div>
              )}
              
              {/* Status badge */}
              <motion.div 
                className="absolute top-4 left-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Badge variant="secondary" className={`${statusConfig.className} px-3 py-1 font-semibold`}>
                  {statusConfig.label}
                </Badge>
              </motion.div>

              {/* Favorite button */}
              <motion.div 
                className="absolute top-4 right-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg hover:bg-white dark:hover:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                </Button>
              </motion.div>

              {/* Quick view overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  zIndex: 1,
                  left: '60px',
                  right: '60px'
                }}
              >
                <div className="text-center text-white">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-medium">Ver Detalles</span>
                </div>
              </motion.div>
            </div>
          </CardHeader>
        </Link>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Property type and rating */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-800 dark:text-red-300 px-3 py-1">
                <Building2 className="w-3 h-3 mr-1" />
                {property.type}
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">4.8</span>
              </div>
            </motion.div>

            {/* Title and location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {property.title}
              </h3>
              <div className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 mb-3">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm line-clamp-1">{property.address}</span>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="text-2xl font-black text-red-600 dark:text-red-400">
                ${property.price.toLocaleString()}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                <Phone className="w-4 h-4 mr-1" />
                Contactar
              </Button>
            </motion.div>

            {/* Property features */}
            <motion.div 
              className="flex items-center justify-between py-3 border-t border-zinc-100 dark:border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <div className="flex items-center space-x-4 text-sm text-zinc-600 dark:text-zinc-400">
                {property.bedrooms && (
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4 text-red-500" />
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4 text-red-500" />
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                )}
                {property.area && (
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4 text-red-500" />
                    <span className="font-medium">{property.area} m²</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              {property.description}
            </motion.p>

            {/* Admin actions */}
            {(onEdit || onDelete) && (
              <motion.div 
                className="flex space-x-3 pt-4 border-t border-zinc-100 dark:border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                {onEdit && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => { e.preventDefault(); onEdit(property); }}
                    className="flex-1 border-red-300 text-red-700 hover:bg-red-50 dark:border-red-600 dark:text-red-300 dark:hover:bg-red-900/30 rounded-xl"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                )}
                {onDelete && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => { e.preventDefault(); onDelete(property.id); }}
                    className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-600 dark:text-red-300 dark:hover:bg-red-900/30 rounded-xl"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PropertyList({ properties, onEdit, onDelete }: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <motion.div 
        className="text-center py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="max-w-md mx-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-0 shadow-2xl rounded-3xl">
          <CardContent className="p-12">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              No hay propiedades
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Comienza creando tu primera propiedad para mostrar en el catálogo.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {properties.map((property, index) => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </motion.div>
  );
} 