import { useEffect, useRef } from "react";
import { Download, FileText, Star } from "lucide-react";
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
} from "chart.js";
import type { ArchiveItem } from "../../types";
import { archivesItems, unsurItems } from "../../data/mockData";

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
);

const DISTRIBUSI = [
  {
    label: "Sangat puas",
    pct: 38,
    count: 474,
    color: "#1D9E75",
    textColor: "#E1F5EE",
  },
  {
    label: "Puas",
    pct: 47,
    count: 587,
    color: "#378ADD",
    textColor: "#E6F1FB",
  },
  {
    label: "Cukup puas",
    pct: 11,
    count: 137,
    color: "#EF9F27",
    textColor: "#FAEEDA",
  },
  {
    label: "Tidak puas",
    pct: 4,
    count: 50,
    color: "#E24B4A",
    textColor: "#FCEBEB",
  },
];

const TREND_LABELS = ["2021", "2022", "2023", "2024"];
const TREND_DATA = [79.2, 80.6, 81.8, 83.4];

function getBarColor(value: number): string {
  if (value >= 3.4) return "#1D9E75"; // teal
  if (value >= 3.0) return "#378ADD"; // blue
  return "#EF9F27"; // amber
}

const ARCHIVE_ICON_STYLES: Record<
  ArchiveItem["variant"],
  { bg: string; color: string }
> = {
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  blue: { bg: "#E6F1FB", color: "#185FA5" },
  gray: { bg: "#F1EFE8", color: "#5F5E5A" },
};

const ARCHIVE_PILL_STYLES: Record<
  ArchiveItem["variant"],
  { bg: string; color: string }
> = {
  teal: { bg: "#E1F5EE", color: "#0F6E56" },
  blue: { bg: "#E6F1FB", color: "#185FA5" },
  gray: { bg: "#F1EFE8", color: "#5F5E5A" },
};

function TrendChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const gridColor = isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)";
    const tickColor = isDark ? "rgba(255,255,255,.45)" : "rgba(0,0,0,.4)";

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: TREND_LABELS,
        datasets: [
          {
            data: TREND_DATA,
            borderColor: "#1D9E75",
            backgroundColor: "rgba(29,158,117,.1)",
            borderWidth: 2,
            pointBackgroundColor: "#1D9E75",
            pointRadius: 4,
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` IKM: ${ctx.parsed.y?.toFixed(1) ?? "-"}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: tickColor, font: { size: 11 } },
          },
          y: {
            min: 76,
            max: 86,
            grid: { color: gridColor },
            ticks: {
              color: tickColor,
              font: { size: 11 },
              callback: (v) => Number(v).toFixed(0),
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative h-28">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Grafik tren IKM 2021–2024: 79.2, 80.6, 81.8, 83.4"
      >
        IKM 2021: 79.2 | 2022: 80.6 | 2023: 81.8 | 2024: 83.4
      </canvas>
    </div>
  );
}

const IndexKepuasanPage = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-24 xl:px-40 py-10 space-y-8">
      {/* Hero */}
      <section
        className="relative rounded-3xl overflow-hidden p-10 md:p-14"
        style={{ background: "#064E5C" }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            right: -70,
            top: -90,
            background: "rgba(255,255,255,.06)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 150,
            height: 150,
            right: 250,
            bottom: -55,
            background: "rgba(255,255,255,.04)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-2">
              RSUD Karawang · IKM
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
              Indeks <span className="text-cyan-300">kepuasan masyarakat</span>
              <br />
              periode 2024
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              Hasil survei kepuasan berdasarkan Permenpan RB No. 14 Tahun 2017
              terhadap 9 unsur pelayanan publik RSUD Karawang.
            </p>
          </div>

          {/* Score card */}
          <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-8 py-5 text-center">
            <div className="text-5xl font-bold text-white leading-none">
              83.4
            </div>
            <div className="text-[11px] tracking-widest uppercase text-white/50 mt-2">
              Nilai IKM
            </div>
            <div className="inline-flex items-center gap-1 mt-3 bg-[#1D9E75] text-[#E1F5EE] text-xs font-semibold rounded-full px-3 py-1">
              <Star size={10} />
              Baik
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { value: "1.248", label: "Responden" },
          { value: "9", label: "Unsur dinilai" },
          { value: "3.34", label: "Nilai interval" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-4"
            style={{ background: "var(--color-background-secondary)" }}
          >
            <div className="text-2xl font-semibold text-foreground">
              {m.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
          </div>
        ))}
        <div className="rounded-xl p-4 bg-teal-50">
          <div className="text-2xl font-semibold text-teal-800">B</div>
          <div className="text-xs text-teal-700 mt-1">Mutu pelayanan</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Unsur penilaian */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Penilaian per unsur
          </h2>
          <div className="space-y-3">
            {unsurItems.map((u) => {
              const pct = ((u.value - 1) / 3) * 100;
              const color = getBarColor(u.value);
              return (
                <div key={u.label} className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground w-36 shrink-0 leading-snug">
                    {u.label}
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-accent overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: color }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-foreground w-8 text-right shrink-0">
                    {u.value.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Distribusi + Tren */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 flex-1">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Distribusi kepuasan
            </h2>
            <div className="space-y-2.5">
              {DISTRIBUSI.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground w-20 shrink-0">
                    {d.label}
                  </div>
                  <div className="flex-1 h-5 rounded-md bg-accent overflow-hidden">
                    <div
                      className="h-full rounded-md flex items-center px-2"
                      style={{ width: `${d.pct}%`, background: d.color }}
                    >
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: d.textColor }}
                      >
                        {d.pct}%
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground w-12 text-right shrink-0">
                    {d.count.toLocaleString("id-ID")} org
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Tren IKM tahunan
            </h2>
            <TrendChart />
          </div>
        </div>
      </div>

      {/* Arsip */}
      <section>
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mb-4">
          Arsip laporan IKM
        </p>
        <div className="space-y-2.5">
          {archivesItems.map((a) => {
            const iconStyle = ARCHIVE_ICON_STYLES[a.variant];
            const pillStyle = ARCHIVE_PILL_STYLES[a.variant];
            return (
              <div
                key={a.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3.5"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: iconStyle.bg, color: iconStyle.color }}
                >
                  <FileText size={17} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground truncate">
                    {a.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {a.period} · {a.respondents.toLocaleString("id-ID")}{" "}
                    responden
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: pillStyle.bg, color: pillStyle.color }}
                >
                  {a.score.toFixed(1)} · {a.mutu}
                </span>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-xl px-3 py-2 shrink-0 transition-colors"
                  style={{
                    background: "#E1F5EE",
                    color: "#0F6E56",
                    border: "0.5px solid #9FE1CB",
                  }}
                >
                  <Download size={13} />
                  Unduh PDF
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
          <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-xs font-semibold text-teal-700 shrink-0">
            TL
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">
              [Nama Tim Survei]
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Tim Penjaminan Mutu · RSUD Karawang
            </div>
          </div>
        </div>
        <a
          href="/index-kepuasan/ikm-sem2-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ background: "#064E5C" }}
        >
          <FileText size={15} />
          Unduh laporan terbaru
        </a>
      </section>
    </div>
  );
};

export default IndexKepuasanPage;
