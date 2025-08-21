import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  ExternalLink,
  Heart,
  Home
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white dark:bg-zinc-800 p-2 shadow-lg border border-zinc-200 dark:border-zinc-700 mr-3 flex items-center justify-center">
                <Image src="/logo.svg" alt="J&A Inmobiliaria" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">J&A Inmobiliaria</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">Inmobiliaria Líder en Nariño</p>
              </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-md">
              La inmobiliaria líder en Nariño. Ofrecemos propiedades en arriendo y venta 
              para todos los presupuestos en Pasto. Tu socio inmobiliario de confianza.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-red-500 mr-3"></span>
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+573105049377" className="hover:underline">
                  +57 310 504 9377
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:info@jainmobiliaria.com" className="hover:underline">
                  info@jainmobiliaria.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-300">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Pasto, Nariño</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-red-500 mr-3"></span>
              Síguenos
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/jainmobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="hover:underline">Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.tiktok.com/@jainmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="hover:underline">TikTok</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © 2024 <span className="text-red-600 dark:text-red-400 font-semibold">J&A Inmobiliaria</span> ™ |
              Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
