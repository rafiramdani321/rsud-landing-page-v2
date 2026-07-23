import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Mail,
  MessageCircle,
  Phone,
  Clock as ClockIcon,
  BadgeCheck,
  HeartHandshake,
  Ban,
  CircleDollarSign,
  Eye,
  Info,
  CheckCircle2,
  Headphones,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { HOSPITAL } from "../../libs/hospital-data";
import { ChannelsItems, CommitmentsItems, StandarsItems } from "../../data/mockData";
import { Button } from "#components/ui/button.tsx";

// Helper Map untuk mengubah string icon nama menjadi komponen Lucide Icon
const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Mail,
  MessageCircle,
  Phone,
  ClockIcon,
  BadgeCheck,
  HeartHandshake,
  Ban,
  CircleDollarSign,
  Eye,
};

export default function MaklumatPage() {
  const renderIcon = (iconName: string, className?: string) => {
    const IconComponent = ICON_MAP[iconName] || Info;
    return <IconComponent className={className || "h-6 w-6"} />;
  };

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
                Maklumat Pelayanan
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Standar Mutu & Integritas Publik</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Maklumat Pelayanan
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              "Dengan ini, kami pimpinan dan seluruh staf {HOSPITAL.name} menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan siap menerima sanksi apabila terjadi pelanggaran."
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. COMMITMENT SECTION                                         */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Komitmen Pelayanan Kami
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              6 pilar komitmen utama {HOSPITAL.name} dalam memberikan layanan terbaik untuk setiap pasien.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CommitmentsItems.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  {/* Icon Header */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.accentColor}15`,
                      color: item.accentColor,
                    }}
                  >
                    {renderIcon(item.icon, "h-6 w-6")}
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-foreground capitalize">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border/40 pt-3 text-[11px] font-semibold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Jaminan Standar Mutu</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SERVICE STANDARDS (STANDAR WAKTU)                          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 bg-muted/20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
              <Timer className="h-3.5 w-3.5" />
              <span>Indikator Mutu Waktu</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Standar Waktu Pelayanan
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Batas waktu maksimal respon dan penanganan layanan untuk kepuasan dan keselamatan pasien.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {StandarsItems.map((std) => (
              <div
                key={std.title}
                className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-extrabold text-foreground capitalize">
                      {std.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {std.note}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-2xl bg-primary/10 px-3.5 py-1.5 text-sm font-black text-primary">
                    {std.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. COMPLAINT CHANNELS (SALURAN PENGADUAN)                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary mb-3">
              <Headphones className="h-3.5 w-3.5" />
              <span>Layanan Pengaduan Pasien</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Saluran Pengaduan Resmi
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Apabila Anda menemukan pelayanan yang tidak sesuai standar, hubungi kami melalui saluran resmi berikut:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ChannelsItems.map((channel) => (
              <div
                key={channel.label}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/60 ${channel.iconColor}`}>
                    {renderIcon(channel.icon, "h-6 w-6")}
                  </div>

                  <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {channel.label}
                  </h3>

                  <p className="mt-1 text-sm font-extrabold text-foreground">
                    {channel.value}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-semibold text-primary">
                  Layanan Resmi {HOSPITAL.name}
                </div>
              </div>
            ))}
          </div>

          {/* Banner Layanan Pengaduan */}
          <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Kritik & Saran Anda Sangat Berharga</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground sm:text-xl">
                  Bantu Kami Meningkatkan Quality OF Care
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Setiap masukan dan pengaduan akan diproses secara objektif dan rahasia oleh Unit Pengaduan Masyarakat.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl font-bold shadow-sm">
                  <Link to="/kontak">Kirim Saran & Pengaduan</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}