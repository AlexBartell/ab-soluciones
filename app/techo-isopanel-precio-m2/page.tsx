import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IsopanelBudgett from "@/components/IsopanelBudgett";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Techo de Isopanel: precio por m² instalado en Montevideo | MOD Soluciones",
  description:
    "Calculá el precio estimado de tu techo de isopanel en Montevideo. Instalación profesional, remates bien resueltos, garantía y coordinación directa por WhatsApp.",
};

export default function PrecioTechoIsopanelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              MOD Soluciones
            </p>

            <h1 className="mt-3 max-w-[15ch] text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Techo de isopanel: precio por m² instalado en Montevideo
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Instalación profesional de techos de isopanel con remates bien
              resueltos, fijaciones adecuadas y garantía de instalación.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              Valores orientativos entre <strong>USD 105 y USD 130 por m²</strong>,
              según terminaciones, remates y condiciones de la obra.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#presupuesto"
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
                Pedir presupuesto por WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500 md:text-sm">
              Si se requiere visita técnica, su costo se descuenta del total al contratar.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 md:text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Instalación profesional
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Remates bien resueltos
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Garantía de instalación
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Montevideo y zona metropolitana
              </span>
            </div>
          </div>
        </div>
      </section>

      <IsopanelBudgett />

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              ¿Cuánto cuesta un techo de isopanel?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
              El precio de un techo de isopanel no depende solo de los metros cuadrados.
              También influyen el nivel de terminación, los remates, la altura de trabajo,
              la estructura existente, la necesidad de canaletas o desagües y los detalles
              de sellado e impermeabilización.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
              Por eso damos valores orientativos por m² para que tengas una referencia clara,
              y luego confirmamos el presupuesto final con visita técnica.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Techo de 20 m²
              </h3>
              <p className="mt-3 text-slate-700">
                Valor orientativo entre <strong>USD 2.100 y USD 2.600</strong>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Techo de 40 m²
              </h3>
              <p className="mt-3 text-slate-700">
                Valor orientativo entre <strong>USD 4.200 y USD 5.200</strong>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Ejemplo
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Techo de 60 m²
              </h3>
              <p className="mt-3 text-slate-700">
                Valor orientativo entre <strong>USD 6.300 y USD 7.800</strong>
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            * Valores orientativos. El presupuesto final puede variar según estructura,
            remates, canaletas, altura y condiciones de la obra.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              ¿Por qué puede variar el precio por m²?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Estructura existente
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                No es lo mismo instalar sobre una base lista para recibir panel
                que corregir desniveles o resolver apoyos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Remates y sellados
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Babetas, goteros, sellados y encuentros bien resueltos hacen la
                diferencia entre un techo durable y futuros problemas de filtración.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Canaletas y desagües
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Cuando la obra requiere canaleta o desagüe, entran materiales y
                trabajo adicional que impactan en el precio final.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Altura y acceso
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                La complejidad para trabajar, subir materiales o montar seguridad
                también modifica el costo real de la instalación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Un techo mal resuelto puede salir caro
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              En este tipo de trabajos no importa solo colocar el panel. Importa
              cómo se resuelven los encuentros, las fijaciones, los sellados y los
              remates. Ahí es donde muchas veces aparecen filtraciones, ruidos o
              problemas que terminan costando más adelante.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
              La idea es hacerlo bien desde el principio, con una solución prolija,
              durable y pensada para muchos años.
            </p>
          </div>
        </div>
      </section>

      <Projects />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Cómo trabajamos
              </h2>
              <ol className="mt-6 space-y-4 text-slate-700">
                <li className="rounded-2xl border border-slate-200 p-5">
                  <span className="font-semibold text-slate-900">1.</span> Calculás
                  una estimación online o nos escribís por WhatsApp.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  <span className="font-semibold text-slate-900">2.</span> Coordinamos
                  visita técnica para confirmar medidas, apoyos y detalles.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  <span className="font-semibold text-slate-900">3.</span> Te pasamos
                  presupuesto final claro, con alcance definido.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  <span className="font-semibold text-slate-900">4.</span> Ejecutamos
                  la instalación con coordinación directa.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Qué incluye nuestro trabajo
              </h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="rounded-2xl border border-slate-200 p-5">
                  Instalación de techo de isopanel con criterio técnico.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  Fijaciones adecuadas según el tipo de estructura.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  Remates y sellados según las necesidades de la obra.
                </li>
                <li className="rounded-2xl border border-slate-200 p-5">
                  Coordinación directa y garantía de instalación.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                ¿Querés saber cuánto puede costar tu techo?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
                Calculá una estimación online o escribinos por WhatsApp para coordinar
                una visita técnica y confirmar el presupuesto final.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#presupuesto"
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