import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IsopanelBudgett from "@/components/IsopanelBudgett";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Techo de Isopanel colocado desde USD 90/m² en Montevideo | MOD Soluciones",
  description:
    "Calculá el precio estimado de tu techo de isopanel colocado en Montevideo y zona metropolitana. Instalación completa, remates, sellado, garantía y coordinación por WhatsApp.",
};

const priceFactors = [
  {
    title: "Estructura existente",
    text: "No es lo mismo instalar sobre una base pronta que resolver apoyos, corregir desniveles o fabricar estructura.",
  },
  {
    title: "Remates y sellados",
    text: "Babetas, goteros, encuentros contra muros y sellados bien resueltos evitan problemas de filtración.",
  },
  {
    title: "Canaletas y desagües",
    text: "Si hay que resolver salida de agua, canaletas o desagües, entran materiales y trabajo adicional.",
  },
  {
    title: "Altura y acceso",
    text: "Subir materiales, trabajar en altura o montar seguridad puede cambiar el costo real de instalación.",
  },
];

const includedItems = [
  "Isopanel de 10 cm para techo",
  "Colocación de paneles",
  "Fijaciones según estructura",
  "Sellado de juntas y encuentros",
  "Goteros y remates básicos",
  "Coordinación directa por WhatsApp",
  "Garantía de instalación",
];

const processSteps = [
  {
    title: "Nos pasás medidas aproximadas",
    text: "Caída del techo, frente a cubrir, zona y fotos si tenés.",
  },
  {
    title: "Te damos una orientación clara",
    text: "Te explicamos precio estimado, qué incluye y qué puede variar.",
  },
  {
    title: "Confirmamos detalles técnicos",
    text: "Revisamos estructura, altura, apoyos, remates, canaletas y accesos.",
  },
  {
    title: "Presupuesto final por escrito",
    text: "Definimos alcance, materiales, plazo, terminaciones y garantía.",
  },
  {
    title: "Instalamos el techo",
    text: "Ejecutamos la colocación con fijaciones, sellados y remates correspondientes.",
  },
];

const faqs = [
  {
    question: "¿El precio de USD 90/m² es final?",
    answer:
      "Es un precio orientativo desde para obras simples. El presupuesto final puede variar por estructura, altura, remates, canaletas, acceso, retiro de techo anterior o condiciones reales de la obra.",
  },
  {
    question: "¿Venden solo el isopanel?",
    answer:
      "No. Trabajamos soluciones completas con instalación incluida. La idea es entregar el techo resuelto, no solo vender material.",
  },
  {
    question: "¿Qué medidas necesito para consultar?",
    answer:
      "Lo ideal es pasar la caída o largo del panel, el frente o ancho a cubrir, zona, altura y fotos del lugar. Con eso podemos orientarte mejor.",
  },
  {
    question: "¿Cuándo puede requerir apoyo intermedio?",
    answer:
      "Como referencia, si la caída supera aproximadamente 5,50 m puede requerir apoyo o una solución estructural específica. Se confirma según cada caso.",
  },
  {
    question: "¿Trabajan en Canelones?",
    answer:
      "Sí, trabajamos en Montevideo y zona metropolitana. Fuera de esa zona puede variar el flete o la logística.",
  },
  {
    question: "¿La visita técnica tiene costo?",
    answer:
      "Primero podemos orientar por medidas y fotos. Si el trabajo requiere visita técnica, se coordina y se aclara el costo antes. En algunos casos puede descontarse si se avanza con la obra.",
  },
];

export default function PrecioTechoIsopanelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <IsopanelBudgett />

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Precio de techo de isopanel
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              ¿Cuánto cuesta un techo de isopanel colocado?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
              El precio no depende solo de los metros cuadrados. También influyen
              la estructura existente, los remates, el sellado, la altura de trabajo,
              la salida de agua y las condiciones reales del lugar.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
              Por eso usamos un valor orientativo desde para que tengas una referencia,
              y después confirmamos el presupuesto final con medidas, fotos o visita técnica.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo orientativo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Techo de 20 m²</h3>
              <p className="mt-3 text-slate-700">
                Referencia aproximada desde <strong>USD 1.800</strong>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo orientativo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Techo de 40 m²</h3>
              <p className="mt-3 text-slate-700">
                Referencia aproximada desde <strong>USD 3.600</strong>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo orientativo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Techo de 60 m²</h3>
              <p className="mt-3 text-slate-700">
                Referencia aproximada desde <strong>USD 5.400</strong>
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            * Valores orientativos desde USD 90/m² para obras simples. La calculadora
            puede redondear metros reales por cantidad de paneles necesarios.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Qué incluye
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                ¿Qué incluye el precio desde USD 90/m²?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
                El objetivo no es solo colocar paneles. Buscamos entregar un techo
                resuelto, con los puntos críticos bien trabajados para reducir riesgos
                de filtración y problemas futuros.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-800"
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              No compares solo el panel
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Un techo barato puede salir caro si falla la instalación
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              Dos techos de la misma medida pueden tener precios distintos. No es
              lo mismo colocar sobre una estructura lista que resolver apoyos, babetas,
              goteros, sellados, desagües o encuentros contra paredes.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              En techos de isopanel, muchos problemas aparecen en juntas mal selladas,
              falta de pendiente, fijaciones débiles o remates mal resueltos. Ahí es
              donde una instalación seria marca la diferencia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Variables del presupuesto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              ¿Por qué puede variar el precio por m²?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{factor.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{factor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Proceso
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Cómo trabajamos
              </h2>
              <ol className="mt-6 space-y-4 text-slate-700">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-slate-200 p-5">
                    <span className="font-semibold text-slate-900">
                      {index + 1}. {step.title}
                    </span>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Garantía y criterio técnico
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Cuidamos los puntos donde suelen aparecer problemas
              </h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>✔ Encuentros contra paredes, pretiles o muros.</li>
                <li>✔ Babetas y goteros para conducir bien el agua.</li>
                <li>✔ Sellado de juntas y puntos críticos.</li>
                <li>✔ Fijaciones según estructura y exposición al viento.</li>
                <li>✔ Pendiente y salida de agua según cada caso.</li>
              </ul>
              <p className="mt-6 text-sm leading-6 text-slate-600">
                La garantía aplica sobre la instalación y el alcance acordado en el
                presupuesto final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Dudas comunes antes de pedir presupuesto
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer text-base font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Cotización
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                ¿Querés saber cuánto puede costar tu techo?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
                Usá la calculadora para enviar tus medidas por WhatsApp. Con caída,
                frente, zona y fotos podemos orientarte mucho mejor antes de coordinar.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calculadora-isopanel"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:px-7 md:py-3.5 md:text-base"
              >
                Calcular precio estimado
              </a>

              <a
                href="https://wa.me/59895408688?text=Hola%2C%20quiero%20presupuesto%20para%20techo%20de%20isopanel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600 md:px-7 md:py-3.5 md:text-base"
              >
                <FaWhatsapp size={20} />
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <Link href="/" className="underline underline-offset-4 hover:text-slate-700">
                Volver a MOD Soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}