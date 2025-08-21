'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { usePropertyDetailPageLogic } from '../../../hooks/usePropertyDetailPageLogic';
import { usePropertyImages } from '../../../hooks/usePropertyImages';
import MapView from '../../../components/map/MapView';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Building2,
  Image as ImageIcon,
  Phone,
  Mail,
  Share2,
  Heart,
  Star,
  Award,
  Shield,
  Calendar,
  Users,
  Zap
} from "lucide-react";

export default function DetallePropiedadPage() {
  const { id } = useParams();
  const { property, isLoading, error, activeImage, images, nextImage, prevImage, mapUrl } = usePropertyDetailPageLogic(id);
  
  const { images: propertyImages, hasImages } = usePropertyImages({
    propertyImages: property?.images,
    propertyType: property?.type,
    fallbackCount: 5
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Cargando propiedad...
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Estamos preparando todos los detalles para ti
          </p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Error al cargar la propiedad
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            La propiedad no se encuentra disponible
          </p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            asChild
            className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 group"
          >
            <Link href="/propiedades">
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a Propiedades
            </Link>
          </Button>
        </div>

        <div className="grid xl:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="xl:col-span-3 space-y-8">
            
            {/* Hero Image Section */}
            <Card className="border-0 shadow-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <div className="relative aspect-[21/9] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                  {images.length > 0 ? (
                    <>
                      <Image
                        src={images[activeImage]}
                        alt={property.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Image navigation */}
                      {images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl hover:bg-white dark:hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
                          >
                            <ChevronLeft className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl hover:bg-white dark:hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
                          >
                            <ChevronRight className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
                          </Button>

                          {/* Image counter */}
                          <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur">
                            {activeImage + 1} / {images.length}
                          </div>
                        </>
                      )}

                      {/* Status badge */}
                      <div className="absolute top-6 left-6">
                        <Badge variant="secondary" className={`${statusConfig.className} px-4 py-2 font-semibold text-sm`}>
                          {statusConfig.label}
                        </Badge>
                      </div>

                      {/* Action buttons */}
                      <div className="absolute top-6 right-6 flex space-x-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
                        >
                          <Heart className="w-5 h-5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
                        >
                          <Share2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-zinc-400 dark:text-zinc-500">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                          <ImageIcon className="h-10 w-10 text-white" />
                        </div>
                        <span className="text-lg font-medium">Sin imágenes disponibles</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card className="border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-800 dark:text-red-300 px-3 py-1">
                        <Building2 className="w-4 h-4 mr-1" />
                        {property.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">4.8</span>
                      </div>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
                      {property.title}
                    </h1>
                    
                    <div className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 mb-6">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <span className="text-lg">{property.address}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Property Features */}
                <div className="grid grid-cols-3 gap-6">
                  {property.bedrooms && (
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border border-red-200 dark:border-red-800">
                      <Bed className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-1">{property.bedrooms}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Habitaciones</div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border border-red-200 dark:border-red-800">
                      <Bath className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-1">{property.bathrooms}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Baños</div>
                    </div>
                  )}
                  {property.area && (
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border border-red-200 dark:border-red-800">
                      <Square className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                      <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-1">{property.area}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">m²</div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-red-500 mr-2" />
                    Descripción
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                    {property.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-zinc-900 dark:text-zinc-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold">Ubicación</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-normal">
                      Encuentra esta propiedad en el mapa
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MapView
                  address={property.address}
                  lat={property.lat || undefined}
                  lng={property.lng || undefined}
                  draggable={false}
                  height="400px"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            
            <div className="sticky top-8 space-y-8">
              {/* Price Card */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-black mb-3">
                      ${property.price.toLocaleString()}
                    </div>
                    <div className="text-red-100 text-lg font-medium">Precio de venta</div>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span className="text-sm text-red-100">Precio competitivo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Agent */}
              <Card className="border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                    <Users className="w-5 h-5 text-red-500 mr-2" />
                    Contactar Agente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-2xl shadow-lg"
                  >
                    <a 
                      href="https://wa.me/573105049377"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar Ahora
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 py-4 rounded-2xl font-semibold"
                  >
                    <Link href="/contacto">
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Link>
                  </Button>
                  
                  <div className="text-center pt-6 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-zinc-900 dark:text-zinc-100">J&A Inmobiliaria</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Agente Certificado</p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">+57 310 504 9377</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Atención 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* Property Info */}
              <Card className="border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                    <Shield className="w-5 h-5 text-red-500 mr-2" />
                    Información Adicional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400">Referencia</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">#{id}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400">Tipo</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{property.type}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400">Estado</span>
                    <Badge variant="secondary" className={statusConfig.className}>
                      {statusConfig.label}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-zinc-600 dark:text-zinc-400">Publicado</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">Hoy</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 