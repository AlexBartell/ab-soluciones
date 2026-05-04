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
  `Hola, quiero consultar por una filtración / impermeabilización.

Zona:
Tipo de techo: planchada / azotea / chapa / no sé
Problema: gotera / humedad / filtración / membrana vieja
¿Dónde aparece el agua?
¿Hace cuánto pasa?
¿Hay fotos o video del techo y de la humedad?`
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const problemas = [
  "Goteras cuando llueve",
  "Humedad en cielorraso",
  "Filtraciones en azoteas",
  "Fisuras en planchadas",
  "Membrana vieja o levantada",
  "Pretiles con entrada de agua",
  "Canaletas o desagües problemáticos",
  "Encuentros contra muros",
];

const pasos = [
  {
    title: "Nos enviás fotos o video",
    desc: "Pedimos fotos del techo, la zona donde aparece la humedad y los puntos críticos: pretiles, desagües, fisuras o encuentros contra muros.",
    icon: FaCamera,
  },
  {
    title: "Evaluamos el problema probable",
    desc: "No siempre la entrada de agua está justo arriba de la mancha. Primero intentamos entender por dónde puede estar filtrando.",
    icon: FaSearch,
  },
  {
    title: "Definimos una solución",
    desc: "Según el caso puede ser sellado, reparación de fisuras, membrana líquida, membrana asfáltica, refuerzo con malla u otra solución.",
    icon: FaTools,
  },
  {
    title: "Te pasamos una orientación clara",
    desc: "Te explicamos qué se haría, qué puntos se trabajan y qué puede hacer variar el presupuesto. Si hace falta revisar en persona, coordinamos visita.",
    icon: FaClipboardList,
  },
];

const fallas = [
  "Fisuras sin tratar",
  "Humedad atrapada debajo",
  "Superficie sucia o con material flojo",
  "Membrana vieja mal adherida",
  "Pretiles sin sellar",
  "Desagües mal resueltos",
  "Encuentros contra muros abiertos",
  "Falta de pendiente",
  "Aplicar poco producto o sin refuerzo",
];

const soluciones = [
  {
    title: "Sellado de fisuras",
    desc: "Tratamiento de grietas, juntas y puntos donde puede entrar agua.",
  },
  {
    title: "Membrana líquida",
    desc: "Aplicación según el estado de la superficie, ideal cuando el soporte lo permite.",
  },
  {
    title: "Membrana asfáltica",
    desc: "Opción para ciertos casos donde conviene una solución en rollo y mayor espesor.",
  },
  {
    title: "Refuerzo con malla",
    desc: "Útil en zonas críticas, fisuras, encuentros o superficies que necesitan mayor resistencia.",
  },
  {
    title: "Pretiles y encuentros",
    desc: "Revisión de muros, babetas, bordes y zonas donde suelen aparecer filtraciones.",
  },
  {
    title: "Desagües y canaletas",
    desc: "Revisión de salidas de agua, pendientes y puntos donde el agua puede acumularse.",
  },
];

const fotosNecesarias = [
  "Foto general del techo o azotea",
  "Foto de la mancha, humedad o gotera",
  "Foto de pretiles y encuentros contra muros",
  "Foto de desagües, canaletas o salidas de agua",
  "Video corto si se ve entrar agua cuando llueve",
];

const preguntas = [
  {
    q: "¿Pueden orientarme solo con fotos?",
    a: "Sí, con fotos podemos darte una primera orientación y pedirte los datos importantes. Si el caso no se ve claro o hay que confirmar el origen, coordinamos visita.",
  },
  {
    q: "¿Siempre se arregla con membrana líquida?",
    a: "No. A veces sirve, pero otras veces primero hay que reparar fisuras, pretiles, desagües, membrana vieja o encuentros contra muros.",
  },
  {
    q: "¿Trabajan solo aplicación de producto?",
    a: "No vendemos membrana suelta. Trabajamos la solución completa según el estado del techo y el problema que haya que resolver.",
  },
  {
    q: "¿La mancha indica exactamente dónde filtra?",
    a: "No siempre. El agua puede entrar por un punto, correr por debajo o por una pendiente interna y aparecer en otro lugar.",
  },
];

export const metadata = {
  title: "Reparación de filtraciones e impermeabilización de techos en Montevideo",
  description:
    "Soluciones para goteras, humedad, azoteas, planchadas, pretiles, desagües y techos con filtraciones. Enviá fotos por WhatsApp para una orientación inicial.",
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
              Montevideo y zona metropolitana
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Reparación de filtraciones e impermeabilización de techos
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Soluciones para goteras, humedad, azoteas, planchadas, pretiles,
              desagües, canaletas y encuentros contra muros. Enviá fotos por
              WhatsApp y te orientamos según el caso.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-sm leading-6 text-amber-100">
                Si ya apareció humedad o gotera, conviene revisar antes de que avance
                hacia cielorraso, pintura, instalación eléctrica o muebles.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton />
              <a
                href="#como-trabajamos"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Ver cómo trabajamos
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">Orientación por fotos</p>
                <p className="mt-1 text-sm text-slate-400">
                  Primera lectura del problema por WhatsApp.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">Preparación previa</p>
                <p className="mt-1 text-sm text-slate-400">
                  No es solo pasar producto arriba.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-white">Solución según caso</p>
                <p className="mt-1 text-sm text-slate-400">
                  Techo, pretil, fisura o desagüe.
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
                Mandanos fotos del techo y de la mancha. Con eso podemos
                identificar si conviene revisar fisuras, pretiles, desagües,
                membrana vieja, canaletas o encuentros contra paredes.
              </p>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <FaExclamationTriangle className="mt-1 shrink-0 text-amber-600" />
                  <p className="text-sm leading-6 text-amber-900">
                    No siempre la filtración está justo arriba de la mancha.
                    El agua puede entrar por un punto y aparecer en otro.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-900">Para responderte mejor, mandá:</p>
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
                Con fotos podemos darte una primera orientación. Si hace falta revisar
                en persona, coordinamos visita para confirmar la solución.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
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
      </section>

      <section
        id="como-trabajamos"
        className="border-y border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
              Método de trabajo
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Primero entendemos la filtración, después definimos el sistema
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              En impermeabilización, el producto importa, pero la preparación y
              el diagnóstico importan más. No todas las filtraciones se arreglan
              de la misma manera.
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
                      <p className="mt-2 leading-7 text-slate-600">{paso.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
                Una azotea, una planchada, una chapa, un pretil o una canaleta
                no se resuelven igual. Por eso pedimos fotos antes de orientar.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-black text-slate-900">
                No vendemos membrana suelta
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Trabajamos la solución completa según el estado del techo. Puede incluir
                limpieza, reparación, sellado, imprimación, malla, membrana líquida,
                membrana asfáltica u otro sistema según el caso.
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
              vemos la superficie y después definimos qué conviene hacer.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {soluciones.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
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
            </p>
          </div>

          <div className="grid gap-4">
            {preguntas.map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                Para orientarte mejor, enviá foto general del techo, foto de la
                mancha o humedad, fotos de pretiles/desagües y un video corto si
                entra agua cuando llueve.
              </p>
            </div>

            <WhatsappButton className="bg-white text-emerald-700 hover:bg-emerald-50" />
          </div>
        </div>
      </section>
    </main>
  );
}
