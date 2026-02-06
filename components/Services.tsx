import Image from "next/image";

const services = [
  {
    title: "Techos de Isopanel",
    desc: "Instalación rápida, aislación térmica y terminación prolija.",
    img: "/imagenes/imagen2.jpg",
  },
  {
    title: "Pisos Flotantes",
    desc: "Colocación precisa, nivelación y excelente terminación.",
    img: "/imagenes/instalacionpisoflotante.jpg",
  },
  {
    title: "Drywall",
    desc: "Tabiques, cielorrasos y soluciones interiores modernas.",
    img: "/imagenes/drywall.webp",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Nuestros servicios
        </h2>
        <p className="mt-3 max-w-prose text-base text-slate-600">
          Soluciones enfocadas en durabilidad, estética y ejecución eficiente.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="
              overflow-hidden
              rounded-3xl
              border border-slate-200
              bg-white
              shadow-sm
              transition
              hover:shadow-lg
            "
          >
            {/* Imagen */}
            <div className="relative h-44 w-full">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
