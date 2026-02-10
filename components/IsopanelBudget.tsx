"use client";

import { useMemo, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function IsopanelBudget() {
  const PANEL_WIDTH = 1.14; // m
  const PRICE_PER_M2 = 90; // USD
  const EXTRA_CANAL_MULT = 1.2; // +20%

  // ✅ Google Ads conversion (solo para este CTA)
  const ADS_SEND_TO = "AW-17925960053/XZuOCO26t_YbEPXi4eNC";

  const [anchoCaida, setAnchoCaida] = useState<string>(""); // dirección caída
  const [largoPerp, setLargoPerp] = useState<string>(""); // perpendicular a caída (define cantidad de paneles)
  const [conCanaleta, setConCanaleta] = useState<boolean>(false);

  const calc = useMemo(() => {
    const ancho = parseFloat(anchoCaida);
    const largo = parseFloat(largoPerp);

    const valid =
      Number.isFinite(ancho) && Number.isFinite(largo) && ancho > 0 && largo > 0;

    if (!valid) {
      return {
        valid: false,
        paneles: 0,
        largoReal: 0,
        m2Geometricos: 0,
        m2Reales: 0,
        base: 0,
        total: 0,
        mult: conCanaleta ? EXTRA_CANAL_MULT : 1,
      };
    }

    // ✅ La cantidad de paneles la define el LARGO (perpendicular a la caída)
    const paneles = Math.ceil(largo / PANEL_WIDTH);
    const largoReal = paneles * PANEL_WIDTH;

    const m2Geometricos = ancho * largo;

    // ✅ m² reales = largo real cubierto * ancho (caída)
    const m2Reales = largoReal * ancho;

    const base = m2Reales * PRICE_PER_M2;
    const mult = conCanaleta ? EXTRA_CANAL_MULT : 1;
    const total = base * mult;

    return {
      valid: true,
      paneles,
      largoReal,
      m2Geometricos,
      m2Reales,
      base,
      total,
      mult,
    };
  }, [anchoCaida, largoPerp, conCanaleta]);

  const money = (n: number) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const waText = useMemo(() => {
    const ancho = anchoCaida?.trim();
    const largo = largoPerp?.trim();
    const canal = conCanaleta ? "Sí" : "No";
    const total = calc.valid ? money(calc.total) : "";

    return encodeURIComponent(
      `Hola! Quiero presupuesto para techo de isopanel.\n` +
        `Ancho (dirección de la caída): ${ancho || "-"} m\n` +
        `Largo (perpendicular a la caída): ${largo || "-"} m\n` +
        `Canaleta/desagüe: ${canal}\n` +
        (total ? `Estimación web: ${total}\n` : "") +
        `¿Podemos coordinar una visita?`
    );
  }, [anchoCaida, largoPerp, conCanaleta, calc.valid, calc.total]);

  // ✅ Dispara conversión SOLO acá (lead caliente)
  const handleWhatsappClick = () => {
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: ADS_SEND_TO,
          value: 1.0,
          currency: "USD",
        });
      }
    } catch {
      // no-op
    }
  };

  return (
    <section id="presupuesto" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        {/* IZQ */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Calculá un estimado en 20 segundos - ISOPANEL de 10cm espesor
          </h2>

          <p className="mt-3 text-slate-600 md:text-lg">
            Poné las medidas y te mostramos un <strong>precio orientativo</strong>. Si te sirve,
            nos escribís por WhatsApp y te pasamos el presupuesto final.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Cómo medir</p>
            <p className="mt-2 text-sm text-slate-700">
              <strong>Ancho</strong> = dirección de la caída. <br />
              <strong>Largo</strong> = perpendicular a la caída.
            </p>

            <p className="mt-3 text-xs text-slate-500">
              Base: <strong>{PRICE_PER_M2} USD/m²</strong> (material + colocación, estimado).
            </p>
          </div>

          <p className="mt-4 text-sm text-slate-600">
            ¿Tenés dudas con la medida? Igual escribinos y te guiamos en 1 minuto.
          </p>
        </div>

        {/* DER */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <div className="grid gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Ancho (dirección de la caída) – metros
              </label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                value={anchoCaida}
                onChange={(e) => setAnchoCaida(e.target.value)}
                placeholder="Ej: 5"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Largo (perpendicular a la caída) – metros
              </label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                value={largoPerp}
                onChange={(e) => setLargoPerp(e.target.value)}
                placeholder="Ej: 10"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
              />
            </div>

            {/* Toggle canaleta */}
            <button
              type="button"
              onClick={() => setConCanaleta((v) => !v)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                conCanaleta
                  ? "border-emerald-300 bg-emerald-50"
                  : "border-slate-200 bg-slate-50 hover:bg-slate-100"
              }`}
              aria-pressed={conCanaleta}
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Agregar canaleta / desagüe
                </p>
                <p className="text-xs text-slate-600">+20% por materiales extra</p>
              </div>

              <div
                className={`h-6 w-11 rounded-full p-1 transition ${
                  conCanaleta ? "bg-emerald-500" : "bg-slate-300"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition ${
                    conCanaleta ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </button>

            {/* Resultado */}
            <div className="rounded-2xl border border-slate-200 p-5">
              {!calc.valid ? (
                <p className="text-sm text-slate-600">
                  Ingresá ancho y largo para ver el total.
                </p>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-900 p-5 text-white">
                    <p className="text-xs text-white/80">
                      Total estimado{" "}
                      {conCanaleta ? "(incluye canaleta/desagüe)" : ""}
                    </p>
                    <p className="mt-1 text-3xl font-semibold">{money(calc.total)}</p>
                    <p className="mt-2 text-xs text-white/70">
                      Orientativo. El final se confirma con visita técnica.
                    </p>
                  </div>

                  {/* ✅ CTA con conversión Google Ads */}
                  <a
                    href={`https://wa.me/59895408688?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleWhatsappClick}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white hover:bg-green-600 transition"
                  >
                    Pedir presupuesto por WhatsApp
                  </a>

                  {/* ✅ VISITA PAGA */}
                  <p className="text-center text-xs text-slate-500">
                    La visita técnica tiene costo y <strong>se descuenta</strong> del presupuesto final si avanzamos con la obra.
                  </p>

                  <details className="rounded-2xl bg-slate-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                      Ver detalle del cálculo
                    </summary>

                    <div className="mt-3 space-y-1 text-sm text-slate-700">
                      <p>
                        m² del techo: <strong>{calc.m2Geometricos.toFixed(2)} m²</strong>
                      </p>
                      <p>
                        Paneles necesarios: <strong>{calc.paneles}</strong>
                      </p>
                      <p>
                        Largo real cubierto: <strong>{calc.largoReal.toFixed(2)} m</strong>
                      </p>
                      <p>
                        m² de material: <strong>{calc.m2Reales.toFixed(2)} m²</strong>
                      </p>
                      <p className="pt-2 text-xs text-slate-500">
                        Se calcula con paneles de 1,14 m y se redondea a panel completo.
                      </p>
                      <p className="text-xs text-slate-500">
                        Base: {money(calc.base)} {conCanaleta ? `× ${calc.mult}` : ""}
                      </p>
                    </div>
                  </details>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              * Valor orientativo. El presupuesto final se confirma según estructura, remates y terminaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
