'use client';

import { useState, useEffect } from 'react';
import { usePaginatedProperties } from '../../hooks/usePaginatedProperties';
import PropertyList from '../../components/admin/PropertyList';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  DollarSign, 
  Building2, 
  Home, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Loader2,
  Filter,
  X,
  Zap,
  Award,
  Star
} from "lucide-react";

const tipos = [
  { value: 'Casa', label: 'Casa', icon: Home },
  { value: 'Apartamento', label: 'Apartamento', icon: Building2 },
  { value: 'Casa Campestre', label: 'Casa Campestre', icon: Home },
  { value: 'Penthouse', label: 'Penthouse', icon: Building2 },
  { value: 'Lote', label: 'Lote', icon: MapPin },
  { value: 'Oficina', label: 'Oficina', icon: Building2 },
  { value: 'Local', label: 'Local', icon: Building2 },
  { value: 'Bodega', label: 'Bodega', icon: Building2 },
];

const ciudades = ['Pasto', 'Medellín', 'Bogotá', 'Cali'];

export default function PropiedadesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const { data, isLoading, error } = usePaginatedProperties({ 
    page: currentPage, 
    pageSize: 12,
    filters: {
      search,
      city,
      type,
      minPrice,
      maxPrice
    }
  });

  const properties = data?.properties || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / 12);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const hasActiveFilters = search || city || type || minPrice || maxPrice;

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Error al cargar las propiedades
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Por favor, intenta de nuevo más tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Inmobiliaria Líder en Nariño
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white px-4 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2 fill-white" />
              5.0 Rating
            </Badge>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Propiedades en <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Pasto</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Descubre nuestra exclusiva selección de propiedades en arriendo y venta para todos los presupuestos
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold">1000+ Propiedades</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Pasto, Nariño</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Filters Section */}
        <Card className="mb-12 border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Filtros de Búsqueda
                  </CardTitle>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Encuentra tu propiedad ideal
                  </p>
                </div>
              </div>
              
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearch('');
                    setCity('');
                    setType('');
                    setMinPrice('');
                    setMaxPrice('');
                  }}
                  className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpiar Filtros
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-red-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Buscar propiedades..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-red-500 dark:focus:border-red-400 rounded-xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600"
                />
              </div>

              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-3 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600">
                  <SelectValue placeholder="Ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {ciudades.map((ciudad) => (
                    <SelectItem key={ciudad} value={ciudad}>
                      {ciudad}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-3 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  {tipos.map((tipo) => (
                    <SelectItem key={tipo.value} value={tipo.value}>
                      <div className="flex items-center space-x-3">
                        <tipo.icon className="w-5 h-5" />
                        <span>{tipo.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-red-500 transition-colors" />
                <Input
                  type="number"
                  placeholder="Precio mínimo"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-red-500 dark:focus:border-red-400 rounded-xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600"
                />
              </div>

              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-red-500 transition-colors" />
                <Input
                  type="number"
                  placeholder="Precio máximo"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-red-500 dark:focus:border-red-400 rounded-xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600"
                />
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setSearch('');
                  setCity('');
                  setType('');
                  setMinPrice('');
                  setMaxPrice('');
                }}
                className="border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl px-6 py-3 transition-all duration-300 hover:border-red-300 dark:hover:border-red-600"
              >
                <X className="w-4 h-4 mr-2" />
                Limpiar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Cargando propiedades...
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Estamos preparando las mejores opciones para ti
              </p>
            </div>
          </div>
        ) : (
          <>
            {total > 0 && (
              <div className="mb-12 text-center">
                <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-2xl px-6 py-4 shadow-lg">
                  <Zap className="w-5 h-5 text-red-500" />
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    Mostrando <span className="font-bold text-red-600 dark:text-red-400">{properties.length}</span> de <span className="font-bold text-red-600 dark:text-red-400">{total}</span> propiedades
                  </p>
                </div>
              </div>
            )}

            <PropertyList properties={properties} />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-16 space-x-3">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl px-6 py-3 transition-all duration-300 hover:border-red-300 dark:hover:border-red-600 disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Anterior
                </Button>

                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={currentPage === page 
                        ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl px-4 py-3 shadow-lg" 
                        : "border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl px-4 py-3 transition-all duration-300 hover:border-red-300 dark:hover:border-red-600"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl px-6 py-3 transition-all duration-300 hover:border-red-300 dark:hover:border-red-600 disabled:opacity-50"
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {/* No Results */}
            {properties.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Building2 className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    No se encontraron propiedades
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                    Intenta ajustar los filtros de búsqueda o contacta con nosotros para más información.
                  </p>
                  <Button
                    onClick={() => {
                      setSearch('');
                      setCity('');
                      setType('');
                      setMinPrice('');
                      setMaxPrice('');
                    }}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Limpiar Filtros
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
} 