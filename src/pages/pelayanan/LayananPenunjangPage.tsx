import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  MapPin,
  Sparkles,
  PhoneCall,
  Search,
  X,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import type { LayananPenunjangItem } from "../../types";
import { layananPenunjangItems } from "../../data/mockData";
import { Button } from "#components/ui/button.tsx";
import { HOSPITAL } from "../../libs/hospital-data";

const fieldClass =
  "h-11 w-full rounded-xl border border-border/80 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function LayananPenunjangPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<LayananPenunjangItem | null>(null);

  // Filter Layanan Penunjang berdasarkan query
  const filteredItems = layananPenunjangItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.lokasi?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-b from-primary/5 via-background to-background py-14 lg:py-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-semibold text-foreground">
                Layanan Penunjang
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Fasilitas Medis Modern</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Fasilitas & Layanan Penunjang Medis
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Dilengkapi dengan teknologi kesehatan mutakhir dan tenaga ahli profesional untuk memberikan hasil diagnosis presisi serta perawatan komprehensif bagi Anda.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari fasilitas (misal: Laboratorium, Radiologi)..."
                className={`${fieldClass} pl-10 shadow-sm`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. GRID LAYANAN PENUNJANG                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {filteredItems.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                Layanan Tidak Ditemukan
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tidak ada fasilitas penunjang yang cocok dengan kata kunci "{searchQuery}".
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-xl text-xs font-semibold"
                onClick={() => setSearchQuery("")}
              >
                Reset Pencarian
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => {
                const IconComponent = item.icon as LucideIcon;
                const isUrgent = item.tagVariant === "urgent";

                return (
                  <div
                    key={item.name}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                      item.featured
                        ? "border-amber-500/40 bg-card shadow-amber-500/5 ring-1 ring-amber-500/20"
                        : "border-border/80 bg-card shadow-sm hover:border-primary/40 hover:shadow-primary/5"
                    } p-6`}
                  >
                    <div>
                      {/* Badge Tag & Icon */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                            isUrgent
                              ? "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                            isUrgent
                              ? "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {isUrgent && (
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
                            </span>
                          )}
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="mt-5 text-lg font-extrabold text-foreground transition-colors group-hover:text-primary">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Detail Info List */}
                      <div className="mt-6 space-y-2.5 rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs">
                        <div className="flex items-start gap-2 text-foreground">
                          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <div>
                            <span className="font-bold">{item.jam}</span>
                            {item.jamExtra && (
                              <p className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                                {item.jamExtra}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary" />
                          <span className="font-medium">{item.lokasi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-6 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedItem(item)}
                        className="w-full rounded-xl text-xs font-semibold group-hover:border-primary/40"
                      >
                        Lihat Informasi Lengkap
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* 3. EMERGENCY CONTACT BANNER                                   */}
          {/* ------------------------------------------------------------- */}
          <div className="mt-14 rounded-3xl border border-border/80 bg-linear-to-r from-card via-card to-primary/5 p-6 shadow-lg sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600">
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call Center Darurat</span>
                </div>
                <h3 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl">
                  Membutuhkan Bantuan Gawat Darurat Segera?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Unit Gawat Darurat (IGD) dan Ambulans {HOSPITAL.name} siap melayani 24 jam non-stop.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-xl bg-rose-600 text-white hover:bg-rose-700 font-bold shadow-md shadow-rose-600/20"
                >
                  <a href={`tel:${HOSPITAL.phone}`}>
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Hubungi ({HOSPITAL.phone})
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. MODAL DETAIL ITEM                                          */}
      {/* ------------------------------------------------------------- */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Title & Icon */}
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                  selectedItem.tagVariant === "urgent"
                    ? "bg-rose-500/10 text-rose-600"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {selectedItem.icon && <selectedItem.icon className="h-7 w-7" />}
              </div>
              <div>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                  Layanan Penunjang
                </span>
                <h3 className="text-xl font-extrabold text-foreground">
                  {selectedItem.name}
                </h3>
              </div>
            </div>

            {/* Description & Specs */}
            <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-xs">
              <p className="leading-relaxed text-muted-foreground">
                {selectedItem.desc}
              </p>

              <div className="space-y-2 rounded-2xl border border-border/60 bg-muted/30 p-4">
                <div className="flex items-center justify-between border-b border-border/40 pb-2">
                  <span className="font-semibold text-muted-foreground">Jam Operasional</span>
                  <span className="font-bold text-foreground">{selectedItem.jam}</span>
                </div>
                {selectedItem.jamExtra && (
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="font-semibold text-muted-foreground">Layanan Tambahan</span>
                    <span className="font-bold text-amber-600">{selectedItem.jamExtra}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-semibold text-muted-foreground">Lokasi Gedung</span>
                  <span className="font-bold text-foreground">{selectedItem.lokasi}</span>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="space-y-1.5 pt-2">
                <p className="font-bold text-foreground">Keunggulan Fasilitas:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Ditangani oleh tenaga medis terlatih & profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Hasil pemeriksaan cepat, akurat, dan terintegrasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Terhubung dengan sistem rekam medis elektronik</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="w-full rounded-xl font-semibold"
                onClick={() => setSelectedItem(null)}
              >
                Tutup Informasi
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}