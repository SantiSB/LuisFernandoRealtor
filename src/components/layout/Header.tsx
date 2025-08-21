'use client';

import ThemeToggleButton from "../theme/ThemeToggleButton";
import Link from 'next/link';
import Image from 'next/image';
import { useHeaderLogic } from '../../hooks/useHeaderLogic';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2, Home, Phone, User, Star } from "lucide-react";

const navigationLinks = [
  { href: "/propiedades", text: "Propiedades", icon: Building2 },
  { href: "/contacto", text: "Contacto", icon: Phone },
];

export default function Header() {
  const {
    isAuthenticated,
    menuOpen,
    setMenuOpen,
    handleAdminPanel,
  } = useHeaderLogic();

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-lg">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+57 310 504 9377</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Agente Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-3 h-3 fill-current" />
              <span>5.0 Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
                          <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white dark:bg-zinc-800 p-2 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <Image src="/logo.svg" alt="J&A Inmobiliaria" width={30} height={30} />
              </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                J&A Inmobiliaria
              </span>
              <span className="text-sm font-semibold text-red-600 dark:text-red-400 tracking-wider uppercase">
                Inmobiliaria Líder en Nariño
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-base font-medium text-zinc-600 dark:text-zinc-300 transition-all duration-200 hover:text-red-600 dark:hover:text-red-400 hover:scale-105"
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.text}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            {isAuthenticated && (
              <Button
                onClick={handleAdminPanel}
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 hover:scale-105"
              >
                <User className="mr-2 h-5 w-5" />
                Panel Admin
              </Button>
            )}
            
            <div className="flex items-center space-x-2">
              <ThemeToggleButton />
            </div>
          </div>

          <div className="lg:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="lg" className="p-3 text-zinc-600 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col space-y-8 pt-8">
                  <div className="flex items-center space-x-4 pb-6 border-b border-zinc-200 dark:border-zinc-700">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white dark:bg-zinc-800 p-2 shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                      <Image src="/logo.svg" alt="J&A Inmobiliaria" width={24} height={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-zinc-900 dark:text-white">
                        J&A Inmobiliaria
                      </span>
                                    <span className="text-sm font-semibold text-red-600 dark:text-red-400 tracking-wider uppercase">
                Inmobiliaria Líder en Nariño
              </span>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-6">
                    {navigationLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center space-x-4 text-lg font-medium text-zinc-600 dark:text-zinc-300 transition-colors hover:text-red-600 dark:hover:text-red-400 py-3"
                        >
                          <Icon className="h-6 w-6" />
                          <span>{link.text}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="flex flex-col space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                    {isAuthenticated && (
                      <Button
                        onClick={() => { setMenuOpen(false); handleAdminPanel(); }}
                        variant="default"
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-200"
                      >
                        <User className="mr-2 h-5 w-5" />
                        Panel Administrador
                      </Button>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                        Tema
                      </span>
                      <ThemeToggleButton />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
