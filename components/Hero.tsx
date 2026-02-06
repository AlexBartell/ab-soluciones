import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
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

        {/* Overlay suave para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 md:bg-gradient-to-r md:from-black/35 md:via-black/10 md:to-transparent" />

        {/* Contenido */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto h-full max-w-6xl px-5 sm:px-6">
            <div className="h-full pt-[9%] md:pt-0 md:flex md:items-center">
              <div className="text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.4)]">
                {/* Logo */}
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

                {/* Headline (más directo a intención de búsqueda) */}
                <h1 className="font-semibold leading-[1.05] tracking-[-0.02em] text-[clamp(36px,6.4vw,66px)] max-w-[18ch] md:max-w-[24ch]">
                  Techos de Isopanel
                  <br />
                  rápidos y prolijos
                </h1>

                {/* Subheadline (promesa + sin vueltas) */}
                <p className="mt-4 font-medium text-[clamp(18px,3.2vw,28px)] text-white/90 max-w-[34ch]">
                  Presupuesto claro y coordinación directa por WhatsApp.
                </p>

                {/* Beneficio corto (evitar texto largo) */}
                <p className="mt-3 text-[clamp(15px,2.4vw,21px)] text-white/80 max-w-[40ch]">
                  Instalación eficiente, buena terminación y materiales durables.
                </p>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href="https://wa.me/59895408688"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/25 hover:bg-green-600 transition"
                  >
                    <FaWhatsapp size={22} />
                    Pedir presupuesto por WhatsApp
                  </a>

                  {/* Microcopy (setea expectativa sin espantar) */}
                  <p className="mt-2 text-xs text-white/75">
                    Respuesta rápida. Si hace falta visita técnica, su costo se descuenta del total al contratar.
                  </p>
                </div>

                {/* Chips de confianza (opcional pero suma) */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="rounded-full bg-black/25 px-3 py-1">
                    Propuesta clara
                  </span>
                  <span className="rounded-full bg-black/25 px-3 py-1">
                    Terminación prolija
                  </span>
                  <span className="rounded-full bg-black/25 px-3 py-1">
                    Coordinación directa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
