import { Clock, MapPin } from "lucide-react";
import { layananPenunjangItems } from "../../data/mockData";

const tagColors = {
  urgent: { bg: "#FCEBEB", text: "#791F1F" },
  default: { bg: "#E1F5EE", text: "#0F6E56" },
};

const LayananPenunjangPage = () => {
  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Layanan <span className="text-cyan-300">Penunjang</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Kabupate Karawang - Fasilitas pendukung layanan medis
          </p>
        </div>
      </section>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-7">
        {layananPenunjangItems.map((item) => {
          const Icon = item.icon;
          const tc = tagColors[item.tagVariant];

          return (
            <div
              key={item.name}
              className="bg-background border border-border rounded-xl p-4 hover:border-border/80 shadow transition-colors"
            >
              {/* Icon + Nama */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: tc.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: tc.text }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-medium text-foreground">
                      {item.name}
                    </h3>
                    {item.tagVariant === "urgent" && (
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: tc.bg, color: tc.text }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="h-px bg-border mb-3" />

              {/* Jam & Lokasi */}
              <div className="flex flex-col gap-1.5">
                {item.jam && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.jam}</span>
                  </div>
                )}
                {item.jamExtra && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pl-5">
                    <span className="italic">{item.jamExtra}</span>
                  </div>
                )}
                {item.lokasi && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.lokasi}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayananPenunjangPage;
