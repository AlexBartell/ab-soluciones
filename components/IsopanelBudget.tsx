"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function IsopanelBudget() {
  const PANEL_WIDTH = 1.14;
  const PRICE_PER_M2 = 130;
  const EXTRA_CANAL_MULT = 1.2;

  const ADS_SEND_TO = "AW-17925960053/XZuOCO26t_YbEPXi4eNC";

  const [anchoCaida, setAnchoCaida] = useState("");
  const [largoPerp, setLargoPerp] = useState("");
  const [conCanaleta, setConCanaleta] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);
  const lastTrackedKey = useRef<string>("");

  const calc = useMemo(() => {
    const ancho = parseFloat(anchoCaida);
    const largo = parseFloat(largoPerp);

    const valid =
      Number.isFinite(ancho) &&
      Number.isFinite(largo) &&
      ancho > 0 &&
      largo > 0;

    if (!valid) {
      return {
        valid: false,
        paneles: 0,
        largoReal: 0,
        m2Reales: 0,
        total: 0,
      };
    }

    const paneles = Math.ceil(largo / PANEL_WIDTH);
    const largoReal = paneles * PANEL_WIDTH;
    const m2Reales = largoReal * ancho;

    const base = m2Reales * PRICE_PER_M2;
    const total = conCanaleta ? base * EXTRA_CANAL_MULT : base;

    return {
      valid: true,
      paneles,
      largoReal,
      m2Reales,
      total,
    };
  }, [anchoCaida, largoPerp, conCanaleta]);

  const money = (n: number) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const waText = useMemo(() => {
    const ancho = anchoCaida || "-";
    const largo = largoPerp || "-";
    const canal = conCanaleta ? "Sí" : "No";
    const total = calc.valid ? money(calc.total) : "";

    return encodeURIComponent(
      `Hola! Quiero presupuesto para techo de isopanel.\n` +
        `Ancho: ${ancho} m\n` +
        `Largo: ${largo} m\n` +
        `Canaleta: ${canal}\n` +
        (total ? `Estimación web: ${total}\n` : "") +
        `¿Podemos coordinar una visita técnica?`
    );
  }, [anchoCaida, largoPerp, conCanaleta, calc.valid, calc.total]);

  const fireGtagEvent = (eventName: string, params?: Record<string, any>) => {
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, params || {});
      }
    } catch {
      // no-op
    }
  };

  const handleWhatsappClick = () => {
    fireGtagEvent("whatsapp_click", {
      section: "isopanel_budget",
      has_estimate: calc.valid,
      estimated_value: calc.valid ? Math.round(calc.total) : undefined,
      canaleta: conCanaleta ? "si" : "no",
    });

    fireGtagEvent("conversion", {
      send_to: ADS_SEND_TO,
      value: 1.0,
      currency: "USD",
    });
  };

  useEffect(() => {
    if (!calc.valid) return;

    const key = `${anchoCaida}-${largoPerp}-${conCanaleta}-${Math.round(
      calc.total
    )}`;

    if (lastTrackedKey.current === key) return;
    lastTrackedKey.current = key;

    fireGtagEvent("budget_calculated", {
      section: "isopanel_budget",
      estimated_value: Math.round(calc.total),
      paneles: calc.paneles,
      m2_material: Number(calc.m2Reales.toFixed(2)),
      canaleta: conCanaleta ? "si" : "no",
    });

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    }
  }, [
    calc.valid,
    calc.total,
    calc.paneles,
    calc.m2Reales,
    anchoCaida,
    largoPerp,
    conCanaleta,
  ]);

  return (
    <section id="presupuesto" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        {/* IZQUIERDA */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Calculá el precio estimado de tu techo de isopanel
          </h2>

          <p className="mt-3 text-slate-600 md:text-lg">
            Ingresá las medidas y obtené una <strong>estimación inmediata</strong>.
            Si te sirve, nos escribís por WhatsApp y coordinamos una visita técnica.
          </p>

          <div className="mt-6">
            <a
              href="https://wa.me/59895408688?text=Hola%20quiero%20presupuesto%20para%20techo%20de%20isopanel"
              target="_blank"
              rel="noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-600 sm:w-auto"
            >
              📲 Quiero mi presupuesto por WhatsApp
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Te respondemos rápido y coordinamos visita técnica.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Cómo medir</p>
            <p className="mt-2 text-sm text-slate-700">
              <strong>Ancho</strong> = dirección de la caída.
              <br />
              <strong>Largo</strong> = perpendicular a la caída.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              MOD Soluciones
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Instalación profesional de techos de isopanel
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              En Montevideo y zona metropolitana
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Por qué elegirnos
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✔ Isopanel de 10 cm de espesor</li>
                <li>✔ Instalación profesional</li>
                <li>✔ Garantía de instalación</li>
                <li>✔ Sellado y terminaciones</li>
                <li>✔ Asesoramiento en obra</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Cómo trabajamos
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>1️⃣ Calculás una estimación online</li>
                <li>2️⃣ Coordinamos visita técnica</li>
                <li>3️⃣ Confirmamos presupuesto final</li>
                <li>4️⃣ Instalamos el techo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DERECHA */}
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
                <p className="text-xs text-slate-600">
                  Incluye materiales adicionales
                </p>
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

            <div
              ref={resultRef}
              className="rounded-2xl border border-slate-200 p-5"
            >
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
                    <p className="mt-1 text-3xl font-semibold">
                      {money(calc.total)}
                    </p>
                    <p className="mt-2 text-xs text-white/70">
                      Valor orientativo. El presupuesto final se confirma con
                      visita técnica.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/59895408688?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleWhatsappClick}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-600"
                  >
                    📲 Quiero mi presupuesto por WhatsApp
                  </a>

                  <p className="text-center text-xs text-slate-500">
                    La visita técnica tiene costo y <strong>se descuenta</strong>{" "}
                    del presupuesto final si avanzamos con la obra.
                  </p>

                  <details className="rounded-2xl bg-slate-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                      Ver detalle del cálculo
                    </summary>

                    <div className="mt-3 space-y-1 text-sm text-slate-700">
                      <p>
                        Paneles necesarios: <strong>{calc.paneles}</strong>
                      </p>
                      <p>
                        Largo real cubierto:{" "}
                        <strong>{calc.largoReal.toFixed(2)} m</strong>
                      </p>
                      <p>
                        m² de material:{" "}
                        <strong>{calc.m2Reales.toFixed(2)} m²</strong>
                      </p>
                      <p className="pt-2 text-xs text-slate-500">
                        Se calcula con paneles de 1,14 m y se redondea a panel
                        completo.
                      </p>
                    </div>
                  </details>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              * El precio final puede variar según estructura, remates y
              condiciones del techo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}