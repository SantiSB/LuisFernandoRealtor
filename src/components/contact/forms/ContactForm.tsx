import React from "react";
import { motion } from "framer-motion";
import { useContactFormLogic } from "@/hooks/useContactFormLogic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, AlertCircle, User, Mail, Phone, MessageSquare, Zap } from "lucide-react";

interface ContactFormProps {
  formSubmit: (data: any) => void;
  loading: boolean;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const headerVariants = {
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

const buttonVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(220, 38, 38, 0.3), 0 10px 10px -5px rgba(220, 38, 38, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

const ContactForm: React.FC<ContactFormProps> = ({ formSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  } = useContactFormLogic({ formSubmit, loading });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded-3xl overflow-hidden">
        <CardHeader className="pb-8">
          <motion.div 
            className="flex items-center space-x-4 mb-4"
            variants={headerVariants}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <Send className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <CardTitle className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Contacto General
              </CardTitle>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Envíanos tu consulta y te responderemos en el menor tiempo posible.
              </p>
            </div>
          </motion.div>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            <motion.div className="space-y-3" variants={itemVariants}>
              <Label htmlFor="nombre" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
                <User className="w-4 h-4 mr-2 text-red-500" />
                Nombre Completo *
              </Label>
              {errors.nombre && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.nombre.message}</span>
                </motion.div>
              )}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="nombre"
                  type="text"
                  {...register("nombre")}
                  className={`w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-4 px-4 text-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 ${
                    errors.nombre ? 'border-red-500 dark:border-red-400' : ''
                  }`}
                  placeholder="Ingresa tu nombre completo"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <Label htmlFor="correo" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                Correo Electrónico *
              </Label>
              {errors.correo && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.correo.message}</span>
                </motion.div>
              )}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="correo"
                  type="email"
                  {...register("correo")}
                  className={`w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-4 px-4 text-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 ${
                    errors.correo ? 'border-red-500 dark:border-red-400' : ''
                  }`}
                  placeholder="tu@email.com"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <Label htmlFor="telefono" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                Teléfono *
              </Label>
              {errors.telefono && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.telefono.message}</span>
                </motion.div>
              )}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="telefono"
                  type="tel"
                  {...register("telefono")}
                  className={`w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-4 px-4 text-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 ${
                    errors.telefono ? 'border-red-500 dark:border-red-400' : ''
                  }`}
                  placeholder="+57 300 123 4567"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <Label htmlFor="asunto" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-red-500" />
                Asunto *
              </Label>
              {errors.asunto && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.asunto.message}</span>
                </motion.div>
              )}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="asunto"
                  type="text"
                  {...register("asunto")}
                  className={`w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-4 px-4 text-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 ${
                    errors.asunto ? 'border-red-500 dark:border-red-400' : ''
                  }`}
                  placeholder="Asunto de tu consulta"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <Label htmlFor="mensaje" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-red-500" />
                Mensaje *
              </Label>
              {errors.mensaje && (
                <motion.div 
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.mensaje.message}</span>
                </motion.div>
              )}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  id="mensaje"
                  {...register("mensaje")}
                  className={`w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400 rounded-xl py-4 px-4 text-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 min-h-[140px] resize-none ${
                    errors.mensaje ? 'border-red-500 dark:border-red-400' : ''
                  }`}
                  placeholder="Cuéntanos en detalle tu consulta..."
                />
              </motion.div>
            </motion.div>
            
            {!isValid && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Alert variant="destructive" className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <AlertCircle className="h-5 w-5" />
                  <AlertDescription className="text-red-800 dark:text-red-200 font-medium">
                    Por favor, complete todos los campos correctamente
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
            
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                disabled={loading}
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {loading ? (
                  <motion.div 
                    className="w-6 h-6 mr-3 animate-spin rounded-full border-2 border-white border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <Send className="w-6 h-6 mr-3" />
                )}
                {loading ? "Enviando Mensaje..." : "Enviar Mensaje"}
              </motion.button>
            </motion.div>

            <motion.div 
              className="text-center pt-6 border-t border-zinc-200 dark:border-zinc-700"
              variants={itemVariants}
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Te responderemos en menos de 24 horas
              </p>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm; 