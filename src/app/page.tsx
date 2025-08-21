'use client';

import CarouselSection from "@/components/home/CarouselSection";
import MainSection from "../components/home/MainSection";
import PropertyList from "../components/admin/PropertyList";
import { useFeaturedProperties } from "../hooks/useFeaturedProperties";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data: featuredProperties, isLoading } = useFeaturedProperties();

  return (
          <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
      <MainSection />
      
      <div className="w-full mb-16">
        <CarouselSection />
      </div>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800">
            Catálogo Premium
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Propiedades
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Destacadas
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Descubre nuestra selección de propiedades premium en las mejores ubicaciones
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-red-600 dark:text-red-400 mx-auto mb-4" />
              <p className="text-zinc-600 dark:text-zinc-400">Cargando propiedades...</p>
            </div>
          </div>
        ) : featuredProperties && featuredProperties.length > 0 ? (
          <>
            <PropertyList properties={featuredProperties} />
            
            {/* Botón para ver todas las propiedades */}
            <div className="text-center mt-12">
              <Link href="/propiedades">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Ver Todas las Propiedades
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              No hay propiedades disponibles en este momento.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
