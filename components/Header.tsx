import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        
        {/* Logo + texto */}
        <div className="flex items-center gap-3">
          <div className="w-[140px] md:w-[160px]">
            <Image
              src="/imagenes/logo1.png"
              alt="MOD Soluciones"
              width={320}
              height={110}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Navegación */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-white transition">
            Proyectos
          </a>
          <a href="#por-que" className="hover:text-white transition">
            Por qué nosotros
          </a>
          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/598XXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="
            rounded-full
            bg-green-500
            px-5 py-2.5
            text-sm font-semibold
            text-white
            shadow-lg shadow-black/30
            hover:bg-green-600
            transition
          "
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
