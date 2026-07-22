import { Button } from "#components/ui/button.tsx";
import { Calendar, Clock, Notebook, Pin, Search } from "lucide-react";
import type { Day, Poli } from "../../types";
import { cn } from "../../libs/utils";
import React from "react";
import { jadwalPelayananItems, poliItems } from "../../data/mockData";

const PER_PAGE = 4;

const JadwalPelayananPage = () => {
  const [search, setSearch] = React.useState("");
  const [displayContent, setDisplayContent] = React.useState<
    "per-hari" | "per-poli"
  >("per-hari");
  const [filter, setFilter] = React.useState<Day | Poli | "Semua">("Semua");
  const [page, setPage] = React.useState(1);

  const poliList = [...new Set(poliItems.map((p) => p.name))];
  const listDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"] as const;

  const handleChangeDisplayContent = (e: "per-hari" | "per-poli") => {
    setFilter("Semua");
    setSearch("");
    setPage(1);
    setDisplayContent(e);
  };

  const filtered = React.useMemo(() => {
    return jadwalPelayananItems.filter((j) => {
      const matchSearch =
        j.poli.toLowerCase().includes(search.toLowerCase()) ||
        j.dokter.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === "Semua" || j.hari === filter || j.poli === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}
      <div className="relative rounded-3xl bg-primary overflow-hidden p-10 md:p-14">
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
              Daftar Jadwal <span className="text-cyan-300">Pelayanan</span>
            </h2>
            <p className="text-sm text-secondary/60 mt-0.5">
              RSUD Kabupaten Karawang - Senin s/d Jumat
            </p>
          </div>
          <div className="border border-border rounded-lg p-1 bg-secondary">
            <div className="flex gap-x-1.5">
              <div>
                <Button
                  variant="secondary"
                  onClick={() => handleChangeDisplayContent("per-hari")}
                  className={cn(
                    "rounded-lg text-sm p-4 border border-border text-primary",
                    displayContent === "per-hari" && "bg-primary text-secondary",
                  )}
                >
                  <Calendar />
                  Per Hari
                </Button>
              </div>
              <div>
                <Button
                  variant="secondary"
                  onClick={() => handleChangeDisplayContent("per-poli")}
                  className={cn(
                    "rounded-lg text-sm p-4 border border-border text-primary",
                    displayContent === "per-poli" && "bg-primary text-secondary",
                  )}
                >
                  <Notebook />
                  Per Poli
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-3 mt-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari berdasarkan poli atau nama dokter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap mb-5">
        {displayContent === "per-hari" &&
          ["Semua", ...listDay].map((d) => (
            <Button
              variant="secondary"
              key={d}
              onClick={() => {
                setFilter(d as Day);
                setPage(1);
              }}
              className={cn(
                filter === d && "bg-primary text-secondary border-primary/40",
              )}
            >
              {d}
            </Button>
          ))}

        {displayContent === "per-poli" &&
          ["Semua", ...poliList].map((p) => (
            <Button
              variant="secondary"
              key={p}
              onClick={() => {
                setFilter(p as Poli);
                setPage(1);
              }}
              className={cn(
                filter === p && "bg-primary text-secondary border-primary/40",
              )}
            >
              {p}
            </Button>
          ))}
      </div>

      {displayContent === "per-hari" && (
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Poli
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                  Dokter
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Jam Pelayanan
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Lokasi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {paginated.map((j, i) => {
                return (
                  <tr key={i} className="border:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <span className="text-xs font-medium border bg-primary/10 px-2 rounded-full text-primary">
                        {j.poli}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs font-medium">{j.dokter}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Clock className="w-3 h-3 shrink-0 hidden lg:block" />
                        {j.jamPelayanan}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Pin className="w-3 h-3 shrink-0 hidden lg:block" />
                        {j.lokasi}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              Tidak ada jadwal pelayanan yang sesuai
            </div>
          )}
        </div>
      )}

      {displayContent === "per-poli" && (
        <div className="grid grid-cols-4 gap-3">
          {paginated.map((j, i) => {
            return (
              <div
                className="border border-border rounded-lg p-3 shadow"
                key={i}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-primary bg-primary/10 rounded-full px-2 py-0.5 font-medium">
                    {j.poli}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span className="text-[11px] text-muted-foreground tracking-tighter">
                      {j.jamPelayanan}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium tracking-wide text-sm">
                    {j.dokter}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {j.hari}
                  </span>
                  <p className="text-xs text-muted-foreground">{j.lokasi}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer: count + pagination */}
      <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
        {filtered.length > 0 && (
          <p className="text-xs text-muted-foreground">
            Menampilkan {(page - 1) * PER_PAGE + 1}-
            {Math.min(page * PER_PAGE, filtered.length)} dari {filtered.length}{" "}
            Jadwal Pelayanan
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

export default JadwalPelayananPage;
