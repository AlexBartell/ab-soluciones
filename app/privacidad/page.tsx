export const metadata = {
  title: "Política de Privacidad | MOD Soluciones",
};

export default function Privacidad() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-3xl font-bold tracking-tight">
        Política de Privacidad
      </h1>

      <p className="mt-6 text-slate-700">
        En MOD Soluciones valoramos y respetamos la privacidad de las personas
        que visitan nuestro sitio web.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Información que recopilamos
      </h2>
      <p className="mt-2 text-slate-700">
        No solicitamos información personal sensible a través de este sitio.
        La información que podamos recibir (por ejemplo, nombre o datos de
        contacto enviados voluntariamente por WhatsApp) se utiliza únicamente
        para responder consultas y coordinar presupuestos.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Uso de herramientas de análisis
      </h2>
      <p className="mt-2 text-slate-700">
        Este sitio puede utilizar herramientas de análisis como Google Analytics
        para comprender cómo los usuarios navegan por la página y así mejorar
        nuestros servicios. Estas herramientas recopilan información de forma
        anónima, como páginas visitadas y tiempo de permanencia.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Uso de cookies
      </h2>
      <p className="mt-2 text-slate-700">
        Google Analytics puede utilizar cookies para recopilar información
        estadística anónima. El usuario puede configurar su navegador para
        rechazar cookies si así lo desea.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Compartir información
      </h2>
      <p className="mt-2 text-slate-700">
        MOD Soluciones no vende, alquila ni comparte información personal con
        terceros. Los datos solo se utilizan con fines de contacto y atención al
        cliente.
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Contacto
      </h2>
      <p className="mt-2 text-slate-700">
        Si tenés preguntas sobre esta política de privacidad, podés contactarnos
        directamente por WhatsApp.
      </p>

      <p className="mt-10 text-sm text-slate-500">
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  );
}
