"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type WhatsappPlacement = "hero" | "calculator_result";

const parseDecimal = (value: string) => Number(value.replace(",", "."));

export default function IsopanelBudgett() {
  const PANEL_WIDTH = 1.14;
  const EXTRA_CANAL_MULT = 1.2;
  const PRICE_PER_M2 = 90;

  const ADS_SEND_TO = "AW-17925960053/XZuOCO26t_YbEPXi4eNC";

  const [caida, setCaida] = useState("");
  const [frente, setFrente] = useState("");
  const [zona, setZona] = useState("Montevideo");
  const [altura, setAltura] = useState("No sé / a confirmar");
  const [estructura, setEstructura] = useState("No sé / a revisar");
  const [tipoTrabajo, setTipoTrabajo] = useState("Techo nuevo");
  const [conCanaleta, setConCanaleta] = useState(false);

  const [showResult, setShowResult] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);

  const calc = useMemo(() => {
    const caidaNum = parseDecimal(caida);
    const frenteNum = parseDecimal(frente);

    const valid =
      Number.isFinite(caidaNum) &&
      Number.isFinite(frenteNum) &&
      caidaNum > 0 &&
      frenteNum > 0;

    if (!valid) {
      return {
        valid: false,
        superficieIngresada: 0,
        paneles: 0,
        frenteRealCubierto: 0,
        m2Reales: 0,
        base: 0,
        total: 0,
        requiereApoyo: false,
      };
    }

    const superficieIngresada = caidaNum * frenteNum;
    const paneles = Math.ceil(frenteNum / PANEL_WIDTH);
    const frenteRealCubierto = paneles * PANEL_WIDTH;
    const m2Reales = frenteRealCubierto * caidaNum;

    const base = m2Reales * PRICE_PER_M2;
    const total = conCanaleta ? base * EXTRA_CANAL_MULT : base;
    const requiereApoyo = caidaNum > 5.5;

    return {
      valid: true,
      superficieIngresada,
      paneles,
      frenteRealCubierto,
      m2Reales,
      base,
      total,
      requiereApoyo,
    };
  }, [caida, frente, conCanaleta]);

  const money = (n: number) =>
    new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const waText = useMemo(() => {
    const caidaText = caida || "-";
    const frenteText = frente || "-";
    const canal = conCanaleta ? "Sí" : "No";
    const total = calc.valid ? money(calc.total) : "-";
    const paneles = calc.valid ? String(calc.paneles) : "-";
    const m2Material = calc.valid ? `${calc.m2Reales.toFixed(2)} m²` : "-";
    const apoyo = calc.valid
      ? calc.requiereApoyo
        ? "Puede requerir apoyo porque la caída supera 5,50 m"
        : "No marcado por la calculadora"
      : "-";

    return encodeURIComponent(
      `Hola, quiero cotizar un techo de isopanel.\n` +
        `Caída / largo del panel: ${caidaText} m\n` +
        `Frente / ancho a cubrir: ${frenteText} m\n` +
        `Paneles estimados: ${paneles}\n` +
        `M² reales estimados: ${m2Material}\n` +
        `Canaleta / desagüe: ${canal}\n` +
        `Zona: ${zona}\n` +
        `Altura: ${altura}\n` +
        `Estructura existente: ${estructura}\n` +
        `Tipo de trabajo: ${tipoTrabajo}\n` +
        `Apoyo intermedio: ${apoyo}\n` +
        `Precio orientativo desde: USD ${PRICE_PER_M2}/m² instalado\n` +
        `Estimación web: ${total}\n\n` +
        `Les paso fotos si necesitan.`
    );
  }, [
    caida,
    frente,
    conCanaleta,
    zona,
    altura,
    estructura,
    tipoTrabajo,
    calc.valid,
    calc.total,
    calc.paneles,
    calc.m2Reales,
    calc.requiereApoyo,
  ]);

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
      caida_m: Number(parseDecimal(caida).toFixed(2)),
      frente_m: Number(parseDecimal(frente).toFixed(2)),
      canaleta: conCanaleta ? "si" : "no",
      zona,
      altura,
      estructura,
      tipo_trabajo: tipoTrabajo,
      requiere_apoyo: calc.requiereApoyo ? "si" : "no",
      price_per_m2: PRICE_PER_M2,
    });

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    }
  };

  const handleWhatsappClick = (placement: WhatsappPlacement) => {
    const hasEstimate = calc.valid && showResult;

    fireGtagEvent("whatsapp_click", {
      section: "isopanel_budget",
      placement,
      has_estimate: hasEstimate,
      estimated_value: calc.valid ? Math.round(calc.total) : undefined,
      canaleta: conCanaleta ? "si" : "no",
      zona,
      altura,
      estructura,
      tipo_trabajo: tipoTrabajo,
      price_per_m2: PRICE_PER_M2,
    });

    if (placement === "calculator_result" && hasEstimate) {
      fireGtagEvent("whatsapp_click_after_estimate", {
        section: "isopanel_budget",
        estimated_value: Math.round(calc.total),
        paneles: calc.paneles,
        m2_material: Number(calc.m2Reales.toFixed(2)),
        zona,
        altura,
        estructura,
        tipo_trabajo: tipoTrabajo,
      });

      fireGtagEvent("conversion", {
        send_to: ADS_SEND_TO,
        value: 1.0,
        currency: "USD",
      });
    }
  };

  useEffect(() => {
    setShowResult(false);
  }, [caida, frente, conCanaleta, zona, altura, estructura, tipoTrabajo]);

  return (
    <>
      <section className="relative w-full overflow-hidden">
  <div className="relative min-h-[560px] md:h-[620px]">
    {/* Background desktop */}
    <Image
      src="/imagenes/unnamed.jpg"
      alt="Techo de isopanel colocado"
      fill
      priority
      className="hidden object-cover object-[center_35%] md:block"
    />

    {/* Background mobile */}
    <Image
      src="/imagenes/mobile.png"
      alt="Techo de isopanel colocado"
      fill
      priority
      className="block object-cover object-[center_35%] md:hidden"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />

    {/* Contenido */}
    <div className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-6 md:flex md:h-[620px] md:items-center md:py-0">
      <div className="max-w-3xl text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)]">
        {/* Logo */}
        <div className="mb-5 w-[62%] max-w-[270px] md:mb-6 md:w-[340px] md:max-w-[420px]">
          <Image
            src="/imagenes/logo1.png"
            alt="MOD Soluciones"
            width={520}
            height={180}
            className="h-auto w-full"
            priority
          />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80 md:text-sm">
          Montevideo y zona metropolitana
        </p>

        <h1 className="mt-3 max-w-[13ch] text-[clamp(34px,11vw,48px)] font-bold leading-[1.02] tracking-[-0.04em] md:max-w-[16ch] md:text-[clamp(48px,6.4vw,70px)]">
          Techo de isopanel desde USD {PRICE_PER_M2}/m²
        </h1>

        <p className="mt-4 max-w-[32ch] text-base font-medium leading-7 text-white/90 md:max-w-[40ch] md:text-[clamp(17px,2.5vw,24px)] md:leading-8">
          Instalación completa con panel de 10 cm, estructura según el caso,
          fijaciones, remates y sellado.
        </p>

        {/* Tarjetas solo desktop/tablet */}
        <div className="mt-6 hidden max-w-xl gap-3 sm:grid-cols-3 md:grid">
          <div className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Desde
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              USD {PRICE_PER_M2}
            </p>
            <p className="text-xs text-white/75">/ m² instalado</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/65">
              Incluye
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Panel + instalación
            </p>
            <p className="text-xs text-white/75">No vendemos material suelto</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/65">
              Diferencial
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Sellados y remates
            </p>
            <p className="text-xs text-white/75">Terminación cuidada</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
          <a
            href="#calculadora-isopanel"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-black/25 transition hover:bg-slate-100 md:px-7 md:py-3.5 md:text-base"
          >
            Calcular precio estimado
          </a>

          <a
            href="https://wa.me/59895408688?text=Hola%2C%20quiero%20consultar%20por%20un%20techo%20de%20isopanel%20instalado"
            target="_blank"
            rel="noreferrer"
            onClick={() => handleWhatsappClick("hero")}
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/25 transition hover:bg-green-600 md:px-7 md:py-3.5 md:text-base"
          >
            <FaWhatsapp size={20} />
            Consultar por WhatsApp
          </a>
        </div>

        <p className="mt-3 max-w-sm text-xs leading-5 text-white/75 md:max-w-xl">
          Primero podemos orientarte por medidas y fotos.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/85">
          <span className="rounded-full bg-black/25 px-3 py-1">
            Isopanel 10 cm
          </span>
          <span className="rounded-full bg-black/25 px-3 py-1">
            Instalación completa
          </span>
          <span className="rounded-full bg-black/25 px-3 py-1">
            No vendemos material suelto
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-6 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">
                Antes de comparar solo por precio
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                Lo caro no es hacerlo bien. Lo caro es pagarlo dos veces.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">
                En un techo de isopanel no importa solo el panel. Importa cómo se
                resuelven las fijaciones, la pendiente, los encuentros contra paredes,
                las babetas, los goteros y el sellado.
              </p>

              <p className="mt-3 text-base leading-7 text-slate-700 md:text-lg">
                Por eso cotizamos el techo completo, no solo el metro cuadrado de material.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Cómo medir para calcular
              </p>

              <div className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    1. Caída / largo del panel
                  </p>
                  <p className="mt-1">
                    Es la distancia desde donde empieza el techo hasta donde cae el agua.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">
                    2. Frente / ancho a cubrir
                  </p>
                  <p className="mt-1">
                    Es el lado que se divide en paneles de 1,14 m y se redondea hacia arriba.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600 md:text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Isopanel de 10 cm
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Instalación completa
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Fijaciones firmes
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">
                Remates y sellados
              </span>
            </div>
          </div>

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
                  Estimación base para obras simples. El presupuesto final se confirma
                  según estructura, altura, remates y condiciones reales.
                </p>

                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Precio orientativo desde
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Caída / largo del panel – metros
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={caida}
                    onChange={(e) => setCaida(e.target.value)}
                    placeholder="Ej: 5"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Dirección en la que cae el agua.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Frente / ancho a cubrir – metros
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={frente}
                    onChange={(e) => setFrente(e.target.value)}
                    placeholder="Ej: 10"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Este lado se divide entre paneles de 1,14 m.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Zona
                  </label>
                  <select
                    value={zona}
                    onChange={(e) => setZona(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  >
                    <option>Montevideo</option>
                    <option>Canelones / zona metropolitana</option>
                    <option>Otra zona</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Altura de trabajo
                  </label>
                  <select
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  >
                    <option>No sé / a confirmar</option>
                    <option>Planta baja</option>
                    <option>Primer piso</option>
                    <option>Segundo piso o más</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Estructura existente
                  </label>
                  <select
                    value={estructura}
                    onChange={(e) => setEstructura(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  >
                    <option>No sé / a revisar</option>
                    <option>Sí, hay estructura</option>
                    <option>No, hay que hacer estructura</option>
                    <option>Hay techo existente para retirar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Tipo de trabajo
                  </label>
                  <select
                    value={tipoTrabajo}
                    onChange={(e) => setTipoTrabajo(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none"
                  >
                    <option>Techo nuevo</option>
                    <option>Reemplazo de techo</option>
                    <option>Ampliación</option>
                    <option>No sé / quiero asesoramiento</option>
                  </select>
                </div>
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
                    Suma una referencia extra. Se confirma en obra.
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

              {calc.valid && calc.requiereApoyo && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  <strong>Atención:</strong> la caída ingresada supera 5,50 m. En este
                  caso puede requerir apoyo intermedio o una solución estructural específica.
                </div>
              )}

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

              <div ref={resultRef} className="rounded-2xl border border-slate-200 p-5">
                {!showResult ? (
                  <p className="text-sm text-slate-600">
                    Ingresá la caída y el frente, completá los datos básicos y tocá{" "}
                    <strong>“Ver precio estimado”</strong>.
                  </p>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-slate-900 p-5 text-white">
                      <p className="text-xs text-white/80">Estimación orientativa</p>
                      <p className="mt-1 text-3xl font-semibold">{money(calc.total)}</p>

                      <p className="mt-3 text-sm text-white/85">
                        Instalación base{conCanaleta ? " + canaleta / desagüe" : ""}
                      </p>

                      <p className="mt-2 text-xs text-white/70">
                        Precio desde USD {PRICE_PER_M2}/m² instalado para obras simples.
                      </p>

                      <p className="mt-2 text-xs text-white/70">
                        El presupuesto final se confirma con visita o revisión técnica
                        según estructura, remates, altura, canaletas y condiciones reales.
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Paneles estimados
                        </p>
                        <p className="mt-1 text-xl font-bold text-slate-900">
                          {calc.paneles}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          M² reales estimados
                        </p>
                        <p className="mt-1 text-xl font-bold text-slate-900">
                          {calc.m2Reales.toFixed(2)} m²
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/59895408688?text=${waText}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleWhatsappClick("calculator_result")}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-600"
                    >
                      📲 Enviar estas medidas por WhatsApp
                    </a>

                    <p className="text-center text-xs text-slate-500">
                      Primero podemos orientarte por medidas y fotos. Si el trabajo tiene
                      sentido, coordinamos visita técnica para confirmar el precio.
                    </p>

                    <details className="rounded-2xl bg-slate-50 p-4">
                      <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                        Ver detalle del cálculo
                      </summary>

                      <div className="mt-3 space-y-1 text-sm text-slate-700">
                        <p>
                          Superficie ingresada:{" "}
                          <strong>{calc.superficieIngresada.toFixed(2)} m²</strong>
                        </p>
                        <p>
                          Paneles necesarios: <strong>{calc.paneles}</strong>
                        </p>
                        <p>
                          Frente real cubierto:{" "}
                          <strong>{calc.frenteRealCubierto.toFixed(2)} m</strong>
                        </p>
                        <p>
                          Superficie estimada de material:{" "}
                          <strong>{calc.m2Reales.toFixed(2)} m²</strong>
                        </p>
                        <p>
                          Canaleta / desagüe:{" "}
                          <strong>{conCanaleta ? "Sí" : "No"}</strong>
                        </p>
                        <p className="pt-2 text-xs text-slate-500">
                          El cálculo contempla paneles de 1,14 m de ancho útil y se
                          redondea a panel completo. Es una estimación, no presupuesto final.
                        </p>
                      </div>
                    </details>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-500">
                * Valor orientativo desde USD {PRICE_PER_M2}/m² para obras simples en
                Montevideo y zona metropolitana. Puede variar según estructura, remates,
                altura, canaletas, acceso y condiciones reales del techo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
