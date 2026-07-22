import defaulImage from "#/assets/blog/image-default.webp";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { Button } from "#components/ui/button.tsx";
import { Link } from "react-router-dom";
import { cn } from "../../libs/utils";
import { artikelItems, kategoryArtikelItems } from "../../data/mockData";

const BlogPage = () => {
  const featured = artikelItems.find((item) => item.featured);
  const articles = artikelItems.filter((item) => !item.featured);

  const kategoriLists = [...new Set(kategoryArtikelItems.map((k) => k.name))];

  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      {/* Header */}
      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Blog & <span className="text-cyan-300">Artikel</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Kabupaten Karawang - Informasi kesehatan, edukasi medis, serta
            berbagai tips hidup sehat.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <div className="mb-10 overflow-hidden rounded-3xl border bg-card shadow-sm cursor-pointer group transition-colors mt-6">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-16/10 bg-muted">
              <img
                src={featured.image || defaulImage}
                alt={featured.judul}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="mb-4 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {featured.kategori}
                </span>
              </div>

              <p className="text-sm text-primary font-medium">
                {featured.author}
              </p>
              <h3 className="mt-2 text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                {featured.judul}
              </h3>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>

              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                <span>{featured.tanggal}</span>
                <Button
                  variant="link"
                  className="cursor-pointer group-hover:underline transition-all"
                >
                  Baca Artikel
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border bg-card p-3">
            <h3 className="mb-4 font-semibold text-foreground">Kategori</h3>

            <div className="space-y-2">
              {["Semua", ...kategoriLists].map((item) => (
                <button
                  key={item}
                  className={cn(
                    "flex w-full items-center rounded-lg px-2 py-2 text-left text-[13px] transition-colors hover:cursor-pointer hover:font-medium hover:text-primary hover:bg-primary/10 hover:border-l-4 hover:border-l-primary",
                    item === "Semua" &&
                      "text-primary bg-primary/10 border-l-4 border-primary",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-4">
            <h3 className="mb-4 font-semibold text-foreground">
              Artikel Terbaru
            </h3>

            <div className="space-y-4">
              {artikelItems.slice(0, 3).map((item) => (
                <div key={item.slug} className="group cursor-pointer">
                  <p className="line-clamp-2 text-sm font-medium transition-colors group-hover:text-primary">
                    {item.judul}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.tanggal}
                    </p>
                    <Link to={"/#"}>
                      <ArrowRight
                        size={13}
                        className="group-hover:text-primary transition-colors"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main>
          {/* Search */}
          <div className="relative mb-3.5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((item) => (
              <article
                key={item.slug}
                className="group cursor-pointer overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={item.image || defaulImage}
                    alt={item.judul}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    {item.kategori}
                  </span>

                  <h3 className="mt-3 line-clamp-2 font-semibold group-hover:text-primary">
                    {item.judul}
                  </h3>

                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.tanggal}</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:text-primary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
