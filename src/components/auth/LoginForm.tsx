'use client';

import React from "react";
import { useLoginFormLogic } from "../../hooks/useLoginFormLogic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail, Lock, AlertCircle } from "lucide-react";

const LoginForm: React.FC = () => {
  const {
    email,
    password,
    loading,
    error,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginFormLogic();

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur">
      <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Panel de Administrador
        </CardTitle>
        <p className="text-zinc-600 dark:text-zinc-400">
          Accede a tu panel de control
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Correo electrónico *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="pl-10 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400"
                placeholder="Ingresa tu correo"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Contraseña *
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="pl-10 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 focus:border-red-500 dark:focus:border-red-400"
                placeholder="Ingresa tu contraseña"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 h-auto"
          >
            <Shield className="w-4 h-4 mr-2" />
            {loading ? "Iniciando sesión..." : "Acceder al Panel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm; 