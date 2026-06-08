import type { ReactNode } from "react";
import {
  FaWhatsapp,
  FaWater,
  FaHome,
  FaTools,
  FaSearch,
  FaCamera,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaClipboardList,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "59895408688";

const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hola, quiero consultar por una filtración / reparación de techo.

Zona:
Tipo de techo: isopanel / planchada / azotea / chapa / no sé
Problema: gotera / humedad / filtración / membrana vieja / otro
¿Dónde aparece el agua o la humedad?
¿Hace cuánto pasa?
¿Tenés fotos o video del techo y de la humedad?`
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const tiposDeTecho = [
  {
    title: "Techos de isopanel",
    desc: "Revisamos filtraciones en juntas, tornillos, babetas, remates, encuentros contra muro y cortes mal sellados.",
    puntos: [
      "Juntas entre paneles",
      "Tornillos o arandelas",
      "Encuentros contra pared",
      "Babetas y terminaciones",
    ],
  },
  {
    title: "Planchadas y azoteas",
    desc: "Tratamos fisuras, membrana vieja, pretiles, desagües, agua empozada y zonas donde la impermeabilización puede fallar.",
    puntos: [
      "Fisuras y microfisuras",
      "Pretiles",
      "Desagües",
      "Membrana deteriorada",
    ],
  },
  {
    title: "Techos de chapa",
    desc: "Trabajamos reparaciones puntuales de filtraciones en chapa, canaletas, cumbreras, solapes y encuentros críticos.",
    puntos: [
      "Tornillería",
      "Cumbreras",
      "Canaletas",
      "Solapes y encuentros",
    ],
  },
];

const problemas = [
  "Goteras cuando llueve",
  "Manchas de humedad en cielorraso",
  "Filtraciones en azoteas",
  "Fisuras en planchadas",
  "Membrana vieja, floja o levantada",
  "Pretiles con entrada de agua",
  "Canaletas o desagües problemáticos",
  "Encuentros contra muros",
];

const pasos = [
  {
    title: "Nos enviás fotos o video",
    desc: "Pedimos fotos del techo, de la zona donde aparece la humedad y de los puntos críticos: pretiles, desagües, canaletas, fisuras, babetas o encuentros contra muros.",
    icon: FaCamera,
  },
  {
    title: "Evaluamos el origen probable",
    desc: "No siempre la entrada de agua está justo arriba de la mancha. Primero intentamos entender por dónde puede estar filtrando y qué partes conviene revisar.",
    icon: FaSearch,
  },
  {
    title: "Definimos la solución adecuada",
    desc: "Según el caso puede ser sellado, reparación de fisuras, tratamiento de pretiles, membrana líquida, membrana asfáltica, refuerzo con malla o corrección de desagües.",
    icon: FaTools,
  },
  {
    title: "Te pasamos una orientación clara",
    desc: "Te explicamos qué se haría, qué puntos se trabajan, qué puede hacer variar el presupuesto y si conviene coordinar una visita técnica.",
    icon: FaClipboardList,
  },
];

const fallas = [
  "Aplicar membrana sin limpiar bien",
  "Fisuras sin tratar",
  "Humedad atrapada debajo",
  "Superficie floja o mal adherida",
  "Pretiles sin sellar",
  "Desagües mal resueltos",
  "Encuentros contra muros abiertos",
  "Canaletas tapadas o mal diseñadas",
  "Falta de pendiente",
  "Aplicar poco producto o sin refuerzo",
];

const soluciones = [
  {
    title: "Sellado de fisuras y juntas",
    desc: "Tratamiento de grietas, juntas, cortes, encuentros y puntos donde puede estar entrando agua.",
  },
  {
    title: "Impermeabilización de planchadas",
    desc: "Lavado, preparación de superficie, reparación de puntos críticos y aplicación del sistema correspondiente.",
  },
  {
    title: "Membrana líquida",
    desc: "Aplicación sobre superficies aptas, con preparación previa y refuerzos donde el caso lo requiera.",
  },
  {
    title: "Membrana asfáltica",
    desc: "Solución en rollo para determinados casos donde conviene mayor espesor y protección.",
  },
  {
    title: "Pretiles, babetas y encuentros",
    desc: "Revisión de bordes, muros, babetas, remates y zonas donde suelen originarse filtraciones.",
  },
  {
    title: "Desagües y canaletas",
    desc: "Revisión de salidas de agua, pendientes, canaletas y puntos donde el agua puede acumularse.",
  },
];

const fotosNecesarias = [
  "Foto general del techo, azotea o zona afectada",
  "Foto de la mancha, humedad o gotera desde adentro",
  "Foto de pretiles, babetas o encuentros contra muros",
  "Foto de desagües, canaletas o salidas de agua",
  "Video corto si se ve entrar agua cuando llueve",
];

const preguntas = [
  {
    q: "¿Pueden orientarme solo con fotos?",
    a: "Sí. Con fotos y videos podemos darte una primera orientación y pedirte los datos importantes. Si el origen no se ve claro o hay que confirmar el estado del techo, coordinamos visita técnica.",
  },
  {
    q: "¿Siempre se arregla con membrana líquida?",
    a: "No. A veces la membrana líquida sirve, pero otras veces primero hay que reparar fisuras, pretiles, desagües, babetas, canaletas o retirar material flojo.",
  },
  {
    q: "¿Hacen solo aplicación de producto?",
    a: "No trabajamos como venta de producto suelto. Buscamos resolver el problema completo según el estado del techo y el origen probable de la filtración.",
  },
  {
    q: "¿La mancha indica exactamente dónde filtra?",
    a: "No siempre. El agua puede entrar por un punto, correr por debajo de la membrana, por una pendiente interna o por una estructura, y aparecer en otro lugar.",
  },
  {
    q: "¿La visita técnica es gratis?",
    a: "La orientación inicial por WhatsApp es sin costo. Si el caso requiere revisión en obra, la visita puede tener costo según la zona y se descuenta si se realiza el trabajo.",
  },
  {
    q: "¿Dan garantía?",
    a: "Cuando se realiza una reparación completa sobre los puntos acordados, se informa el alcance del trabajo y la garantía correspondiente según el sistema aplicado.",
  },
];

export const metadata = {
  title:
    "Reparación de filtraciones en techos, azoteas y planchadas | MOD Soluciones",
  description:
    "Reparación de goteras, humedad y filtraciones en techos de isopanel, chapa, azoteas y planchadas. Enviá fotos por WhatsApp y recibí una primera orientación.",
};

function WhatsappButton({
  children = "Enviar fotos por WhatsApp",
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
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 ${className}`}
    >
      <FaWhatsapp size={18} />
      {children}
    </a>
  );
}

