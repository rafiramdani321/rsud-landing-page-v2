import { useState, useMemo } from "react";
import { cn } from "../../libs/utils";
import { Calendar, Clock, Search } from "lucide-react";
import { Button } from "#components/ui/button.tsx";
import { dokterItems } from "../../data/mockData";

const avatarColors = [
  { bg: "#E1F5EE", text: "#085041" },
  { bg: "#E6F1FB", text: "#0C447C" },
  { bg: "#EEEDFE", text: "#3C3489" },
  { bg: "#FAEEDA", text: "#633806" },
  { bg: "#FBEAF0", text: "#72243E" },
  { bg: "#EAF3DE", text: "#27500A" },
];

const spesialisColors: Record<string, { bg: string; text: string }> = {
  Kardiologi: { bg: "#FCEBEB", text: "#A32D2D" },
  Anak: { bg: "#E6F1FB", text: "#0C447C" },
  "Penyakit Dalam": { bg: "#EEEDFE", text: "#3C3489" },
  Kebidanan: { bg: "#FBEAF0", text: "#72243E" },
  "Bedah Umum": { bg: "#FAEEDA", text: "#633806" },
};

function initials(name: string) {
  return name
    .replace("dr. ", "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}

const PER_PAGE = 3;

const Dokter = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [page, setPage] = useState(1);

  const spesialisList = [...new Set(dokterItems.map((d) => d.spesialis))];

  const filtered = useMemo(() => {
    return dokterItems.filter((d) => {
      const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "Semua" || d.spesialis === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const avgRating = (
    dokterItems.reduce((s, d) => s + d.rating, 0) / dokterItems.length
  ).toFixed(1);

  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}
      <section className="relative rounded-3xl bg-primary overflow-hidden p-10 md:p-14">
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
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-secondary">
              Daftar dokter <span className="text-cyan-300">spesialis</span>
            </h2>
            <p className="text-sm text-secondary/60 mt-0.5">
              RSUD Kabupaten Karawang
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-muted rounded-lg px-2 py-2 text-center border border-border">
              <p className="text-[11px] text-foreground mb-0.5">
                Total Dokter
              </p>
              <p className="text-lg font-semibold text-foreground">
                {dokterItems.length}
              </p>
            </div>
            <div className="bg-muted rounded-lg px-4 py-2 text-center border border-border">
              <p className="text-[11px] text-foreground mb-0.5">
                Rata-rata rating
              </p>
              <p className="text-lg font-semibold text-amber-700">
                {avgRating} ★
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className="relative mb-3 m-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari berdasarkan nama dokter atau spesialis..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap mb-5">
        {["Semua", ...spesialisList].map((s) => (
          <Button
            variant="secondary"
            key={s}
            onClick={() => {
              setFilter(s);
              setPage(1);
            }}
            className={cn(
              filter === s && "bg-primary text-secondary border-primary/40",
            )}
          >
            {s}
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Dokter
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Spesialis
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                Jadwal
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                Pengalaman
              </th>
              <th className="text-center px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginated.map((d) => {
              const realIndex = dokterItems.indexOf(d);
              const c = avatarColors[realIndex % avatarColors.length];
              const sc = spesialisColors[d.spesialis] ?? {
                bg: "#E1F5EE",
                text: "#0F6E56",
              };
              return (
                <tr
                  key={d.name}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium shrink-0"
                        style={{ background: c.bg, color: c.text }}
                      >
                        {initials(d.name)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {d.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {d.spesialis}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: sc.bg, color: sc.text }}
                    >
                      {d.spesialis}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3 shrink-0" />
                      {d.jadwal}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3 shrink-0" />
                      {d.pengalaman}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <StarRating rating={d.rating} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            Tidak ada dokter yang sesuai
          </div>
        )}
      </div>

      {/* Footer: count + pagination */}
      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
        {filtered.length > 0 && (
          <p className="text-xs text-muted-foreground">
            Menampilkan {(page - 1) * PER_PAGE + 1}-
            {Math.min(page * PER_PAGE, filtered.length)} dari {filtered.length}{" "}
            dokter
          </p>
        )}
        {totalPages > 1 && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  "w-8 h-8 rounded-lg border text-xs font-medium transition-colors",
                  p === page
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:bg-muted",
                )}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dokter;
