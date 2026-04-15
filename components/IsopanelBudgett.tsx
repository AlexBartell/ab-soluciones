"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type TipoInstalacion = "basica" | "completa";

export default function IsopanelBudgett() {
  const PANEL_WIDTH = 1.14;
  const EXTRA_CANAL_MULT = 1.2;

  const ADS_SEND_TO = "AW-17925960053/XZuOCO26t_YbEPXi4eNC";

  const [tipoInstalacion, setTipoInstalacion] =
    useState<TipoInstalacion>("completa");
  const [anchoCaida, setAnchoCaida] = useState("");
  const [largoPerp, setLargoPerp] = useState("");
  const [conCanaleta, setConCanaleta] = useState(false);

  const [showResult, setShowResult] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);

  const pricePerM2 = tipoInstalacion === "basica" ? 105 : 130;

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

    const base = m2Reales * pricePerM2;
    const total = conCanaleta ? base * EXTRA_CANAL_MULT : base;

    return {
      valid: true,
      superficieIngresada,
      paneles,
      largoReal,
      m2Reales,
      total,
    };
  }, [anchoCaida, largoPerp, conCanaleta, pricePerM2]);

  const money = (n: number) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const tipoTexto =
    tipoInstalacion === "completa"
      ? "Instalación completa"
      : "Instalación básica";

  const waText = useMemo(() => {
    const ancho = anchoCaida || "-";
    const largo = largoPerp || "-";
    const canal = conCanaleta ? "Sí" : "No";
    const total = calc.valid ? money(calc.total) : "";

    return encodeURIComponent(
      `Hola! Quiero presupuesto para techo de isopanel.\n` +
        `Tipo de instalación: ${tipoTexto}\n` +
        `Ancho: ${ancho} m\n` +
        `Largo: ${largo} m\n` +
        `Canaleta: ${canal}\n` +
        `Precio orientativo por m²: USD ${pricePerM2}\n` +
        (total ? `Estimación web: ${total}\n` : "") +
        `¿Podemos coordinar una visita técnica?`
    );
  }, [
    anchoCaida,
    largoPerp,
    conCanaleta,
    calc.valid,
    calc.total,
    tipoTexto,
    pricePerM2,
  ]);

  const fireGtagEvent = (eventName: string, params?: Record<string, any>) => {
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, params || {});
      }
    } catch {}
  };

  const handleCalculate = () => {
    if (!calc.valid) return;

    setShowResult(true);

    fireGtagEvent("budget_calculated", {
      section: "isopanel_budget",
      installation_type: tipoInstalacion,
      estimated_value: Math.round(calc.total),
      paneles: calc.paneles,
      m2_input: Number(calc.superficieIngresada.toFixed(2)),
      m2_material: Number(calc.m2Reales.toFixed(2)),
      canaleta: conCanaleta ? "si" : "no",
      price_per_m2: pricePerM2,
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
      installation_type: tipoInstalacion,
      estimated_value: calc.valid ? Math.round(calc.total) : undefined,
      canaleta: conCanaleta ? "si" : "no",
      price_per_m2: pricePerM2,
    });

    fireGtagEvent("conversion", {
      send_to: ADS_SEND_TO,
      value: 1.0,
      currency: "USD",
    });
  };

  useEffect(() => {
    setShowResult(false);
  }, [anchoCaida, largoPerp, conCanaleta, tipoInstalacion]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">

      {/* HERO */}
      <div className="mb-10 max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
          MOD Soluciones
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Precio de techo de isopanel por m² en Montevideo y zona metropolitana
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
          Instalación profesional de techos de isopanel con remates, sellado correcto,
          fijaciones estructurales y garantía de instalación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          Valores orientativos entre <strong>USD 105 y USD 130 por m²</strong>,
          según terminaciones y condiciones de la obra.
        </p>

      </div>

      {/* CALCULADORA */}
      <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

        <div className="grid gap-5">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-semibold text-slate-900">
              Tipo de instalación
            </p>

            <div className="grid gap-2">

              <button
                type="button"
                onClick={() => setTipoInstalacion("completa")}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  tipoInstalacion === "completa"
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  Instalación completa (recomendada)
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Remates, sellados y terminaciones más completas
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-900">
                  USD 130 / m²
                </p>
              </button>

              <button
                type="button"
                onClick={() => setTipoInstalacion("basica")}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  tipoInstalacion === "basica"
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <p className="text-sm font-semibold text-slate-900">
                  Instalación básica
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Colocación simple del panel
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-900">
                  USD 105 / m²
                </p>
              </button>

            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Ancho (dirección de la caída) – metros
            </label>
            <input
              type="number"
              step="0.01"
              value={anchoCaida}
              onChange={(e) => setAnchoCaida(e.target.value)}
              placeholder="Ej: 5"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Largo (perpendicular a la caída) – metros
            </label>
            <input
              type="number"
              step="0.01"
              value={largoPerp}
              onChange={(e) => setLargoPerp(e.target.value)}
              placeholder="Ej: 10"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base"
            />
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            disabled={!calc.valid}
            className={`rounded-2xl px-6 py-3 text-base font-semibold ${
              calc.valid
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "cursor-not-allowed bg-slate-200 text-slate-500"
            }`}
          >
            Ver precio estimado
          </button>

          {showResult && calc.valid && (
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-xs text-white/80">Inversión estimada</p>
              <p className="mt-1 text-3xl font-semibold">
                {money(calc.total)}
              </p>

              <a
                href={`https://wa.me/59895408688?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                onClick={handleWhatsappClick}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white hover:bg-green-600"
              >
                📲 Quiero mi presupuesto por WhatsApp
              </a>
            </div>
          )}

        </div>

      </div>

      <div className="mb-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/imagenes/isopanel-obra.jpg"
            alt="Instalación de techo de isopanel en Montevideo y zona metropolitana"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
}
	