import { FaBolt, FaRulerCombined, FaComments } from "react-icons/fa";

const items = [
  {
    title: "Rápido y en fecha",
    desc: "Coordinamos y ejecutamos con orden para que el trabajo termine cuando te prometimos.",
    icon: FaBolt,
  },
  {
    title: "Terminación prolija",
    desc: "Remates, niveles y detalles bien resueltos. Cuidamos la estética del resultado final.",
    icon: FaRulerCombined,
  },
  {
    title: "Trato directo",
    desc: "Hablás con nosotros: presupuesto claro, avances y seguimiento sin vueltas.",
    icon: FaComments,
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-2 max-w-prose text-slate-600 md:text-lg">
            Si buscás una obra prolija, sin demoras y con comunicación clara, estás en el lugar correcto.
          </p>
        </div>

        <a
          href="https://wa.me/598XXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-fit items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition md:mt-0"
        >
          Consultar por WhatsApp
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((x) => {
          const Icon = x.icon;
          return (
            <div
              key={x.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Icon size={20} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>

              <div className="mt-4 h-px w-full bg-slate-100" />

              <p className="mt-3 text-xs text-slate-500">
                Presupuesto claro + coordinación rápida.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
