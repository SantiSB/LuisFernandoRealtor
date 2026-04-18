import ContactEmail from "@/components/contact/emails/ContactEmailTemplate";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const dataForm = await request.json();
  try {
    const data = await resend.emails.send({
      from: "Mena Inmobiliaria <contacto@menainmobiliaria.com>",
      to: ["contacto@menainmobiliaria.com", "ventas@menainmobiliaria.com"],
      subject: "Nuevo mensaje desde tu sitio web",
      text: "",
      react: React.createElement(ContactEmail, dataForm),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
