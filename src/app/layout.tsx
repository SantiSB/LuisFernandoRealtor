import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./state/ThemeContext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Luis Fernando Realtor | Agente de Bienes Raíces de Lujo | Pasto, Medellín, Cali | Vende tu propiedad en tiempo record",
  description:
    "Agente de Bienes Raíces de Lujo | Pasto, Medellín, Cali | Vende tu propiedad en tiempo record",
  icons: {
    icon: "/LFR-Logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ThemeProvider>
        <body
          className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
        >
          <Header />
          <div className="mt-16"></div>
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
