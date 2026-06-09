import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Link from "next/link";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaTools,
  FaClipboardList,
  FaRulerCombined,
  FaHome,
  FaWater,
  FaScrewdriver,
  FaHardHat,
  FaMapMarkerAlt,
  FaTruck,
  FaLayerGroup,
  FaArrowRight,
  FaCamera,
  FaComments,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaBuilding,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Techo de isopanel colocado desde USD 99/m² | MOD Soluciones",
  description:
    "Instalación de techos de isopanel en Montevideo y zona metropolitana. Colocación completa, estructura, fijaciones, remates, sellado, canaletas y terminación.",
};

const WHATSAPP_NUMBER = "59895408688";
const BASE_PRICE_USD = 99;

const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hola, quiero consultar por un techo de isopanel colocado.

Zona:
Medidas aproximadas:
Tipo de trabajo: techo nuevo / cambio de techo / ampliación / reparación
¿Ya tienen estructura? sí / no / no sé
¿Hay que retirar techo anterior? sí / no / no sé
¿Tienen fotos o video del lugar?`
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const HERO_DESKTOP_IMAGE = "/imagenes/unnamed.jpg";
const HERO_MOBILE_IMAGE = "/imagenes/mobile.png";

const idealForItems = [
  {
    title: "Cambiar un techo viejo",
    text: "Reemplazo de techos existentes por una solución más limpia, liviana y aislada.",
    icon: FaHome,
  },
  {
    title: "Cubrir patio, cochera o galería",
    text: "Techos prolijos para espacios exteriores o semicubiertos.",
    icon: FaBuilding,
  },
  {
    title: "Ampliar una vivienda",
    text: "Solución práctica para sumar metros cubiertos sin una obra pesada.",
    icon: FaLayerGroup,
  },
  {
    title: "Corregir un techo mal resuelto",
    text: "Revisión de remates, encuentros, tornillos, pendiente y filtraciones.",
    icon: FaTools,
  },
];

const includedItems = [
  {
    title: "Paneles de isopanel",
    text: "Panel de techo según el espesor, terminación y necesidad del proyecto.",
    icon: FaLayerGroup,
  },
  {
    title: "Colocación profesional",
    text: "Instalación prolija, nivelada y pensada para que el techo quede bien resuelto.",
    icon: FaHardHat,
  },
  {
    title: "Fijaciones adecuadas",
    text: "Tornillos y fijaciones específicas según estructura, apoyo y exposición.",
    icon: FaScrewdriver,
  },
  {
    title: "Sellados completos",
    text: "Sellado de juntas, encuentros, bordes y puntos críticos para reducir riesgos de filtración.",
    icon: FaWater,
  },
  {
    title: "Remates y terminaciones",
    text: "Cumbreras, laterales, babetas, goteros y terminaciones para un resultado limpio.",
    icon: FaTools,
  },
  {
    title: "Encuentros contra muro",
    text: "Resolución de uniones contra paredes, pretiles o muros existentes.",
    icon: FaHome,
  },
  {
    title: "Estructura si corresponde",
    text: "Evaluamos apoyos, altura, pendientes y estructura necesaria para cada caso.",
    icon: FaShieldAlt,
  },
  {
    title: "Terminación lista para usar",
    text: "El objetivo es entregar un techo completo, prolijo y funcional.",
    icon: FaCheckCircle,
  },
];

const quotedApartItems = [
  "Estructura nueva, refuerzos o corrección de apoyos.",
  "Canaletas, bajadas, desagües o modificación de salida de agua.",
  "Retiro de techo anterior, escombros o materiales existentes.",
  "Trabajos de albañilería, pretiles, muros o terminaciones externas.",
  "Cielorraso, eléctrica, iluminación u otros trabajos interiores.",
  "Traslados o logística fuera de Montevideo y zona metropolitana.",
];

const qualityPoints = [
  "Los remates mal hechos suelen terminar en filtraciones.",
  "Una pendiente mal resuelta puede dejar agua acumulada.",
  "Tornillos mal colocados pueden generar entradas de agua.",
  "Canaletas o desagües mal dimensionados complican la evacuación.",
  "Un buen sellado evita problemas y costos futuros.",
  "La instalación profesional vale más que comparar solo el precio del panel.",
];

const warningSigns = [
  "Gotea en juntas, bordes o encuentros contra muro.",
  "Se acumula agua en una zona del techo.",
  "Hay tornillos visibles, flojos o mal sellados.",
  "Faltan babetas, cumbreras, laterales o goteros.",
  "La canaleta desborda o no evacua bien.",
  "Aparecen filtraciones después de lluvias fuertes.",
];

const correctionPoints = [
  "Mala pendiente o acumulación de agua.",
  "Remates deficientes o mal instalados.",
  "Filtraciones en juntas, uniones o solapes.",
  "Encuentros contra muro mal sellados.",
  "Tornillos mal resueltos o a la vista.",
  "Canaletas, babetas o goteros insuficientes.",
];

const priceFactors = [
  {
    title: "Superficie",
    text: "Metros reales a cubrir y cantidad de paneles necesarios.",
    icon: FaRulerCombined,
  },
  {
    title: "Altura",
    text: "Trabajos en altura pueden requerir más tiempo, seguridad y logística.",
    icon: FaBuilding,
  },
  {
    title: "Acceso",
    text: "Subida de materiales, lugar de descarga y movilidad dentro de la obra.",
    icon: FaTruck,
  },
  {
    title: "Estructura",
    text: "Si ya existe o si hay que fabricar, reforzar o corregir apoyos.",
    icon: FaShieldAlt,
  },
  {
    title: "Remates",
    text: "Laterales, cumbreras, babetas, goteros y encuentros contra muro.",
    icon: FaTools,
  },
  {
    title: "Canaletas",
    text: "Salida de agua, bajadas, desagües y pendientes.",
    icon: FaWater,
  },
  {
    title: "Retiro anterior",
    text: "Desarme o retiro de techo existente si corresponde.",
    icon: FaTruck,
  },
  {
    title: "Ubicación",
    text: "Zona de trabajo, flete y logística general de la obra.",
    icon: FaMapMarkerAlt,
  },
];

const processSteps = [
  {
    title: "Nos enviás fotos, medidas y ubicación",
    text: "Caída aproximada, frente a cubrir, zona, altura, fotos del lugar y si hay que retirar techo anterior.",
    icon: FaCamera,
  },
  {
    title: "Te damos una primera orientación",
    text: "Te decimos qué datos faltan, qué solución puede corresponder y una referencia inicial.",
    icon: FaComments,
  },
  {
    title: "Si hace falta, coordinamos visita técnica",
    text: "Revisamos estructura, acceso, apoyos, remates, canaletas y medidas reales. Según la zona puede tener costo y se descuenta si se realiza el trabajo.",
    icon: FaCalendarCheck,
  },
  {
    title: "Te pasamos presupuesto claro",
    text: "Con alcance, materiales, mano de obra, condiciones, plazos y garantía según el caso.",
    icon: FaFileInvoiceDollar,
  },
];

const criticalPoints = [
  "Encuentros contra paredes, pretiles o muros.",
  "Babetas, goteros y remates laterales.",
  "Sellado de juntas y puntos críticos.",
  "Fijaciones según estructura y exposición.",
  "Pendiente y salida de agua.",
  "Canaletas o desagües si corresponde.",
];

const trustItems = [
  {
    title: "Fotos reales de obra",
    text: "Mostramos trabajos y procesos reales, no solo imágenes genéricas.",
    icon: FaCamera,
  },
  {
    title: "Presupuesto por escrito",
    text: "Definimos alcance, materiales, condiciones y puntos incluidos.",
    icon: FaClipboardList,
  },
  {
    title: "Comunicación directa",
    text: "Coordinación por WhatsApp para enviar fotos, medidas y avances.",
    icon: FaWhatsapp,
  },
  {
    title: "Garantía según alcance",
    text: "La garantía se informa según el trabajo realizado y las condiciones de obra.",
    icon: FaShieldAlt,
  },
];

const faqs = [
  {
    question: "¿Venden solo los paneles?",
    answer:
      "No. Trabajamos instalación completa. La idea es entregar el techo resuelto, no vender material suelto.",
  },
  {
    question: "¿El precio por m² incluye estructura?",
    answer:
      "Depende del caso. Si ya existe una estructura apta, el presupuesto puede ser más simple. Si hay que fabricar, reforzar o corregir apoyos, se cotiza aparte dentro del alcance final.",
  },
  {
    question: "¿Desde cuánto puede arrancar un techo de isopanel colocado?",
    answer:
      `Como referencia, en trabajos simples puede arrancar desde USD ${BASE_PRICE_USD}/m². El precio final depende de superficie, estructura, altura, acceso, remates, canaletas, ubicación y condiciones reales de la obra.`,
  },
  {
    question: "¿Qué puede cotizarse aparte?",
    answer:
      "Puede cotizarse aparte la estructura nueva, refuerzos, canaletas, retiro del techo anterior, trabajos de albañilería, cielorraso, eléctrica o traslados fuera de zona.",
  },
  {
    question: "¿Qué medidas necesito para consultar?",
    answer:
      "Lo ideal es pasar caída o largo del panel, frente o ancho a cubrir, zona, altura aproximada, si hay que retirar techo anterior y fotos del lugar. Con eso podemos orientarte mucho mejor.",
  },
  {
    question: "¿Pueden orientarme por WhatsApp?",
    answer:
      "Sí. La primera orientación por WhatsApp es ideal para entender el tipo de trabajo, ver fotos y saber si conviene coordinar visita.",
  },
  {
    question: "¿También corrigen techos ya instalados?",
    answer:
      "Sí. Revisamos y corregimos problemas frecuentes como remates deficientes, encuentros contra muro, filtraciones, mala pendiente, tornillos mal colocados o canaletas mal resueltas.",
  },
  {
    question: "¿La visita técnica tiene costo?",
    answer:
      "Primero orientamos por fotos y medidas. Si el trabajo requiere visita técnica, se coordina y se aclara el costo antes. En algunos casos puede descontarse si se avanza con la obra.",
  },
  {
    question: "¿Dan garantía?",
    answer:
      "Sí, la garantía se informa según el alcance del trabajo realizado y las condiciones reales de la obra. No prometemos lo mismo para todos los casos porque cada techo tiene puntos críticos distintos.",
  },
];

function WhatsappButton({
  children = "Pedir orientación por WhatsApp",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-600 ${className}`}
    >
      <FaWhatsapp size={18} />
      {children}
    </a>
  );
}

