import Image from "next/image";

const galleryProjects = [
  {
    src: "imagen1.jpg",
    title: "Trabajo realizado",
    caption: "Techo de isopanel instalado con terminaciones y sellado de obra.",
    alt: "Trabajo realizado de techo de isopanel",
  },
  {
    src: "01_techo_isopanel_terminado_cielo_azul.jpg",
    title: "Cubierta de isopanel",
    caption: "Paneles instalados sobre vivienda, con caída y terminaciones perimetrales.",
    alt: "Techo de isopanel terminado sobre vivienda",
  },
  {
    src: "02_techo_blanco_terminado_paneles_continuos.jpg",
    title: "Paneles continuos",
    caption: "Superficie terminada con paneles alineados y pendiente para conducir el agua.",
    alt: "Techo blanco de isopanel con paneles continuos",
  },
  {
    src: "04_detalle_remate_perimetral.jpg",
    title: "Remate perimetral",
    caption: "Detalle de borde y terminación lateral para cerrar correctamente el techo.",
    alt: "Detalle de remate perimetral en techo de isopanel",
  },
  {
    src: "06_ampliacion_cerramiento_ventanales.jpg",
    title: "Ampliación / cerramiento",
    caption: "Trabajo complementario de cerramiento exterior con terminación limpia.",
    alt: "Ampliación con cerramiento exterior blanco y ventanales",
  },
  {
    src: "muro_lateral_despues_revoque_recortada.png",
    title: "Terminación lateral",
    caption: "Encuentro lateral con muro revocado y presentación más limpia.",
    alt: "Terminación lateral con muro revocado en obra de isopanel",
  },
];

const processProjects = [
  {
    src: "03_colocacion_paneles_proceso.jpg",
    title: "Colocación de paneles",
    caption: "Proceso de instalación sobre estructura existente, cuidando apoyo y alineación.",
    alt: "Trabajadores colocando paneles de isopanel sobre techo",
  },
  {
    src: "05_obra_proceso_remate_frontal.jpg",
    title: "Ajuste de remates",
    caption: "Trabajo en obra sobre el frente del techo para resolver terminaciones visibles.",
    alt: "Operario trabajando en remate frontal de techo de isopanel",
  },
];

const beforeAfter = [
  {
    label: "Antes",
    src: "07_antes_techo_existente_parches_sellados.jpg",
    title: "Techo existente",
    caption: "Cubierta anterior con parches, sellados viejos y zonas con riesgo de filtración.",
    alt: "Techo existente con parches y sellados deteriorados antes de obra",
  },
  {
    label: "Durante",
    src: "08_durante_colocacion_sobre_techo_existente.jpg",
    title: "Preparación e instalación",
    caption: "Preparación del sector y colocación de nuevos paneles para resolver la cubierta.",
    alt: "Proceso de colocación de isopanel sobre techo existente",
  },
  {
    label: "Después",
    src: "01_techo_isopanel_terminado_cielo_azul.jpg",
    title: "Techo nuevo terminado",
    caption: "Resultado final con techo de isopanel instalado y terminaciones perimetrales.",
    alt: "Techo de isopanel terminado después de la obra",
  },
];

type ProjectCardProps = {
  src: string;
  title: string;
  caption: string;
  alt: string;
  aspect?: string;
};

function ProjectCard({ src, title, caption, alt, aspect = "h-64" }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={`relative ${aspect} bg-slate-100`}>
        <Image
          src={`/imagenes/${src}`}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{caption}</p>
      </div>
    </article>
  );
}

type BeforeAfterCardProps = {
  label: string;
  src: string;
  title: string;
  caption: string;
  alt: string;
  imageSizes?: string;
};

function BeforeAfterCard({
  label,
  src,
  title,
  caption,
  alt,
  imageSizes = "(max-width: 768px) 100vw, 33vw",
}: BeforeAfterCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-60 bg-slate-100">
        <Image
          src={`/imagenes/${src}`}
          alt={alt}
          fill
          className="object-cover"
          sizes={imageSizes}
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">
          {label}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        <p className="mt-2 text-sm leading-6 text-slate-600">{caption}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Trabajos realizados
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Obras reales de techos de isopanel
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Algunas fotos son de obra y proceso, no de estudio. Las usamos para mostrar
            trabajos reales, paneles colocados, remates, sellados y encuentros contra muros.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryProjects.map((project) => (
            <ProjectCard key={project.src} {...project} aspect="h-64" />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Proceso y detalles
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              No es solo colocar paneles: hay que resolver la obra
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700">
              En cada techo revisamos estructura, apoyo, caída de agua, remates, sellados
              y encuentros contra paredes. Esa parte técnica es la que evita problemas
              de filtración y terminaciones débiles.
            </p>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {processProjects.map((project) => (
              <ProjectCard key={project.src} {...project} aspect="h-56" />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Caso real
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              Antes, durante y después de una cubierta existente
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Cuando el techo existente tiene parches, sellados viejos o encuentros mal
              resueltos, lo importante es dejar una solución más limpia, continua y fácil
              de mantener.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {beforeAfter.map((item) => (
              <BeforeAfterCard key={`${item.label}-${item.src}`} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              ¿Querés una orientación para tu techo?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Enviá medidas y fotos por WhatsApp. Con caída, frente, zona y estado actual
              del lugar podemos darte una referencia más real.
            </p>
          </div>
          <a
            href="#calculadora-isopanel"
            className="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 md:mt-0"
          >
            Calcular mi techo
          </a>
        </div>
      </div>
    </section>
  );
}