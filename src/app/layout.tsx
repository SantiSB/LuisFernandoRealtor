import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "leaflet/dist/leaflet.css";
import Header from "../components/layout/Header";
import { ThemeProvider } from "../components/theme/ThemeContext";
import { AuthProvider } from "../components/auth/AuthContext";
import Footer from "../components/layout/Footer";
import { AlertProvider } from "@/components/layout/AlertContext";
import ReactQueryProvider from '../providers/ReactQueryProvider';
import WhatsAppButton from "@/components/whatasapp/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J&A Inmobiliaria | Inmobiliaria Líder en Nariño | Propiedades en Arriendo y Venta en Pasto | Todos los Presupuestos",
  description: "J&A Inmobiliaria, la inmobiliaria líder en Nariño. Encuentra propiedades en arriendo y venta en Pasto para todos los presupuestos. Tu socio inmobiliario de confianza en Nariño.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ReactQueryProvider>
        <ThemeProvider>
          <AuthProvider>
            <AlertProvider>
              <body
                className={`${inter.className} bg-gray-50 dark:bg-black text-black dark:text-white`}
              >
                <Header />
                <WhatsAppButton phoneNumber="573105049377" />
                {children}
                <Footer />
              </body>
            </AlertProvider>
          </AuthProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
