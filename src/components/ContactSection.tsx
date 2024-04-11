"use client";

import { useState } from "react";

interface FormInfo {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  telefono: string;
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formInfo, setFormInfo] = useState({} as FormInfo);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formInfo),
    });
    setLoading(false);
  };

  return (
    <section className="bg-dark-50 dark:bg-dark-800 text-dark-900 dark:text-gold-50">
      <div className="py-12 lg:py-24 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl font-bold text-center text-dark-900 dark:text-gold-400">
          Contacta a un Agente Inmobiliario
        </h2>
        <p className="mb-10 text-lg text-center">
          ¿Tienes alguna pregunta sobre comprar o vender una propiedad?
          ¿Necesitas ayuda para encontrar la casa perfecta o promocionar tu
          listado? Permítenos que nuestros experimentados agentes inmobiliarios
          te ayuden.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-dark-900 dark:text-gold-200"
            >
              Nombre
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full px-4 py-3 text-dark-900 placeholder-dark-700 bg-gray-50 border border-dark-700 rounded-lg shadow-sm dark:bg-dark-800 dark:border-gold-600 dark:text-gold-50 dark:placeholder-gold-200"
              placeholder="Tu nombre"
              required
              onChange={(e) =>
                setFormInfo({ ...formInfo, nombre: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-dark-900 dark:text-gold-200"
            >
              Tu dirección de correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-3 text-dark-900 placeholder-dark-700 bg-gray-50 border border-dark-700 rounded-lg shadow-sm dark:bg-dark-800 dark:border-gold-600 dark:text-gold-50 dark:placeholder-gold-200"
              placeholder="nombre@ejemplo.com"
              required
              onChange={(e) =>
                setFormInfo({ ...formInfo, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-dark-900 dark:text-gold-200"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full px-4 py-3 text-dark-900 placeholder-dark-700 bg-gray-50 border border-dark-700 rounded-lg shadow-sm dark:bg-dark-800 dark:border-gold-600 dark:text-gold-50 dark:placeholder-gold-200"
              placeholder="Cuéntanos cómo podemos ayudarte"
              required
              onChange={(e) =>
                setFormInfo({ ...formInfo, asunto: e.target.value })
              }
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-dark-900 dark:text-gold-200"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows={6}
              className="block w-full px-4 py-3 text-dark-900 placeholder-dark-700 bg-gray-50 border border-dark-700 rounded-lg shadow-sm dark:bg-dark-800 dark:border-gold-600 dark:text-gold-50 dark:placeholder-gold-200"
              placeholder="Deja un mensaje..."
              required
              onChange={(e) =>
                setFormInfo({ ...formInfo, mensaje: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-dark-900 dark:text-gold-200"
            >
              Telefono
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full px-4 py-3 text-dark-900 placeholder-dark-700 bg-gray-50 border border-dark-700 rounded-lg shadow-sm dark:bg-dark-800 dark:border-gold-600 dark:text-gold-50 dark:placeholder-gold-200"
              placeholder="Tu número de teléfono"
              required
              onChange={(e) =>
                setFormInfo({ ...formInfo, telefono: e.target.value })
              }
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-dark-900 bg-gold-500 rounded-lg hover:bg-gold-600 focus:outline-none focus:ring-4 focus:ring-gold-300 dark:focus:ring-gold-700 shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}