"use client"

import { Megaphone, Clock, ArrowRight } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { ANNOUNCEMENTS, BLOG_POSTS } from "#/libs/hospital-data.ts"
import { Button } from "#/components/ui/button.tsx"

export function NewsBlog() {
  return (
    <section id="news" className="scroll-mt-24 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeading
          eyebrow="Berita & Pengumuman"
          title="Pengumuman Terbaru & Artikel Kesehatan"
          description="Dapatkan informasi resmi rumah sakit serta edukasi kesehatan terpercaya yang ditinjau langsung oleh dokter."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          
          {/* Pengumuman Penting */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Megaphone className="h-5 w-5 text-destructive" aria-hidden="true" />
              <span>Pengumuman Penting</span>
            </h3>

            <ul className="mt-4 flex-1 space-y-3">
              {ANNOUNCEMENTS.map((a) => (
                <li key={a.title}>
                  <a
                    href="#news"
                    className="group block rounded-xl border border-border/70 p-3.5 transition-all duration-200 hover:border-primary/40 hover:bg-accent/50"
                  >
                    <span className="inline-block rounded-md bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                      {a.tag}
                    </span>
                    <p className="mt-1.5 text-xs font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-sm">
                      {a.title}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{a.date}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Feed Blog & Artikel */}
          <div className="flex flex-col justify-between lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md"
                >
                  {/* Kontainer Gambar Proporsional */}
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-bold text-primary shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Isi Artikel */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h4 className="line-clamp-2 font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-sm">
                        {post.title}
                      </h4>
                      <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/50 pt-2.5">
                      <p className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <span>Estimasi Baca: {post.readTime}</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Tombol Lihat Semua */}
            <div className="mt-6 flex justify-start sm:justify-end">
              <Button asChild variant="outline" className="rounded-xl font-semibold">
                <a href="#news" className="flex items-center gap-2">
                  <span>Baca Semua Artikel</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}