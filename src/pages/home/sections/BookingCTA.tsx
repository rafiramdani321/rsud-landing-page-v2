import { CalendarCheck, Phone } from "lucide-react"
import { HOSPITAL } from "#/libs/hospital-data.ts"
import { Button } from "#/components/ui/button.tsx"

export function BookingCta() {
  return (
    <section id="book" className="scroll-mt-24 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-secondary px-6 py-12 text-center text-secondary-foreground shadow-xl md:px-12 md:py-16">
        
        {/* Judul Utama */}
        <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Siap Buat Janji Temu Dokter?
        </h2>

        {/* Deskripsi */}
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-secondary-foreground/90 sm:text-base">
          Jadwalkan konsultasi dengan dokter spesialis kami hanya dalam beberapa langkah, atau hubungi kami langsung—tim medis kami siap membantu Anda 24 jam.
        </p>

        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button 
            asChild 
            size="lg" 
            className="rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            <a href="#book" className="flex items-center gap-2">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              <span>Buat Janji Temu</span>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-secondary-foreground/30 bg-transparent px-6 font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
          >
            <a href={HOSPITAL.emergencyPhoneHref} className="flex items-center gap-2">
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Hubungi {HOSPITAL.emergencyPhone}</span>
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}