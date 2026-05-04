"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function IsopanelBudgett() {
  const PANEL_WIDTH = 1.14;
  const EXTRA_CANAL_MULT = 1.2;
  const PRICE_PER_M2 = 99;

  const ADS_SEND_TO = "AW-17925960053/XZuOCO26t_YbEPXi4eNC";

  const [anchoCaida, setAnchoCaida] = useState("");
  const [largoPerp, setLargoPerp] = useState("");
  const [conCanaleta, setConCanaleta] = useState(false);

  const [showResult, setShowResult] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);

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
        superficieIngresada: 0,
        paneles: 0,
        largoReal: 0,
        m2Reales: 0,
        total: 0,
      };
    }

    const superficieIngresada = ancho * largo;
    const paneles = Math.ceil(largo / PANEL_WIDTH);
    const largoReal = paneles * PANEL_WIDTH;
    const m2Reales = largoReal * ancho;

    const base = m2Reales * PRICE_PER_M2;
    const total = conCanaleta ? base * EXTRA_CANAL_MULT : base;

    return {
      valid: true,
      superficieIngresada,
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
      `Hola! Quiero consultar por un techo de isopanel instalado.\n` +
        `Ancho: ${ancho} m\n` +
        `Largo: ${largo} m\n` +
        `Canaleta / desagüe: ${canal}\n` +
        `Precio orientativo desde: USD ${PRICE_PER_M2}/m² instalado\n` +
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

  const handleCalculate = () => {
    if (!calc.valid) return;

    setShowResult(true);

    fireGtagEvent("budget_calculated", {
      section: "isopanel_budget",
      estimated_value: Math.round(calc.total),
      paneles: calc.paneles,
      m2_input: Number(calc.superficieIngresada.toFixed(2)),
      m2_material: Number(calc.m2Reales.toFixed(2)),
      canaleta: conCanaleta ? "si" : "no",
      price_per_m2: PRICE_PER_M2,
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
  };

  const handleWhatsappClick = () => {
    fireGtagEvent("whatsapp_click", {
      section: "isopanel_budget",
      has_estimate: calc.valid && showResult,
      estimated_value: calc.valid ? Math.round(calc.total) : undefined,
      canaleta: conCanaleta ? "si" : "no",
      price_per_m2: PRICE_PER_M2,
    });

    fireGtagEvent("conversion", {
      send_to: ADS_SEND_TO,
      value: 1.0,
      currency: "USD",
    });
  };

  useEffect(() => {
    setShowResult(false);
  }, [anchoCaida, largoPerp, conCanaleta]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-8 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            MOD Soluciones
          </p>

          <h1 className="mt-3 max-w-[15ch] text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Precio de techo de isopanel por m² en Montevideo y zona metropolitana
          </h1>

          {/* PRECIO PRINCIPAL */}
          <div className="mt-5 max-w-2xl rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Precio de lanzamiento
            </p>

            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Desde USD {PRICE_PER_M2}
              <span className="text-xl font-semibold text-slate-600">
                {" "}
                / m² instalado
              </span>
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">
              Valor orientativo para obras simples. El precio final puede variar
              según estructura, altura, remates, canaletas y condiciones reales
              del techo.
            </p>
          </div>

          {/* BLOQUE EMOCIONAL CORTO */}
          <div className="mt-5 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">
              Antes de comparar solo por precio
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
              Lo caro no es hacerlo bien. Lo caro es pagarlo dos veces.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
              El panel puede ser bueno, pero si falla la instalación, falla el
              techo.
            </p>

            <p className="mt-3 text-base leading-7 text-slate-700 md:text-lg">
              Trabajamos techos de isopanel completos, con criterio técnico,
              fijaciones firmes, encuentros protegidos contra filtraciones y
              garantía de instalación.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#calculadora-isopanel"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 md:px-7 md:py-3.5 md:text-base"
            >
              Calcular precio estimado
            </a>

            <a
              href="https://wa.me/59895408688?text=Hola%2C%20quiero%20consultar%20por%20un%20techo%20de%20isopanel%20instalado"
              target="_blank"
              rel="noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600 md:px-7 md:py-3.5 md:text-base"
            >
              Coordinar por WhatsApp
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500 md:text-sm">
            No vendemos material suelto. Trabajamos soluciones completas con
            instalación incluida.
          </p>

          <p className="mt-2 text-xs text-slate-500 md:text-sm">
            Si se requiere visita técnica, su costo se descuenta del total al
            contratar.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 md:text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1.5">
              Instalación completa
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5">
              Criterio técnico
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5">
              Garantía de instalación
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5">
              Montevideo y zona metropolitana
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
                <li>✔ Instalación completa</li>
                <li>✔ Garantía de instalación</li>
                <li>✔ Fijaciones firmes</li>
                <li>✔ Solución pensada para largo plazo</li>
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
                <li>4️⃣ Definimos alcance y contrato</li>
                <li>5️⃣ Instalamos el techo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA - CALCULADORA */}
        <div
          id="calculadora-isopanel"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7 lg:sticky lg:top-24"
        >
          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Calculadora de techo de isopanel instalado
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estimación base para instalación simple con techo de isopanel.
                El precio final se confirma según las condiciones reales de la
                obra.
              </p>

              <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Desde
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  USD {PRICE_PER_M2}
                  <span className="text-base font-semibold text-slate-500">
                    {" "}
                    / m² instalado
                  </span>
                </p>
              </div>
            </div>

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

            <button
              type="button"
              onClick={handleCalculate}
              disabled={!calc.valid}
              className={`rounded-2xl px-6 py-3 text-base font-semibold transition ${
                calc.valid
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "cursor-not-allowed bg-slate-200 text-slate-500"
              }`}
            >
              Ver precio estimado
            </button>

            <div
              ref={resultRef}
              className="rounded-2xl border border-slate-200 p-5"
            >
              {!showResult ? (
                <p className="text-sm text-slate-600">
                  Ingresá ancho y largo, y tocá{" "}
                  <strong>“Ver precio estimado”</strong>.
                </p>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-900 p-5 text-white">
                    <p className="text-xs text-white/80">
                      Estimación orientativa
                    </p>
                    <p className="mt-1 text-3xl font-semibold">
                      {money(calc.total)}
                    </p>

                    <p className="mt-3 text-sm text-white/85">
                      Instalación base
                      {conCanaleta ? " + canaleta / desagüe" : ""}
                    </p>

                    <p className="mt-2 text-xs text-white/70">
                      Precio desde USD {PRICE_PER_M2}/m² instalado para obras
                      simples.
                    </p>

                    <p className="mt-2 text-xs text-white/70">
                      El presupuesto final se confirma con visita técnica según
                      estructura, remates, altura, canaletas y condiciones reales
                      del techo.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/59895408688?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleWhatsappClick}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-600"
                  >
                    📲 Confirmar este estimado por WhatsApp
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
                        Superficie ingresada:{" "}
                        <strong>
                          {calc.superficieIngresada.toFixed(2)} m²
                        </strong>
                      </p>
                      <p>
                        Paneles necesarios: <strong>{calc.paneles}</strong>
                      </p>
                      <p>
                        Largo real cubierto:{" "}
                        <strong>{calc.largoReal.toFixed(2)} m</strong>
                      </p>
                      <p>
                        Superficie estimada de material:{" "}
                        <strong>{calc.m2Reales.toFixed(2)} m²</strong>
                      </p>
                      <p className="pt-2 text-xs text-slate-500">
                        El cálculo contempla paneles de 1,14 m de ancho útil y
                        se redondea a panel completo.
                      </p>
                    </div>
                  </details>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              * Precio orientativo desde USD {PRICE_PER_M2}/m² para obras
              simples. El valor final puede variar según estructura, remates,
              altura, canaletas y condiciones del techo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}