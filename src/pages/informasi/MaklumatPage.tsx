import React from "react";
import { FileText, ShieldCheck, Hospital } from "lucide-react";
import type { CommitmentItem, ServiceStandardItem } from "../../types";
import {
  ChannelsItems,
  CommitmentsItems,
  StandarsItems,
} from "../../data/mockData";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mb-3">
      {children}
    </p>
  );
}

function CommitmentCard({ item }: { item: CommitmentItem }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-5 overflow-hidden">
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-0.75 h-full rounded-l-2xl"
        style={{ background: item.accentColor }}
      />
      <div className="pl-1">
        <div className="mb-3" style={{ color: item.accentColor }}>
          {item.icon}
        </div>
        <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function StandardRow({
  item,
  index,
}: {
  item: ServiceStandardItem;
  index: number;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
      <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
        {index + 1}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground mb-0.5">
          {item.title}
        </div>
        <div className="text-sm font-semibold text-teal-700">{item.value}</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">
          {item.note}
        </div>
      </div>
    </div>
  );
}

const MaklumatPage = () => {
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
            width: 320,
            height: 320,
            right: -90,
            top: -110,
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 160,
            height: 160,
            right: 220,
            bottom: -60,
            background: "rgba(255,255,255,0.04)",
          }}
        />

        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Hospital size={22} />
          </div>
          <div>
            <div className="text-sm font-medium text-white/90 tracking-wide">
              Rumah Sakit Umum Daerah Karawang
            </div>
            <div className="text-[11px] text-white/50 mt-0.5">
              Pemerintah Kabupaten Karawang
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/45 font-medium mb-3">
              Maklumat Pelayanan
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
              Kami berkomitmen untuk memberikan{" "}
              <span className="text-cyan-300">pelayanan terbaik</span> kepada
              masyarakat
            </h1>
            <p className="text-sm text-white/65 leading-relaxed max-w-lg">
              Dengan segenap kemampuan dan sumber daya yang kami miliki, RSUD
              Karawang berjanji memberikan pelayanan kesehatan yang profesional,
              ramah, dan berkeadilan.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center w-28 h-28 rounded-full border border-white/15 text-center gap-1 shrink-0">
            <ShieldCheck size={32} className="text-white/45" />
            <span className="text-[10px] text-white/40 leading-tight tracking-wide uppercase">
              Maklumat
              <br />
              Resmi
              <br />
              2026
            </span>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section>
        <SectionLabel>Komitmen kami</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CommitmentsItems.map((item) => (
            <CommitmentCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Standard Layanan */}
      <section>
        <SectionLabel>Standar layanan</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-3">
          {StandarsItems.map((item, i) => (
            <StandardRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Pengaduan */}
      <section className="rounded-3xl border border-border bg-card p-6 md:p-8">
        <SectionLabel>Saluran pengaduan</SectionLabel>
        <h2 className="text-xl font-bold text-foreground mb-6">
          Sampaikan masukan dan keluhan Anda
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ChannelsItems.map((ch) => (
            <div
              key={ch.label}
              className="rounded-2xl bg-accent/50 border border-border p-4 text-center"
            >
              <div className={`flex justify-center mb-2 ${ch.iconColor}`}>
                {ch.icon}
              </div>
              <div className="text-xs font-semibold text-foreground mb-1">
                {ch.label}
              </div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">
                {ch.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
          <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-xs font-semibold text-teal-700 shrink-0">
            DR
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">
              dr. [Nama Direktur]
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              NIP. xxxx xxxx xxxx xxxx
            </div>
            <div className="text-xs font-medium text-teal-700 mt-0.5">
              Direktur RSUD Karawang
            </div>
          </div>
        </div>

        {/* PDF */}
        <a
          href="/info/maklumat/maklumat-pelayanan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ background: "#064E5C" }}
        >
          <FileText size={16} />
          Unduh PDF resmi
        </a>
      </section>
    </div>
  );
};

export default MaklumatPage;
