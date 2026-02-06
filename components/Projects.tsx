import Image from "next/image";

const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Trabajos realizados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img} className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={`/imagenes/${img}`}
              alt="Trabajo realizado"
              fill
              className="object-cover"
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
