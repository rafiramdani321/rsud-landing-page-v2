import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const layananLinks = [
  { label: "Pendaftaran Online", href: "/pendaftaran" },
  { label: "Jadwal Dokter", href: "/jadwal-dokter" },
  { label: "Rawat Inap", href: "/rawat-inap" },
  { label: "IGD 24 Jam", href: "/igd" },
  { label: "Laboratorium", href: "/laboratorium" },
  { label: "Radiologi", href: "/radiologi" },
];

const infoLinks = [
  { label: "Profil RS", href: "/profil" },
  { label: "Visi & Misi", href: "/visi-misi" },
  { label: "Berita & Artikel", href: "/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "FAQ", href: "/faq" },
  { label: "Karir", href: "/karir" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaXTwitter, href: "#", label: "Twitter/X" },
];

const contactItems = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Galuh Mas Raya, Karawang Barat, Jawa Barat 41361",
  },
  { icon: Phone, label: "Telepon", value: "(0267) 640444, 640555" },
  { icon: Mail, label: "Email", value: "info@rsudkarawang.go.id" },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin – Jumat: 07.00 – 16.00 | IGD: 24 Jam",
  },
];

const FooterLinkCol = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <p className="text-[11px] sm:text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-4">
      {title}
    </p>
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="flex items-center gap-2 text-[12px] sm:text-[13px] text-secondary/60 hover:text-cyan-300 transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-secondary/20 shrink-0" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary">
      {/* Top emergency bar */}
      <div className="bg-[#0d6b7c] border-b border-white/10 px-4 sm:px-16 lg:px-48 py-3 flex items-center justify-between flex-wrap gap-2">
        <p className="text-[11px] sm:text-xs text-secondary/60">
          Melayani{" "}
          <span className="text-cyan-300 font-semibold">
            Masyarakat Kabupaten Karawang
          </span>
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
          <span className="text-[11px] sm:text-xs font-semibold">IGD 24 Jam:</span>
          <span className="text-xs sm:text-sm font-extrabold text-cyan-300">
            (0267) 640444
          </span>
        </div>
      </div>

      {/* Main grid */}
      <div className="px-4 sm:px-16 lg:px-48 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
              <span className="text-cyan-300 font-extrabold text-xs sm:text-sm">RS</span>
            </div>
            <div className="flex flex-col leading-none">
              <strong className="text-sm sm:text-base font-extrabold tracking-wide">
                RSUD KARAWANG
              </strong>
              <span className="text-[9px] sm:text-[10px] text-secondary/40 tracking-widest uppercase">
                Rumah Sakit Umum Daerah
              </span>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-secondary/55 leading-relaxed mb-5 max-w-xs">
            Memberikan layanan kesehatan terbaik, profesional, dan terpercaya
            untuk masyarakat Kabupaten Karawang.
          </p>

          {/* Social links — fix: tag <a> yang hilang */}
          <div className="flex gap-2">
            {socialLinks.map(({ icon: SocialIcon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-secondary/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SocialIcon className="w-4 h-4 text-secondary/60" />
              </a>
            ))}
          </div>
        </div>

        {/* Layanan */}
        <FooterLinkCol title="Layanan" links={layananLinks} />

        {/* Informasi */}
        <FooterLinkCol title="Informasi" links={infoLinks} />

        {/* Kontak */}
        <div>
          <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-4">
            Hubungi Kami
          </p>
          <div className="flex flex-col gap-3.5">
            {contactItems.map(({ icon: ContactIcon, label, value }) => (
              <div key={label} className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ContactIcon className="w-3.5 h-3.5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[10px] text-secondary/40 uppercase tracking-wide font-semibold mb-0.5">
                    {label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-secondary/75 leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 sm:mx-16 lg:mx-48 h-px bg-secondary/10" />

      {/* Bottom bar */}
      <div className="px-4 sm:px-16 lg:px-48 py-4 flex items-center justify-between flex-wrap gap-3">
        <p className="text-[11px] text-secondary/35">
          © 2026 <span className="text-secondary/50">RSUD Karawang</span>. Hak
          cipta dilindungi.
        </p>

        <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/10 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[10px] font-semibold text-secondary/55">
            Terakreditasi
          </span>
        </div>

        <div className="flex gap-4">
          {["Kebijakan Privasi", "Syarat & Ketentuan", "Sitemap"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-secondary/35 hover:text-secondary/60 transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
