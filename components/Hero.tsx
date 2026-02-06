import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Alto similar a lo que querés */}
      <div className="relative h-[78vh] min-h-[560px] md:h-[520px]">
        {/* Background desktop */}
        <Image
          src="/imagenes/unnamed.jpg"
          alt="Techos de isopanel"
          fill
          priority
          className="hidden md:block object-cover object-[center_35%]"
        />

        {/* Background mobile */}
        <Image
          src="/imagenes/mobile.png"
          alt="Techos de isopanel"
          fill
          priority
          className="block md:hidden object-cover object-[center_35%]"
        />

        {/* Overlay suave (NO oscurecer de más): leve gradiente para legibilidad */}
        <div />

        {/* Contenido */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto h-full max-w-6xl px-5 sm:px-6">
            {/* En mobile, alineado arriba/izq como tu imagen; en desktop centrado vertical */}
            <div className="h-full pt-[9%] md:pt-0 md:flex md:items-center">
              <div className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                {/* Logo grande, en % */}
                <div className="mb-5 md:mb-6 w-[72%] max-w-[420px] md:w-[340px]">
                  <Image
                    src="/imagenes/logo1.png"
                    alt="MOD Soluciones"
                    width={520}
                    height={180}
                    className="h-auto w-full"
                    priority
                  />
                </div>

                {/* Título: grande y con cortes parecidos a la imagen */}
                <h1 className="font-semibold leading-[1.05] tracking-[-0.02em] text-[clamp(34px,6.2vw,64px)] max-w-[16ch] md:max-w-[22ch]">
                  Soluciones Integrales en
                  <br />
                  Construcción y
                  <br />
                  Remodelación
                </h1>

                {/* Subtítulo */}
                <p className="mt-5 font-medium text-[clamp(18px,3.2vw,28px)] text-white/90">
                  Especialistas en Techos de Isopanel
                </p>

                {/* Línea final */}
                <p className="mt-3 text-[clamp(16px,2.4vw,22px)] text-white/80 max-w-[34ch]">
                  Transformamos tu espacio con rapidez y durabilidad.
                </p>

                {/* CTA: en mobile queda abajo con buen aire; en desktop igual */}
                <a
                  href="https://wa.me/598XXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 hover:bg-green-600 transition"
                >
                  <FaWhatsapp size={20} />
                  Pedir presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

