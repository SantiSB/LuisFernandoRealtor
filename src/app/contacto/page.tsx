'use client';

import Image from 'next/image';
import ContactSection from '../../components/contact/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  CheckCircle,
  Award,
  Users,
  Target
} from "lucide-react";

export default function ContactoPage() {
  return (
          <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
      
      <ContactSection />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800 mb-4">
              Contacto Directo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Información de Contacto
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte con todas tus necesidades inmobiliarias. 
              Contáctanos a través de cualquiera de estos medios para una atención personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            <Card className="border-0 shadow-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Email</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Envíanos un mensaje</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  Para consultas detalladas y propuestas personalizadas
                </p>
                <a 
                  href="mailto:info@jainmobiliaria.com" 
                  className="text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors inline-flex items-center"
                >
                  info@jainmobiliaria.com
                  <Mail className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Teléfono</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Llámanos directamente</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  Atención inmediata y personalizada
                </p>
                <a 
                  href="tel:+573105049377" 
                  className="text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors inline-flex items-center"
                >
                  +57 310 504 9377
                  <Phone className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Oficina</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Visítanos personalmente</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  Reuniones y asesorías presenciales
                </p>
                <div className="text-red-600 dark:text-red-400 font-medium">
                  <p>Pasto, Nariño</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Cita previa</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <Card className="border-0 shadow-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  ¿Por qué elegirnos?
                </CardTitle>
                <p className="text-zinc-600 dark:text-zinc-400">
                  La inmobiliaria líder en Nariño con amplia experiencia en Pasto
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                        Líder en Nariño
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        La inmobiliaria más confiable de Pasto con amplia experiencia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                        Todos los Presupuestos
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        Propiedades en arriendo y venta para todas las necesidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                        Atención Personalizada
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        Servicio dedicado y asesoría especializada en Pasto
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                        Confianza Total
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        Tu socio inmobiliario de confianza en Nariño
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                    5.0 Rating • 200+ Clientes Satisfechos
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-32 h-32 mb-6">
                  <Image 
                    src="/logo.svg" 
                    alt="J&A Inmobiliaria" 
                    width={128} 
                    height={128} 
                    className="w-full h-full" 
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    J&A Inmobiliaria
                  </h3>
                  <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                    Bienes Raíces de Lujo
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-sm">
                    Especialistas en bienes raíces de lujo
                  </p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 