export default function FiltracionesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              Montevideo, Ciudad de la Costa y zona metropolitana
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Reparación de filtraciones en techos, azoteas y planchadas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Solucionamos goteras, manchas de humedad y entradas de agua en
              techos de isopanel, chapa, planchadas, pretiles, canaletas,
              desagües y encuentros contra muros.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-sm leading-6 text-amber-100">
                Enviá fotos por WhatsApp y te damos una primera orientación. Si
                el caso requiere revisión en obra, coordinamos visita técnica y
                te proponemos una solución clara.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton />
              <a
                href="#tipos-de-techo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Ver tipos de techo
                <FaArrowRight size={14} />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">
                  Orientación por fotos
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Primera lectura del problema por WhatsApp.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">
                  Diagnóstico técnico
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Buscamos el origen, no solo la mancha.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">
                  Solución según caso
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Isopanel, chapa, azotea o planchada.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl">
            <div className="rounded-3xl bg-slate-50 p-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <FaWater size={26} />
              </div>

              <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-900">
                ¿Tenés agua entrando o manchas de humedad?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Mandanos fotos del techo y de la humedad. Con eso podemos
                identificar si conviene revisar fisuras, pretiles, desagües,
                canaletas, membrana vieja, juntas, babetas o encuentros contra
                paredes.
              </p>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <FaExclamationTriangle className="mt-1 shrink-0 text-amber-600" />
                  <p className="text-sm leading-6 text-amber-900">
                    No siempre la filtración está justo arriba de la mancha. El
                    agua puede entrar por un punto, recorrer otra zona y aparecer
                    lejos del origen.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-900">
                  Para responderte mejor, mandá:
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  {fotosNecesarias.map((item) => (
                    <li key={item} className="flex gap-2">
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <WhatsappButton className="mt-6 w-full" />

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                La orientación inicial por WhatsApp es sin costo. Si hace falta
                revisar en persona, coordinamos visita técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tipos-de-techo" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
            Tipos de techo
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Reparamos filtraciones según el sistema de techo
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Una filtración en isopanel, una planchada y un techo de chapa no se
            resuelven igual. Por eso primero identificamos el tipo de techo y el
            punto probable de entrada de agua.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiposDeTecho.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <FaHome size={20} />
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>

              <ul className="mt-5 space-y-2">
                {item.puntos.map((punto) => (
                  <li
                    key={punto}
                    className="flex gap-2 text-sm leading-6 text-slate-700"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-emerald-600" />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
              Problemas frecuentes
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              ¿En qué casos podemos ayudarte?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Trabajamos sobre problemas comunes de filtración en techos,
              azoteas, planchadas y puntos donde el agua suele encontrar entrada.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <FaCheckCircle />
                </div>

                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-trabajamos"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
            Método de trabajo
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Primero entendemos la filtración, después definimos el sistema
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            En impermeabilización, el producto importa, pero la preparación y el
            diagnóstico importan más. No todas las filtraciones se arreglan de
            la misma manera.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;

            return (
              <div
                key={paso.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-emerald-700">
                      Paso {index + 1}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      {paso.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {paso.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-300">
              Filtro comercial
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              No hacemos parches a ciegas ni vendemos productos sueltos
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Nuestro objetivo es encontrar el origen probable de la filtración y
              proponer una solución razonable según el estado del techo. A veces
              alcanza con una reparación puntual; otras veces hay que tratar
              pretiles, fisuras, desagües o una superficie completa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <FaCheckCircle className="text-emerald-300" size={24} />
              <h3 className="mt-4 text-lg font-bold">
                Orientación inicial sin costo
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Con fotos, videos, zona y tipo de techo podemos darte una primera
                lectura del caso por WhatsApp.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <FaClipboardList className="text-emerald-300" size={24} />
              <h3 className="mt-4 text-lg font-bold">
                Visita técnica si corresponde
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Cuando hace falta revisar en obra, la visita puede tener costo
                según la zona y se descuenta si se realiza el trabajo.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <FaTools className="text-emerald-300" size={24} />
              <h3 className="mt-4 text-lg font-bold">
                Solución completa
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Trabajamos reparación, sellado, preparación, refuerzos e
                impermeabilización según lo que el caso necesite.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <FaExclamationTriangle className="text-amber-300" size={24} />
              <h3 className="mt-4 text-lg font-bold">
                Evaluamos trabajos puntuales
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Para reparaciones muy chicas o zonas lejanas, primero revisamos
                por fotos para confirmar si conviene coordinar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
              Importante
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              No siempre alcanza con pasar membrana arriba
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Muchas impermeabilizaciones duran poco porque se aplica producto
              sin preparar bien la base o sin resolver el punto real de entrada
              de agua.
            </p>

            <div className="mt-7 rounded-3xl bg-slate-950 p-6 text-white">
              <FaHome className="text-emerald-300" size={28} />

              <h3 className="mt-4 text-xl font-bold">
                Cada techo se revisa como un caso distinto
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Una azotea, una planchada, un techo de isopanel, una chapa, un
                pretil o una canaleta no se resuelven igual. Por eso pedimos
                fotos antes de orientar.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-black text-slate-900">
                Trabajamos el problema, no solo el síntoma
              </h3>

              <p className="mt-2 leading-7 text-slate-700">
                La solución puede incluir limpieza, reparación, sellado,
                imprimación, malla, membrana líquida, membrana asfáltica,
                corrección de encuentros o revisión de desagües según el caso.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">
              ¿Por qué puede fallar una impermeabilización?
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {fallas.map((falla) => (
                <div
                  key={falla}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4"
                >
                  <FaExclamationTriangle className="mt-1 shrink-0 text-amber-500" />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {falla}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
              Soluciones posibles
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              La solución depende del techo y del origen del problema
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              No recomendamos un producto único para todos los casos. Primero
              vemos la superficie, los puntos críticos y el recorrido probable
              del agua.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {soluciones.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
              Preguntas comunes
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Antes de presupuestar, conviene entender el origen
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              La idea es evitar soluciones rápidas que después vuelvan a filtrar.
              Por eso pedimos fotos, zona, tipo de techo y datos básicos antes
              de coordinar.
            </p>
          </div>

          <div className="grid gap-4">
            {preguntas.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-emerald-600 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-100">
                Consulta inicial
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Mandanos fotos y te orientamos por WhatsApp
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-50">
                Enviá foto general del techo, foto de la mancha o humedad, fotos
                de pretiles/desagües/canaletas y un video corto si entra agua
                cuando llueve.
              </p>
            </div>

            <WhatsappButton className="bg-white text-emerald-700 hover:bg-emerald-50" />
          </div>
        </div>
      </section>
    </main>
  );
}