import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  Award, 
  Shield, 
  MapPin, 
  Phone, 
  Home,
  Building2,
  Users,
  TrendingUp,
  CheckCircle,
  Zap
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function MainSection() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-red-50/30 dark:from-zinc-900 dark:via-black dark:to-red-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.05),transparent_50%)]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-red-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[85vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Left Content */}
            <motion.div className="space-y-8 lg:space-y-10" variants={itemVariants}>
              {/* Badges */}
              <motion.div 
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800 px-4 py-2 text-sm font-semibold">
                  <Award className="w-4 h-4 mr-2" />
                  Inmobiliaria Líder en Nariño
                </Badge>
                <Badge variant="outline" className="border-zinc-300 dark:border-zinc-600 px-4 py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 mr-2 fill-red-500 text-red-500" />
                  5.0 Rating
                </Badge>
              </motion.div>

              {/* Main Headline */}
              <motion.div className="space-y-6" variants={fadeInUp}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 leading-[0.9]">
                  Tu Hogar en
                  <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                    Pasto, Nariño
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl xl:text-4xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Propiedades en <span className="font-semibold text-red-600 dark:text-red-400">arriendo</span> y <span className="font-semibold text-red-600 dark:text-red-400">venta</span> para todos los presupuestos
                </p>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl font-medium"
                variants={itemVariants}
              >
                <span className="text-red-600 dark:text-red-400 font-bold">J&A Inmobiliaria</span>, la inmobiliaria líder en Nariño. 
                Encuentra tu propiedad ideal en Pasto con nuestro amplio portafolio de opciones.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 lg:gap-8 pt-4"
                variants={itemVariants}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 text-xl px-10 py-8 rounded-2xl group"
                >
                  <Link href="/contacto" className="flex items-center space-x-3">
                    <span>Contactar Asesor</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xl px-10 py-8 rounded-2xl font-semibold hover:border-red-500 dark:hover:border-red-400 transition-all duration-300"
                >
                  <Link href="/propiedades" className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5" />
                    <span>Ver Propiedades</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Statistics */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800"
                variants={itemVariants}
              >
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl lg:text-5xl font-black text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">1000+</div>
                  <div className="text-sm lg:text-base text-zinc-600 dark:text-zinc-400 font-medium mt-2">Propiedades Disponibles</div>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl lg:text-5xl font-black text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-sm lg:text-base text-zinc-600 dark:text-zinc-400 font-medium mt-2">Clientes Satisfechos</div>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl lg:text-5xl font-black text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-sm lg:text-base text-zinc-600 dark:text-zinc-400 font-medium mt-2">Años en Nariño</div>
                </motion.div>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="flex items-center space-x-8 pt-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold">+57 310 504 9377</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold">Pasto, Nariño</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Property Showcase */}
            <motion.div 
              className="relative"
              variants={scaleIn}
            >
              {/* Main Property Image */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/home.webp"
                  alt="Propiedades en Pasto, Nariño"
                  width={800}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating property info */}
                <motion.div 
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Badge className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-zinc-900 dark:text-white font-semibold px-4 py-2">
                    <Home className="w-4 h-4 mr-2" />
                    Propiedad Destacada
                  </Badge>
                </motion.div>
                
                {/* Price tag */}
                <motion.div 
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    $850M
                  </div>
                </motion.div>
              </motion.div>

              {/* Quality Guarantee Card */}
              <motion.div
                className="absolute -bottom-8 -left-8"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Card className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur border-0 shadow-2xl rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
                          Garantía de Calidad
                        </div>
                        <div className="text-zinc-600 dark:text-zinc-400 text-lg">
                          Propiedades verificadas en Pasto
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -top-8 -right-8"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Card className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur border-0 shadow-2xl rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-red-600 dark:text-red-400">500+</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Transacciones Exitosas</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800 px-6 py-3 text-lg font-semibold mb-6">
              <Zap className="w-5 h-5 mr-2" />
              ¿Por qué elegir J&A Inmobiliaria?
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8">
              La <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Inmobiliaria</span> Más Confiable de Nariño
            </h2>
            <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Más de una década de experiencia nos respalda como la inmobiliaria líder en Pasto, 
              ofreciendo el mejor servicio y las mejores propiedades.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Líder en Nariño
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    La inmobiliaria más confiable de Pasto con amplia experiencia y reconocimiento en la región.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <TrendingUp className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Todos los Presupuestos
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    Propiedades en arriendo y venta para todas las necesidades y capacidades económicas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Atención Personalizada
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    Servicio dedicado y asesoría especializada para encontrar tu propiedad ideal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Confianza Total
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    Tu socio inmobiliario de confianza en Nariño con transparencia en cada transacción.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Propiedades Verificadas
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    Todas nuestras propiedades pasan por un riguroso proceso de verificación y validación.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-10 text-center">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Excelencia Garantizada
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed">
                    Compromiso con la excelencia en cada detalle del servicio inmobiliario.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