export default function TechoIsopanelColocadoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <WhatsappButton className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        Pedir orientación por WhatsApp
      </WhatsappButton>

      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={HERO_MOBILE_IMAGE}
          alt="Instalación de techo de isopanel por MOD Soluciones"
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        />

        <img
          src={HERO_DESKTOP_IMAGE}
          alt="Instalación de techo de isopanel por MOD Soluciones"
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/94 via-slate-950/76 to-slate-950/60 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/86 md:to-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <FaMapMarkerAlt className="text-blue-300" />
              Montevideo y zona metropolitana
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Techo de isopanel colocado con{" "}
              <span className="text-blue-400">instalación completa</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Instalamos techos de isopanel para viviendas, patios, ampliaciones
              y reemplazo de techos existentes. Nos encargamos de estructura,
              fijaciones, remates, sellado y terminación para evitar improvisaciones
              y dejar el techo listo para usar.
            </p>

            <div className="mt-6 inline-flex flex-col gap-1 rounded-2xl border border-blue-300/25 bg-blue-500/10 px-5 py-4 text-white backdrop-blur sm:flex-row sm:items-center sm:gap-2">
              <span className="text-sm font-bold text-blue-100">
                Referencia desde USD {BASE_PRICE_USD}/m²
              </span>
              <span className="hidden text-blue-200 sm:inline">•</span>
              <span className="text-sm text-slate-200">
                en trabajos simples, sujeto a estructura, remates, altura y condiciones reales.
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton />
              <a
                href="#que-incluye"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Ver qué incluye
                <FaArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
              <FaCheckCircle className="text-blue-300" size={24} />
              <h2 className="mt-3 text-lg font-bold">Instalación completa</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                No solo colocamos paneles: resolvemos el techo completo.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
              <FaWater className="text-blue-300" size={24} />
              <h2 className="mt-3 text-lg font-bold">Remates y sellado</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Cuidamos encuentros, juntas, bordes, cumbreras y canaletas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
              <FaClipboardList className="text-blue-300" size={24} />
              <h2 className="mt-3 text-lg font-bold">Presupuesto claro</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Te explicamos qué incluye, qué puede variar y cómo se ejecuta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Ideal para
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Cuando querés resolver el techo completo, no solo comprar paneles
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {idealForItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <Icon className="text-blue-700" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="que-incluye" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Servicio completo
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              ¿Qué incluye el servicio?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              No vendemos paneles sueltos. Hacemos el techo completo para que
              quede instalado, sellado, prolijo y listo para usar.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Alcance del presupuesto
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              ¿Qué puede cotizarse aparte según el caso?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Para evitar confusiones, dejamos claro qué puntos pueden cambiar el
              presupuesto final según la obra real.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quotedApartItems.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaExclamationTriangle className="mt-1 shrink-0 text-amber-500" />
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              src={HERO_DESKTOP_IMAGE}
              alt="Trabajo de colocación de techo de isopanel"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Diferencial técnico
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              ¿Por qué no competir solo por precio?
            </h2>

            <p className="mt-4 text-lg font-semibold leading-8 text-blue-700">
              La calidad de instalación marca la diferencia.
            </p>

            <ul className="mt-6 space-y-3">
              {qualityPoints.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
              <p className="text-sm leading-6 text-slate-700">
                Un techo de isopanel no falla solo por el panel. La mayoría de
                los problemas aparecen en detalles: remates, encuentros,
                tornillos, pendientes, canaletas y sellados.
              </p>

              <div className="mt-5">
                <WhatsappButton>Quiero que revisen mi caso</WhatsappButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Señales de alerta
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Señales de que tu techo necesita revisión
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Si ya tenés alguno de estos problemas, conviene revisar antes de que
              la filtración avance o dañe cielorraso, pintura, instalación eléctrica
              o terminaciones interiores.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {warningSigns.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaExclamationTriangle className="mt-1 shrink-0 text-amber-500" />
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Reparación y mejora
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              También corregimos techos mal resueltos
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Muchas filtraciones no aparecen por el panel, sino por detalles mal
              ejecutados. Revisamos el problema, corregimos los puntos críticos y
              dejamos el techo mejor resuelto.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {correctionPoints.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-blue-600" />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <FaExclamationTriangle className="text-blue-700" size={30} />
            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
              Un techo mal resuelto puede seguir filtrando aunque el panel sea bueno
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Por eso revisamos encuentros, sellados, apoyos, pendientes,
              tornillos, canaletas y remates. La diferencia está en los detalles.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
              Precio transparente
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              ¿De qué depende el precio final?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Usamos una referencia por metro cuadrado para orientar, pero el
              presupuesto final depende de las condiciones reales de cada obra.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div
                  key={factor.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="text-blue-300" size={24} />

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {factor.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {factor.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-300/25 bg-blue-500/10 p-6">
            <p className="text-lg font-black text-white">
              Referencia orientativa: desde USD {BASE_PRICE_USD}/m² en trabajos simples.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              El precio final puede variar por estructura, altura, acceso,
              remates, canaletas, retiro de techo anterior, ubicación y alcance
              real del trabajo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Proceso
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Cómo trabajamos
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Buscamos que el proceso sea claro desde la primera consulta hasta
              el presupuesto final.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">
                      {index + 1}
                    </div>
                    <Icon className="text-blue-700" size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Garantía y criterio técnico
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Cuidamos los puntos donde suelen aparecer problemas
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              El techo no se define solo por el panel. Los detalles de borde,
              encuentros, sellado, pendiente y evacuación de agua son los que
              hacen la diferencia en el tiempo.
            </p>

            <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex gap-3">
                <FaExclamationTriangle className="mt-1 shrink-0 text-amber-600" />
                <p className="text-sm leading-6 text-amber-900">
                  La garantía se informa según el alcance del trabajo realizado
                  y las condiciones reales de la obra. No todos los techos tienen
                  los mismos riesgos ni los mismos puntos críticos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {criticalPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <FaCheckCircle className="text-blue-600" />
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Confianza
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Por qué confiar en MOD Soluciones
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <Icon className="text-blue-700" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                  Precio orientativo
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  ¿Querés una referencia rápida de precio?
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
                  La referencia base para trabajos simples es desde USD{" "}
                  {BASE_PRICE_USD}/m². También podés usar la calculadora
                  orientativa o enviarnos medidas y fotos por WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/techo-isopanel-precio-m2"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Calcular precio estimado
                </Link>

                <WhatsappButton>Enviar medidas por WhatsApp</WhatsappButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
              Preguntas frecuentes
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Dudas comunes antes de pedir presupuesto
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <summary className="cursor-pointer text-base font-bold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6 md:py-16">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 to-blue-900 p-8 text-white shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-100">
                  Consulta inicial
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  ¿Querés presupuestar tu techo de isopanel?
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
                  Mandanos zona, medidas aproximadas y fotos del lugar por
                  WhatsApp. Te damos una primera orientación y, si corresponde,
                  coordinamos visita técnica.
                </p>
              </div>

              <WhatsappButton className="bg-green-500 hover:bg-green-600">
                Pedir presupuesto por WhatsApp
              </WhatsappButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}