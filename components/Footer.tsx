export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold">MOD Soluciones</p>
            <p className="mt-2 text-sm text-slate-600">
              Construcción, remodelación y techos de isopanel.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Contacto</p>
            <p className="mt-2 text-sm text-slate-600">WhatsApp: +598 ...</p>
            <p className="text-sm text-slate-600">Zona: Montevideo y alrededores</p>
          </div>

          <div>
            <p className="text-sm font-semibold">Horario</p>
            <p className="mt-2 text-sm text-slate-600">
              Lun a Sáb · 9:00 a 19:00
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} MOD Soluciones. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
