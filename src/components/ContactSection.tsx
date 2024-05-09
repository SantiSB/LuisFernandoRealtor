"use client";
import { useState } from "react";
import BuyerEmail from "./BuyerEmail";
import SellerEmail from "./SellerEmail";
import { USER_ROLES } from "@/constants/constants";

export default function ContactSection() {
  const [roleUser, setRoleUser] = useState(USER_ROLES.SELLER);
  return (
    <section className="bg-secondary-50 dark:bg-secondary-800 text-secondary-900 dark:text-primary-50">
      <div className="py-12 lg:py-24 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl font-bold text-center text-secondary-900 dark:text-primary-400">
          Contacta a un Agente Inmobiliario
        </h2>
        <p className="mb-10 text-lg text-center">
          ¿Tienes alguna pregunta sobre comprar o vender una propiedad?
          ¿Necesitas ayuda para encontrar la casa perfecta o promocionar tu
          listado? Permítenos que nuestros experimentados agentes inmobiliarios
          te ayuden.
        </p>
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setRoleUser(USER_ROLES.SELLER)}
            className={`${
              roleUser === USER_ROLES.SELLER
                ? "bg-primary-500 text-secondary-900"
                : "bg-secondary-700 text-primary-50"
            } px-6 py-3 font-medium text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700`}
          >
            Soy Propietario
          </button>
          <button
            onClick={() => setRoleUser(USER_ROLES.BUYER)}
            className={`${
              roleUser === USER_ROLES.BUYER
                ? "bg-primary-500 text-secondary-900"
                : "bg-secondary-700 text-primary-50"
            } px-6 py-3 font-medium text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700`}
          >
            Soy Comprador
          </button>
        </div>
        {roleUser === USER_ROLES.SELLER ? <SellerEmail /> : <BuyerEmail />}
      </div>
    </section>
  );
}
