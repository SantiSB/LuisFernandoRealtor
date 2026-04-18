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
import { SITE_ORIGIN } from "@/constants/constants";

const inter = Inter({ subsets: ["latin"] });

const defaultTitle =
  "Mena Inmobiliaria | Inmobiliaria Líder en Nariño | Propiedades en Arriendo y Venta en Pasto | Todos los Presupuestos";
const defaultDescription =
  "Mena Inmobiliaria, la inmobiliaria líder en Nariño. Encuentra propiedades en arriendo y venta en Pasto para todos los presupuestos. Tu socio inmobiliario de confianza en Nariño.";

const siteMetadataBase = new URL(`${SITE_ORIGIN}/`);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Mena Inmobiliaria",
  url: SITE_ORIGIN,
  image: `${SITE_ORIGIN}/logo.svg`,
  telephone: "+57-315-784-2019",
  email: "contacto@menainmobiliaria.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 20 # 24-35",
    addressLocality: "Pasto",
    addressRegion: "Nariño",
    addressCountry: "CO",
  },
  sameAs: [
    "https://www.instagram.com/menainmobiliaria/",
    "https://www.tiktok.com/@mena.inmobiliaria",
    "https://www.facebook.com/menainmobiliaria",
  ],
};

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: defaultTitle,
    template: "%s | Mena Inmobiliaria",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteMetadataBase,
    siteName: "Mena Inmobiliaria",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/logo.svg",
        width: 40,
        height: 40,
        alt: "Mena Inmobiliaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${SITE_ORIGIN}/logo.svg`],
  },
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
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd),
                  }}
                />
                <Header />
                <WhatsAppButton phoneNumber="573157842019" />
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
