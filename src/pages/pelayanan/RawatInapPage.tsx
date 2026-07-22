import { Phone } from "lucide-react";
import { rawatInapItems } from "../../data/mockData";

const RawatInapPage = () => {
  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}

      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 280,
            height: 280,
            right: -60,
            top: -80,
            background: "rgba(255,255,255,.06)",
          }}
        />
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 140,
            height: 140,
            right: 230,
            bottom: -55,
            background: "rgba(255,255,255,.04)",
          }}
        /> 
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Kamar Rawat <span className="text-cyan-300">Inap</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Kabupaten Karawang — pilih kelas sesuai kebutuhan dan
            ketersediaan
          </p>
        </div>
      </section>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
        {rawatInapItems.map((item) => (
          <div
            key={item.kelas}
            className="bg-background border border-border rounded-xl overflow-hidden hover:border-border/80 transition-all"
          >
            {/* Foto */}
            <img
              src={item.foto}
              alt={item.nama}
              className="w-full h-52 object-cover"
              loading="lazy"
              decoding="async"
              width={800}
              height={500}
            />

            <div className="p-4">
              {/* Badge + Judul + Kapasitas */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: item.badgeColor.bg,
                      color: item.badgeColor.text,
                    }}
                  >
                    {item.kelas}
                  </span>
                  <h3 className="text-[15px] font-medium text-foreground mt-1.5">
                    {item.nama}
                  </h3>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-[11px] text-muted-foreground">Kapasitas</p>
                  <p className="text-lg font-medium text-foreground leading-tight">
                    {item.kapasitas}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      tempat tidur
                    </span>
                  </p>
                </div>
              </div>

              <div className="h-px bg-border mb-3" />

              {/* Fasilitas */}
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Fasilitas kamar
              </p>
              <div className="grid grid-cols-2 gap-x-2">
                {item.fasilitas.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 py-1">
                    <i
                      className={`ti ti-${f.icon}`}
                      aria-hidden="true"
                      style={{
                        fontSize: 15,
                        color: item.fasilitasColor,
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-4 flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
        <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
        <p className="text-xs text-muted-foreground">
          Ketersediaan kamar dapat berubah sewaktu-waktu. Untuk informasi lebih
          lanjut hubungi{" "}
          <span className="text-foreground font-medium">(0267) 640444</span>
        </p>
      </div>
    </div>
  );
};

export default RawatInapPage;
