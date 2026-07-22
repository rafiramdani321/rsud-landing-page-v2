import eye from "#/assets/eye.png";
import tooth from "#/assets/tooth.png";
import carduceus from "#/assets/caduceus-symbol.webp";
import boy from "#/assets/boy.png";
import docterFemale from "#/assets/doctor-female.webp";
import docterMale from "#/assets/doctor-male.webp";
import medical from "#/assets/medical.png";
import rawatInapVVIP from "#/assets/rawatinap-vvip.webp";
import rawatInapKelas1 from "#/assets/rawatinap-kelas1.webp";
import giziBlogImage from "#/assets/blog/gizi.webp";
import jantungBlogImage from "#/assets/blog/jantung.webp";
import joggingBlogImage from "#/assets/blog/jogging.webp";
import neuronBlogImage from "#/assets/blog/neuron.webp";
import anakBlogImage from "#/assets/blog/anak.webp";

import {
  Microscope,
  ScanLine,
  Pill,
  Salad,
  RockingChair,
  BedDouble,
  AlertCircle,
  HeartHandshake,
  Users,
  Sparkles,
  Scale,
  Star,
  Leaf,
  Building2,
  Scissors,
  Ambulance,
  Heart,
  Baby,
  Wind,
  Cpu,
  Radiation,
  FlaskConical,
  Stethoscope,
  RadioTower,
} from "lucide-react";
import type {
  ArchiveItem,
  ArtikelItem,
  BeritaItem,
  CommitmentItem,
  ComplaintChannelItem,
  DasarHukumItem,
  DokterItem,
  FaqItem,
  FasilitasItem,
  HakKewajibanItem,
  JadwalPelayananItem,
  JobItem,
  KategoriArtikelItem,
  LayananPenunjangItem,
  LayananSpesialisItem,
  MitraKamiItem,
  NavGroup,
  NilaiProfileItem,
  PengumumanItem,
  PimpinanProfileItem,
  PoliItem,
  RawatInapItem,
  ServiceStandardItem,
  TimelineProfileItem,
  UnitSectionItem,
  UnsurItem,
} from "../types";

export const navItems: NavGroup[] = [
  {
    label: "Pelayanan Pasien",
    items: [
      { title: "Dokter Spesialis", href: "/pelayanan/dokter" },
      { title: "Jadwal Pelayanan", href: "/pelayanan/jadwal" },
      { title: "Rawat Inap", href: "/pelayanan/rawat-inap" },
      { title: "Layanan Penunjang", href: "/pelayanan/penunjang" },
      { title: "Pendaftaran Online", href: "/pelayanan/pendaftaran" },
      { title: "Hak & Kewajiban Pasien", href: "/pelayanan/hak-kewajiban" },
    ],
  },
  {
    label: "Informasi",
    items: [
      { title: "Berita Terkini", href: "/info?tab=berita" },
      { title: "Pengumuman", href: "/info?tab=pengumuman" },
      { title: "Blog", href: "/info/blog" },
      { title: "Rekrutmen", href: "/info/rekrutmen" },
      { title: "Maklumat Pelayanan", href: "/info/maklumat" },
      {
        title: "Index Kepuasan Masyarakat",
        href: "/info/index-kepuasan",
      },
      { title: "Standar Pelayanan", href: "/info/standar-pelayanan" },
    ],
  },
  {
    label: "Tentang Kami",
    items: [
      { title: "Profile Rumah Sakit", href: "/tentang-kami/profile" },
      { title: "Fasilitas Rumah Sakit", href: "/tentang-kami/fasilitas" },
      { title: "Mitra Kami", href: "/tentang-kami/mitra" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export const layananPenunjangItems: LayananPenunjangItem[] = [
  {
    name: "IGD & Gawat Darurat",
    icon: AlertCircle,
    desc: "Layanan gawat darurat siap 24 jam penuh dengan tenaga medis terlatih dan peralatan lengkap untuk penanganan segera.",
    tag: "24 Jam",
    tagVariant: "urgent",
    featured: true,
    jam: "24 Jam",
    lokasi: "Lantai 1 – Gedung Utama",
  },
  {
    name: "Laboratorium",
    icon: Microscope,
    desc: "Pemeriksaan laboratorium klinik lengkap dengan hasil akurat dan cepat untuk mendukung diagnosis dokter.",
    tag: "Tersedia",
    tagVariant: "default",
    jam: "Senin – Sabtu, 07.00 – 21.00",
    lokasi: "Lantai 1 – Gedung Penunjang",
  },
  {
    name: "Radiologi",
    icon: ScanLine,
    desc: "Rontgen, CT-Scan, dan USG dengan teknologi digital terkini untuk pencitraan medis yang akurat.",
    tag: "Tersedia",
    tagVariant: "default",
    jam: "Senin – Jumat, 07.00 – 17.00",
    jamExtra: "On-call 24 jam untuk kasus darurat",
    lokasi: "Lantai 2 – Gedung Penunjang",
  },
  {
    name: "Farmasi",
    icon: Pill,
    desc: "Apotek rumah sakit dengan ketersediaan obat lengkap dan konsultasi farmasis profesional.",
    tag: "24 Jam",
    tagVariant: "urgent",
    jam: "24 Jam",
    lokasi: "Lantai 1 – Gedung Utama",
  },
  {
    name: "Instalasi Gizi",
    icon: Salad,
    desc: "Layanan gizi klinis dan makanan bergizi sesuai kebutuhan dan kondisi pasien rawat inap.",
    tag: "Rawat Inap",
    tagVariant: "default",
    jam: "Setiap hari, 06.00 – 20.00",
    lokasi: "Lantai 1 – Gedung Penunjang",
  },
  {
    name: "Rehabilitasi Medik",
    icon: RockingChair,
    desc: "Fisioterapi dan terapi okupasi untuk pemulihan fungsi tubuh secara optimal pasca perawatan.",
    tag: "Tersedia",
    tagVariant: "default",
    jam: "Senin – Sabtu, 08.00 – 15.00",
    lokasi: "Lantai 3 – Gedung Rehabilitasi",
  },
  {
    name: "Rawat Inap",
    icon: BedDouble,
    desc: "Kamar rawat inap kelas VVIP, VIP, I, II, dan III dengan fasilitas lengkap dan tenaga perawat terlatih.",
    tag: "Multi Kelas",
    tagVariant: "default",
    jam: "24 Jam",
    lokasi: "Lantai 2 & 3 – Gedung Rawat Inap",
  },
];

export const layananSpesialisItems: LayananSpesialisItem[] = [
  {
    icon: carduceus,
    name: "Gynecologist",
    desc: "women's reproductive health and pregnancy.",
  },
  {
    icon: eye,
    name: "Ophthalmologist",
    desc: "Eye doctoer for vision and eye diseases.",
  },
  {
    icon: carduceus,
    name: "Cadiologist",
    desc: "specialize in heart diseases, blood ciculation.",
  },
  {
    icon: boy,
    name: "Pediatrician",
    desc: "medical care for infants, children, and teens.",
  },
  {
    icon: medical,
    name: "Gastroenterologist",
    desc: "treats stomach, liver, and digestive issues.",
  },
  {
    icon: carduceus,
    name: "Nephrologist",
    desc: "specializes in kidney health.",
  },
  {
    icon: tooth,
    name: "Dendist",
    desc: "medical care for oral health and teeth problems.",
  },
  {
    icon: tooth,
    name: "Dendist",
    desc: "medical care for oral health and teeth problems.",
  },
];

export const dokterItems: DokterItem[] = [
  {
    name: "dr. Budi Santoso, Sp.JP",
    spesialis: "Kardiologi",
    pengalaman: "12 tahun",
    jadwal: "Senin, Rabu, Jumat",
    rating: 4.9,
    foto: docterMale,
  },
  {
    name: "dr. Siti Rahayu, Sp.A",
    spesialis: "Anak",
    pengalaman: "8 tahun",
    jadwal: "Selasa, Kamis",
    rating: 5.0,
    foto: docterFemale,
  },
  {
    name: "dr. Ahmad Fauzi, Sp.PD",
    spesialis: "Penyakit Dalam",
    pengalaman: "15 tahun",
    jadwal: "Senin – Jumat",
    rating: 4.8,
    foto: docterMale,
  },
  {
    name: "dr. Dewi Lestari, Sp.OG",
    spesialis: "Kebidanan",
    pengalaman: "10 tahun",
    jadwal: "Senin, Rabu",
    rating: 4.9,
    foto: docterFemale,
  },
  {
    name: "dr. Rizky Pratama, Sp.B",
    spesialis: "Bedah Umum",
    pengalaman: "9 tahun",
    jadwal: "Selasa, Kamis, Sabtu",
    rating: 4.7,
    foto: docterMale,
  },
];

export const kategoryArtikelItems: KategoriArtikelItem[] = [
  {
    id: "1",
    name: "Kesehatan Jantung",
    slug: "/kesehatan-jantung",
  },
  {
    id: "2",
    name: "Gizi & Nutrisi",
    slug: "/gizi-nutrisi",
  },
  {
    id: "3",
    name: "Diabetes",
    slug: "/diabetes",
  },
  {
    id: "4",
    name: "Gaya Hidup",
    slug: "/gaya-hidup",
  },
  {
    id: "5",
    name: "Kegiatan Rumah Sakit",
    slug: "/kegiatan-rumah-sakit",
  },
  {
    id: "6",
    name: "Kesehatan Anak",
    slug: "/kesehatan-anak",
  },
  {
    id: "7",
    name: "Neurologi",
    slug: "/Neurologi",
  },
];

export const artikelItems: ArtikelItem[] = [
  {
    id: "1",
    slug: "kenali-gejala-awal-penyakit-jantung",
    kategori: "Kesehatan Jantung",
    judul: "Kenali Gejala Awal Penyakit Jantung yang Sering Diabaikan",
    image: jantungBlogImage,
    excerpt:
      "Nyeri dada bukan satu-satunya tanda penyakit jantung. Kenali gejala awal yang sering muncul agar penanganan dapat dilakukan lebih cepat.",
    author: "Tim Edukasi RSUD Karawang",
    tanggal: "10 Juni 2026",
    publishedAt: "2026-06-10",
    views: 1540,
    featured: true,
    status: "published",
  },
  {
    id: "2",
    slug: "pola-makan-sehat-diabetes-tipe-2",
    kategori: "Gizi & Nutrisi",
    judul: "Pola Makan Sehat untuk Penderita Diabetes Tipe 2",
    image: giziBlogImage,
    excerpt:
      "Panduan memilih makanan yang tepat untuk menjaga kadar gula darah tetap stabil dan mendukung kesehatan tubuh.",
    author: "Instalasi Gizi RSUD Karawang",
    tanggal: "5 Juni 2026",
    publishedAt: "2026-06-05",
    views: 890,
    status: "published",
  },
  {
    id: "3",
    slug: "manfaat-olahraga-untuk-kesehatan-mental",
    kategori: "Gaya Hidup",
    judul: "Manfaat Olahraga 30 Menit Sehari bagi Kesehatan Mental",
    image: joggingBlogImage,
    excerpt:
      "Aktivitas fisik rutin dapat membantu mengurangi stres, meningkatkan suasana hati, dan menjaga kualitas tidur.",
    author: "Tim Promosi Kesehatan",
    tanggal: "1 Juni 2026",
    publishedAt: "2026-06-01",
    views: 720,
    status: "published",
  },
  {
    id: "4",
    slug: "jadwal-imunisasi-anak",
    kategori: "Kesehatan Anak",
    judul: "Jadwal Imunisasi Anak yang Wajib Diketahui Orang Tua",
    image: anakBlogImage,
    excerpt:
      "Informasi lengkap mengenai jadwal imunisasi dasar dan lanjutan untuk membantu melindungi anak dari berbagai penyakit.",
    author: "Poli Anak RSUD Karawang",
    tanggal: "28 Mei 2026",
    publishedAt: "2026-05-28",
    views: 1120,
    status: "published",
  },
  {
    id: "5",
    slug: "cegah-stroke-sejak-dini",
    kategori: "Neurologi",
    judul: "Kenali Faktor Risiko Stroke dan Cara Pencegahannya",
    image: neuronBlogImage,
    excerpt:
      "Stroke dapat dicegah melalui pengendalian tekanan darah, pola makan sehat, dan aktivitas fisik teratur.",
    author: "Poli Saraf RSUD Karawang",
    tanggal: "22 Mei 2026",
    publishedAt: "2026-05-22",
    views: 1340,
    status: "published",
  },
];

export const beritaItems: BeritaItem[] = [
  {
    id: 1,
    badge: "Terkini",
    badgeVariant: "hot",
    judul: "RSUD Karawang Buka Poli Spesialis Baru: Neurologi dan Onkologi",
    excerpt:
      "RSUD Kabupaten Karawang resmi membuka dua poli spesialis baru untuk meningkatkan layanan kesehatan masyarakat.",
    tanggal: "12 Juni 2026",
    sumber: "Pengumuman Resmi",
  },
  {
    id: 2,
    badge: "Baru",
    badgeVariant: "new",
    judul: "Layanan Telemedicine RSUD Karawang Kini Tersedia via Aplikasi",
    excerpt:
      "Pasien kini dapat berkonsultasi dengan dokter spesialis dari rumah melalui aplikasi mobile RSUD Karawang.",
    tanggal: "8 Juni 2026",
    sumber: "Inovasi Layanan",
  },
  {
    id: 3,
    badge: "Info",
    badgeVariant: "info",
    judul: "Peringatan HUT RSUD Karawang ke-47: Serangkaian Kegiatan Sosial",
    excerpt:
      "Dalam rangka HUT ke-47, RSUD Karawang menggelar berbagai kegiatan sosial termasuk pemeriksaan kesehatan gratis.",
    tanggal: "28 Mei 2026",
    sumber: "Kegiatan RS",
  },
  {
    id: 4,
    badge: "Baru",
    badgeVariant: "new",
    judul: "Rekrutmen Tenaga Medis RSUD Karawang Tahun 2026 Dibuka",
    excerpt:
      "RSUD Karawang membuka lowongan untuk posisi dokter spesialis, perawat, dan tenaga administrasi.",
    tanggal: "20 Mei 2026",
    sumber: "SDM & Karir",
  },
];

export const pengumumanItems: PengumumanItem[] = [
  {
    id: 1,
    badge: "Penting",
    badgeVariant: "warning",
    judul: "Perubahan Jadwal Poli Umum Selama Bulan Juni 2026",
    excerpt:
      "Terdapat perubahan jadwal pelayanan poli umum selama bulan Juni 2026 sehubungan dengan kegiatan pelatihan.",
    tanggal: "3 Juni 2026",
    sumber: "Jadwal & Operasional",
    berlakuHingga: "30 Juni 2026",
    penting: true,
  },
  {
    id: 2,
    badge: "Penting",
    badgeVariant: "warning",
    judul: "Jadwal Libur Nasional dan Operasional RS Hari Raya Idul Adha",
    excerpt:
      "Informasi mengenai jam operasional dan layanan yang tersedia selama libur Hari Raya Idul Adha 2026.",
    tanggal: "1 Juni 2026",
    sumber: "Operasional",
    berlakuHingga: "20 Juni 2026",
    penting: true,
  },
  {
    id: 3,
    badge: "Info",
    badgeVariant: "info",
    judul: "Pemeliharaan Sistem Informasi RS Dijadwalkan 15 Juni 2026",
    excerpt:
      "Sistem informasi rumah sakit akan mengalami pemeliharaan rutin, beberapa layanan online mungkin terganggu.",
    tanggal: "10 Juni 2026",
    sumber: "IT & Sistem",
    berlakuHingga: "15 Juni 2026",
  },
  {
    id: 4,
    badge: "Info",
    badgeVariant: "info",
    judul: "Prosedur Baru Pendaftaran Pasien BPJS Mulai Juli 2026",
    excerpt:
      "Terdapat perubahan prosedur pendaftaran pasien BPJS Kesehatan yang berlaku mulai 1 Juli 2026.",
    tanggal: "25 Mei 2026",
    sumber: "Administrasi",
    berlakuHingga: null,
  },
];

export const poliItems: PoliItem[] = [
  {
    name: "Anak",
    href: "/poli/anak",
  },
  {
    name: "Penyakit Dalam",
    href: "/poli/penyakit-dalam",
  },
  {
    name: "Kebidanan",
    href: "/poli/kebidanan",
  },
  {
    name: "Kardiologi",
    href: "/poli/kardiologi",
  },
  {
    name: "THT",
    href: "/poli/tht",
  },
  {
    name: "Bedah Umum",
    href: "/poli/bedah-umum",
  },
  {
    name: "Orthopedi",
    href: "/poli/orthopedi",
  },
  {
    name: "Saraf",
    href: "/poli/saraf",
  },
  {
    name: "Kulit",
    href: "/poli/kulit",
  },
  {
    name: "Mata",
    href: "/poli/mata",
  },
];

export const jadwalPelayananItems: JadwalPelayananItem[] = [
  {
    poli: "Anak",
    dokter: "dr. Siti Rahayu, Sp.A",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli Anak",
    hari: "Senin",
  },
  {
    poli: "Penyakit Dalam",
    dokter: "dr. Ahmad Fauzi, Sp.PD",
    jamPelayanan: "08.00 - 14.00",
    lokasi: "Lantai 1 - Poli Dalam",
    hari: "Senin",
  },
  {
    poli: "Kebidanan",
    dokter: "dr. Dewi Lestari, Sp.OG",
    jamPelayanan: "08.00 - 11.00",
    lokasi: "Lantai 2 - Poli Obgyn",
    hari: "Senin",
  },
  {
    poli: "Kardiologi",
    dokter: "dr. Budi Santoso, Sp.JP",
    jamPelayanan: "10.00 - 14.00",
    lokasi: "Lantai 2 - Poli Jantung",
    hari: "Senin",
  },
  {
    poli: "THT",
    dokter: "dr. Agus Salim, Sp.THT",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli THT",
    hari: "Senin",
  },
  {
    poli: "Penyakit Dalam",
    dokter: "dr. Ahmad Fauzi, Sp.PD",
    jamPelayanan: "08.00 - 14.00",
    lokasi: "Lantai 1 - Poli Dalam",
    hari: "Selasa",
  },
  {
    poli: "Bedah Umum",
    dokter: "dr. Rizky Pratama, Sp.B",
    jamPelayanan: "09.00 - 13.00",
    lokasi: "Lantai 2 - Poli Bedah",
    hari: "Selasa",
  },
  {
    poli: "Mata",
    dokter: "dr. Maya Kusuma, Sp.M",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli Mata",
    hari: "Selasa",
  },
  {
    poli: "Orthopedi",
    dokter: "dr. Farhan Nugraha, Sp.OT",
    jamPelayanan: "09.00 - 13.00",
    lokasi: "Lantai 3 - Poli Ortho",
    hari: "Selasa",
  },
  {
    poli: "Anak",
    dokter: "dr. Siti Rahayu, Sp.A",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli Anak",
    hari: "Rabu",
  },
  {
    poli: "Penyakit Dalam",
    dokter: "dr. Ahmad Fauzi, Sp.PD",
    jamPelayanan: "08.00 - 14.00",
    lokasi: "Lantai 1 - Poli Dalam",
    hari: "Rabu",
  },
  {
    poli: "Kebidanan",
    dokter: "dr. Dewi Lestari, Sp.OG",
    jamPelayanan: "08.00 - 11.00",
    lokasi: "Lantai 2 - Poli Obgyn",
    hari: "Rabu",
  },
  {
    poli: "Kardiologi",
    dokter: "dr. Budi Santoso, Sp.JP",
    jamPelayanan: "10.00 - 14.00",
    lokasi: "Lantai 2 - Poli Jantung",
    hari: "Rabu",
  },
  {
    poli: "Saraf",
    dokter: "dr. Hendra Wijaya, Sp.S",
    jamPelayanan: "09.00 - 13.00",
    lokasi: "Lantai 2 - Poli Saraf",
    hari: "Rabu",
  },
  {
    poli: "Kulit",
    dokter: "dr. Rina Apriani, Sp.KK",
    jamPelayanan: "11.00 - 15.00",
    lokasi: "Lantai 1 - Poli Kulit",
    hari: "Rabu",
  },
  {
    poli: "Penyakit Dalam",
    dokter: "dr. Ahmad Fauzi, Sp.PD",
    jamPelayanan: "08.00 - 14.00",
    lokasi: "Lantai 1 - Poli Dalam",
    hari: "Kamis",
  },
  {
    poli: "Bedah Umum",
    dokter: "dr. Rizky Pratama, Sp.B",
    jamPelayanan: "09.00 - 13.00",
    lokasi: "Lantai 2 - Poli Bedah",
    hari: "Kamis",
  },
  {
    poli: "Mata",
    dokter: "dr. Maya Kusuma, Sp.M",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli Mata",
    hari: "Kamis",
  },
  {
    poli: "THT",
    dokter: "dr. Agus Salim, Sp.THT",
    jamPelayanan: "08.00 - 12.00",
    lokasi: "Lantai 1 - Poli THT",
    hari: "Kamis",
  },
  {
    poli: "Anak",
    dokter: "dr. Siti Rahayu, Sp.A",
    jamPelayanan: "08.00 – 12.00",
    lokasi: "Lantai 1 – Poli Anak",
    hari: "Jumat",
  },
  {
    poli: "Penyakit Dalam",
    dokter: "dr. Ahmad Fauzi, Sp.PD",
    jamPelayanan: "08.00 – 14.00",
    lokasi: "Lantai 1 – Poli Dalam",
    hari: "Jumat",
  },
  {
    poli: "Kardiologi",
    dokter: "dr. Budi Santoso, Sp.JP",
    jamPelayanan: "10.00 – 14.00",
    lokasi: "Lantai 2 – Poli Jantung",
    hari: "Jumat",
  },
  {
    poli: "Orthopedi",
    dokter: "dr. Farhan Nugraha, Sp.OT",
    jamPelayanan: "09.00 – 13.00",
    lokasi: "Lantai 3 – Poli Ortho",
    hari: "Jumat",
  },
];

export const rawatInapItems: RawatInapItem[] = [
  {
    kelas: "VVIP",
    nama: "Rawat Inap VVIP",
    kapasitas: 1,
    foto: rawatInapVVIP,
    badgeColor: { bg: "#E1F5EE", text: "#085041" },
    fasilitasColor: "#0F6E56",
    fasilitas: [
      { icon: "sofa", label: "Sofa & meja tamu" },
      { icon: "air-conditioning", label: "AC" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "bath", label: "Kamar mandi dalam" },
      { icon: "tool-kitchen-2", label: "Kulkas mini" },
      { icon: "device-tv", label: "TV" },
      { icon: "hanger", label: "Lemari pakaian" },
      { icon: "phone", label: "Telepon kamar" },
    ],
  },
  {
    kelas: "Kelas I",
    nama: "Rawat Inap Kelas I",
    kapasitas: 2,
    foto: rawatInapKelas1,
    badgeColor: { bg: "#E6F1FB", text: "#0C447C" },
    fasilitasColor: "#185FA5",
    fasilitas: [
      { icon: "air-conditioning", label: "AC" },
      { icon: "wifi", label: "Wi-Fi" },
      { icon: "bath", label: "Kamar mandi dalam" },
      { icon: "tool-kitchen-2", label: "Kulkas" },
      { icon: "device-tv", label: "TV" },
      { icon: "hanger", label: "Lemari pakaian" },
    ],
  },
];

export const hakPasienItems: HakKewajibanItem[] = [
  {
    icon: "UserCheck",
    label: "Identitas & privasi",
    desc: "Mendapatkan pelayanan yang manusiawi, adil, jujur, dan tanpa diskriminasi.",
  },
  {
    icon: "FileText",
    label: "Informasi penyakit",
    desc: "Mendapatkan informasi yang meliputi diagnosis, tata cara tindakan medis, tujuan tindakan, alternatif tindakan, dan prognosis.",
  },
  {
    icon: "PenLine",
    label: "Persetujuan tindakan",
    desc: "Memberikan persetujuan atau menolak atas tindakan yang akan dilakukan oleh tenaga kesehatan.",
  },
  {
    icon: "Lock",
    label: "Kerahasiaan data",
    desc: "Mendapatkan privasi dan kerahasiaan penyakit yang diderita termasuk data-data medisnya.",
  },
  {
    icon: "HelpCircle",
    label: "Pendapat kedua",
    desc: "Mendapatkan informasi mengenai kemungkinan perolehan second opinion dari dokter lain.",
  },
  {
    icon: "Receipt",
    label: "Informasi biaya",
    desc: "Mendapatkan informasi mengenai rincian biaya yang akan dikenakan selama perawatan.",
  },
  {
    icon: "HeartHandshake",
    label: "Pendampingan",
    desc: "Didampingi keluarganya dalam keadaan kritis atau menjelang kematian.",
  },
  {
    icon: "ClipboardList",
    label: "Rekam medis",
    desc: "Mendapatkan akses terhadap isi rekam medis miliknya.",
  },
];

export const kewajibanPasienItems: HakKewajibanItem[] = [
  {
    icon: "BadgeCheck",
    label: "Identitas jujur",
    desc: "Memberikan informasi yang lengkap dan jujur tentang masalah kesehatannya kepada dokter yang merawat.",
  },
  {
    icon: "ClipboardCheck",
    label: "Mengikuti aturan RS",
    desc: "Mematuhi peraturan dan tata tertib yang berlaku di RSUD Kabupaten Karawang.",
  },
  {
    icon: "Coins",
    label: "Kewajiban finansial",
    desc: "Memenuhi hal-hal yang telah disepakati termasuk kewajiban biaya perawatan.",
  },
  {
    icon: "Stethoscope",
    label: "Menghormati tenaga medis",
    desc: "Menghormati hak-hak tenaga kesehatan dan pasien lain yang ada di rumah sakit.",
  },
  {
    icon: "FileSignature",
    label: "Tanggung jawab tindakan",
    desc: "Memberikan imbalan jasa atas pelayanan yang diterima sesuai peraturan yang berlaku.",
  },
  {
    icon: "AlertTriangle",
    label: "Melaporkan perubahan",
    desc: "Segera melapor apabila ada perubahan kondisi kesehatan yang signifikan selama perawatan.",
  },
  {
    icon: "Ban",
    label: "Tidak merugikan RS",
    desc: "Tidak melakukan tindakan yang merugikan rumah sakit dan/atau mengganggu ketertiban umum.",
  },
];

export const JobItems: JobItem[] = [
  {
    title: "Dokter Umum",
    category: "Tenaga Medis",
    location: "Karawang",
    type: "Full Time",
    employmentType: "PNS / PPPK",
    deadline: "30 Juni 2026",
    deadlineSoon: false,
  },
  {
    title: "Perawat IGD",
    category: "Keperawatan",
    location: "Karawang",
    type: "Full Time",
    employmentType: "Kontrak",
    deadline: "28 Juni 2026",
    deadlineSoon: true,
  },
  {
    title: "Analis Laboratorium",
    category: "Laboratorium",
    location: "Karawang",
    type: "Full Time",
    employmentType: "PNS / PPPK",
    deadline: "25 Juni 2026",
    deadlineSoon: true,
  },
  {
    title: "Staf Administrasi",
    category: "Non Medis",
    location: "Karawang",
    type: "Full Time",
    employmentType: "Kontrak",
    deadline: "27 Juni 2026",
    deadlineSoon: false,
  },
];

export const CommitmentsItems: CommitmentItem[] = [
  {
    icon: "ClockIcon",
    accentColor: "#1D9E75",
    title: "Tepat waktu",
    description:
      "Memberikan pelayanan sesuai standar waktu yang telah ditetapkan tanpa penundaan yang tidak perlu.",
  },
  {
    icon: "BadgeCheck",
    accentColor: "#534AB7",
    title: "Profesional & kompeten",
    description:
      "Dilayani oleh tenaga kesehatan yang terlatih, bersertifikat, dan menjunjung tinggi etika profesi.",
  },
  {
    icon: "HeartHandshake",
    accentColor: "#185FA5",
    title: "Ramah & berempati",
    description:
      "Melayani dengan senyum, sikap hormat, dan kepedulian terhadap kondisi setiap pasien.",
  },
  {
    icon: "Ban",
    accentColor: "#D85A30",
    title: "Tanpa diskriminasi",
    description:
      "Melayani seluruh pasien secara adil tanpa membedakan latar belakang sosial, ekonomi, atau agama.",
  },
  {
    icon: "CircleDollarSign",
    accentColor: "#BA7517",
    title: "Bebas pungutan liar",
    description:
      "Tidak memungut biaya di luar ketentuan resmi. Setiap transaksi menggunakan bukti resmi yang sah.",
  },
  {
    icon: "Eye",
    accentColor: "#0F6E56",
    title: "Transparan & akuntabel",
    description:
      "Memberikan informasi yang jelas dan jujur tentang prosedur, biaya, dan kondisi medis pasien.",
  },
];

export const StandarsItems: ServiceStandardItem[] = [
  {
    title: "Pendaftaran rawat jalan",
    value: "≤ 30 menit",
    note: "Sejak antrian hingga nomor dipanggil",
  },
  {
    title: "Triase IGD",
    value: "≤ 5 menit",
    note: "Asesmen awal pasien gawat darurat",
  },
  {
    title: "Waktu tunggu rawat inap",
    value: "≤ 60 menit",
    note: "Dari IGD hingga kamar tersedia",
  },
  {
    title: "Hasil laboratorium rutin",
    value: "≤ 2 jam",
    note: "Pemeriksaan darah lengkap standar",
  },
  {
    title: "Tanggapan pengaduan",
    value: "≤ 3 hari kerja",
    note: "Pengaduan diterima dan ditindaklanjuti",
  },
  {
    title: "Penyelesaian pengaduan",
    value: "≤ 14 hari kerja",
    note: "Resolusi dan pemberitahuan hasil",
  },
];

export const ChannelsItems: ComplaintChannelItem[] = [
  {
    icon: "Building2",
    iconColor: "text-[#064E5C]",
    label: "Langsung",
    value: "Loket pengaduan - Lantai 1 RSUD",
  },
  {
    icon: "Mail",
    iconColor: "text-blue-700",
    label: "Email",
    value: "pengaduan@rsudkarawang.id",
  },
  {
    icon: "MessageCircle",
    iconColor: "text-emerald-700",
    label: "WhatsApp",
    value: "0812-xxxx-xxxx - Jam 08.00 - 16.00",
  },
  {
    icon: "Phone",
    iconColor: "text-orange-700",
    label: "Hotline",
    value: "(0267) xxx-xxx - 24 jam",
  },
];

export const unsurItems: UnsurItem[] = [
  { label: "Persyaratan", value: 3.6 },
  { label: "Sistem / prosedur", value: 3.4 },
  { label: "Waktu pelayanan", value: 3.12 },
  { label: "Biaya / tarif", value: 3.7 },
  { label: "Produk layanan", value: 3.32 },
  { label: "Kompetensi petugas", value: 3.52 },
  { label: "Perilaku petugas", value: 3.44 },
  { label: "Sarana & prasarana", value: 2.96 },
  { label: "Penanganan pengaduan", value: 3.28 },
];

export const archivesItems: ArchiveItem[] = [
  {
    title: "Laporan IKM Semester II — 2024",
    period: "Juli – Desember 2024",
    respondents: 1248,
    score: 83.4,
    mutu: "Baik",
    href: "/index-kepuasan/ikm-sem2-2024.pdf",
    variant: "teal",
  },
  {
    title: "Laporan IKM Semester I — 2024",
    period: "Januari – Juni 2024",
    respondents: 1102,
    score: 82.1,
    mutu: "Baik",
    href: "/index-kepuasan/ikm-sem1-2024.pdf",
    variant: "blue",
  },
  {
    title: "Laporan IKM Tahunan — 2023",
    period: "Januari – Desember 2023",
    respondents: 2104,
    score: 81.8,
    mutu: "Baik",
    href: "/index-kepuasan/ikm-2023.pdf",
    variant: "blue",
  },
  {
    title: "Laporan IKM Tahunan — 2022",
    period: "Januari – Desember 2022",
    respondents: 1876,
    score: 80.6,
    mutu: "Baik",
    href: "/index-kepuasan/ikm-2022.pdf",
    variant: "gray",
  },
];

export const FaqItems: FaqItem[] = [
  {
    id: 1,
    category: "Pendaftaran",
    dotColor: "#1D9E75",
    question: "Bagaimana cara mendaftar sebagai pasien rawat jalan?",
    answer: (
      <>
        Pendaftaran dapat dilakukan melalui tiga cara: (1) datang langsung ke
        loket pendaftaran di lantai 1, (2) melalui aplikasi mobile RSUD
        Karawang, atau (3) menghubungi nomor telepon pendaftaran. Bawa kartu
        identitas (KTP) dan kartu asuransi yang berlaku. Jam pendaftaran:
        Senin–Jumat pukul 07.00–11.00 WIB, Sabtu pukul 07.00–10.00 WIB.
      </>
    ),
  },
  {
    id: 2,
    category: "Pendaftaran",
    dotColor: "#1D9E75",
    question: "Apakah bisa mendaftar secara online?",
    answer: (
      <>
        Ya, RSUD Karawang menyediakan pendaftaran online melalui aplikasi dan
        website resmi. Pasien dapat memilih jadwal dokter, mengambil nomor
        antrian, dan mengunggah dokumen persyaratan sebelum datang ke rumah
        sakit. Pendaftaran online tersedia H-1 hingga hari H layanan.
      </>
    ),
  },
  {
    id: 3,
    category: "BPJS",
    dotColor: "#185FA5",
    question: "Apa saja dokumen yang diperlukan untuk pasien BPJS?",
    answer: (
      <>
        Untuk pasien BPJS Kesehatan, siapkan: (1) kartu BPJS Kesehatan yang
        aktif atau KTP terdaftar di BPJS, (2) surat rujukan dari faskes tingkat
        I (Puskesmas/klinik), (3) KTP atau kartu keluarga. Pastikan status
        kepesertaan aktif sebelum datang — bisa dicek melalui aplikasi Mobile
        JKN.
      </>
    ),
  },
  {
    id: 4,
    category: "BPJS",
    dotColor: "#185FA5",
    question: "Apakah BPJS menanggung semua jenis layanan di RSUD?",
    answer: (
      <>
        BPJS Kesehatan menanggung sebagian besar layanan sesuai indikasi medis,
        termasuk rawat jalan spesialis, rawat inap, tindakan operasi, dan
        obat-obatan yang termasuk formularium nasional. Beberapa layanan seperti
        kosmetik, layanan VIP, dan obat di luar formularium tidak ditanggung.
        Konsultasikan dengan petugas BPJS di rumah sakit untuk informasi lebih
        detail.
      </>
    ),
  },
  {
    id: 5,
    category: "Rawat Inap",
    dotColor: "#534AB7",
    question: "Apa saja kelas kamar rawat inap yang tersedia?",
    answer: (
      <>
        RSUD Karawang menyediakan beberapa kelas perawatan: Kelas III (BPJS
        standar), Kelas II, Kelas I, dan VIP. Setiap kelas memiliki fasilitas
        berbeda mulai dari jumlah tempat tidur per kamar hingga fasilitas
        pendamping. Peserta BPJS berhak atas kelas sesuai golongan
        kepesertaannya, dengan opsi naik kelas dengan membayar selisih biaya.
      </>
    ),
  },
  {
    id: 6,
    category: "Rawat Inap",
    dotColor: "#534AB7",
    question: "Berapa banyak penunggu pasien yang diizinkan?",
    answer: (
      <>
        Untuk kenyamanan dan kebersihan ruang perawatan, setiap pasien hanya
        diizinkan ditunggu oleh 1 (satu) orang penunggu resmi. Penunggu wajib
        menggunakan tanda pengenal yang diperoleh dari perawat ruangan. Jam
        besuk: pagi pukul 10.00–12.00 WIB dan sore pukul 16.00–19.00 WIB.
      </>
    ),
  },
  {
    id: 7,
    category: "Biaya",
    dotColor: "#BA7517",
    question: "Bagaimana cara mengetahui estimasi biaya perawatan?",
    answer: (
      <>
        Estimasi biaya dapat ditanyakan kepada petugas admisi sebelum menjalani
        tindakan. RSUD Karawang juga menyediakan petugas konseling biaya di
        lantai 1. Untuk pasien umum, tarif layanan mengacu pada Peraturan Daerah
        Kabupaten Karawang yang berlaku. Rincian biaya final diberikan saat
        proses pemulangan (discharge).
      </>
    ),
  },
  {
    id: 8,
    category: "Biaya",
    dotColor: "#BA7517",
    question: "Metode pembayaran apa saja yang diterima?",
    answer: (
      <>
        RSUD Karawang menerima berbagai metode pembayaran: tunai, transfer bank,
        kartu debit/kredit (Visa, Mastercard), dan QRIS. Pembayaran dilakukan di
        kasir lantai 1. Untuk pasien BPJS, tidak ada pembayaran tambahan kecuali
        ada selisih kelas atau layanan non-tanggungan.
      </>
    ),
  },
  {
    id: 9,
    category: "IGD",
    dotColor: "#A32D2D",
    question: "Apakah IGD buka 24 jam?",
    answer: (
      <>
        Ya, Instalasi Gawat Darurat (IGD) RSUD Karawang beroperasi 24 jam
        sehari, 7 hari seminggu termasuk hari libur nasional. Tim medis dan
        tenaga kesehatan siap memberikan penanganan darurat kapan pun
        dibutuhkan.
      </>
    ),
  },
  {
    id: 10,
    category: "IGD",
    dotColor: "#A32D2D",
    question: "Apakah pasien IGD perlu surat rujukan?",
    answer: (
      <>
        Tidak. Pasien yang datang ke IGD dengan kondisi gawat darurat tidak
        memerlukan surat rujukan. Penanganan akan diberikan segera berdasarkan
        triase kegawatan. Untuk pasien BPJS, pengurusan administrasi rujukan
        dapat diselesaikan setelah kondisi pasien stabil (maksimal 3x24 jam).
      </>
    ),
  },
  {
    id: 11,
    category: "Lainnya",
    dotColor: "#5F5E5A",
    question: "Di mana lokasi parkir rumah sakit?",
    answer: (
      <>
        Area parkir tersedia di depan gedung utama dan di sisi timur rumah
        sakit. Tersedia parkir kendaraan roda dua dan roda empat. Untuk pasien
        dengan mobilitas terbatas, tersedia area drop-off khusus di dekat pintu
        masuk utama.
      </>
    ),
  },
  {
    id: 12,
    category: "Lainnya",
    dotColor: "#5F5E5A",
    question: "Bagaimana cara menyampaikan pengaduan atau saran?",
    answer: (
      <>
        Pengaduan dan saran dapat disampaikan melalui: (1) kotak saran di setiap
        lantai, (2) loket pengaduan di lantai 1, (3) email
        pengaduan@rsudkarawang.id, (4) WhatsApp pengaduan, atau (5) aplikasi
        LAPOR! milik pemerintah. Setiap pengaduan ditanggapi dalam 3 hari kerja
        dan diselesaikan dalam 14 hari kerja.
      </>
    ),
  },
];

export const nilaiProfileItems: NilaiProfileItem[] = [
  {
    icon: <HeartHandshake size={20} />,
    iconColor: "#1D9E75",
    title: "Integritas",
    desc: "Jujur, amanah, dan bertanggung jawab dalam setiap tindakan pelayanan.",
  },
  {
    icon: <Users size={20} />,
    iconColor: "#185FA5",
    title: "Kolaborasi",
    desc: "Bekerja bersama lintas profesi untuk menghasilkan pelayanan terbaik.",
  },
  {
    icon: <Sparkles size={20} />,
    iconColor: "#534AB7",
    title: "Inovasi",
    desc: "Terus berinovasi dalam layanan, teknologi, dan pengembangan SDM.",
  },
  {
    icon: <Scale size={20} />,
    iconColor: "#854F0B",
    title: "Keadilan",
    desc: "Pelayanan yang merata tanpa diskriminasi bagi seluruh lapisan masyarakat.",
  },
  {
    icon: <Star size={20} />,
    iconColor: "#993556",
    title: "Keunggulan",
    desc: "Standar klinis dan non-klinis yang selalu ditingkatkan secara konsisten.",
  },
  {
    icon: <Leaf size={20} />,
    iconColor: "#3B6D11",
    title: "Kepedulian",
    desc: "Empati kepada pasien, keluarga, dan lingkungan sekitar rumah sakit.",
  },
];

export const TimelineProfileItems: TimelineProfileItem[] = [
  {
    year: "1937",
    event: "Pendirian Rumah Sakit",
    desc: "RSUD Karawang didirikan oleh Pemerintah Hindia Belanda sebagai fasilitas kesehatan untuk wilayah Karawang dan sekitarnya.",
  },
  {
    year: "1975",
    event: "Peningkatan kelas menjadi Kelas C",
    desc: "Rumah sakit mengalami pengembangan kapasitas dan layanan, resmi ditetapkan sebagai RSUD Kelas C.",
  },
  {
    year: "2000",
    event: "Naik kelas menjadi Kelas B",
    desc: "Ditetapkan sebagai Rumah Sakit Kelas B dengan penambahan layanan spesialistik dan subspesialistik.",
  },
  {
    year: "2018",
    event: "Akreditasi pertama KARS",
    desc: "Meraih akreditasi nasional dari Komisi Akreditasi Rumah Sakit (KARS) dengan predikat Utama.",
  },
  {
    year: "2023",
    event: "Akreditasi Paripurna",
    desc: "Meraih akreditasi tertinggi KARS dengan predikat Paripurna, menandai kematangan tata kelola mutu dan keselamatan pasien.",
    isLast: true,
  },
];

export const PimpinanProfileItems: PimpinanProfileItem[] = [
  {
    initials: "DR",
    name: "dr. [Nama Direktur]",
    role: "Direktur Utama",
    avatarBg: "#E1F5EE",
    avatarColor: "#0F6E56",
  },
  {
    initials: "WM",
    name: "[Nama Wadir Medis]",
    role: "Wadir Pelayanan Medis",
    avatarBg: "#E6F1FB",
    avatarColor: "#185FA5",
  },
  {
    initials: "WA",
    name: "[Nama Wadir Admin]",
    role: "Wadir Administrasi & Keuangan",
    avatarBg: "#EEEDFE",
    avatarColor: "#534AB7",
  },
];

export const fasilitasItems: FasilitasItem[] = [
  {
    category: "Gedung & Ruang",
    icon: <Building2 size={20} />,
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    name: "Gedung Rawat Inap",
    desc: "Gedung perawatan 4 lantai dengan kapasitas 450+ tempat tidur, tersedia kelas III, II, I, VIP, dan VVIP.",
    detail: "Lantai 2–5 · Gedung Rawat Inap",
    badge: "450+ TT",
    badgeBg: "#E1F5EE",
    badgeColor: "#0F6E56",
  },
  {
    category: "Gedung & Ruang",
    icon: <Scissors size={20} />,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    name: "Instalasi Bedah Sentral",
    desc: "8 kamar operasi berstandar internasional dengan sistem laminar airflow dan peralatan bedah terkini.",
    detail: "Lantai 3 · Gedung Bedah",
    badge: "8 OK",
    badgeBg: "#EEEDFE",
    badgeColor: "#534AB7",
  },
  {
    category: "Gedung & Ruang",
    icon: <Ambulance size={20} />,
    iconBg: "#FCEBEB",
    iconColor: "#A32D2D",
    name: "Instalasi Gawat Darurat",
    desc: "IGD 24 jam dengan 20 bed triase, area resusitasi, ruang tindakan, dan akses ambulans langsung.",
    detail: "Lantai 1 · Gedung Utama",
    badge: "24 Jam",
    badgeBg: "#FCEBEB",
    badgeColor: "#A32D2D",
  },
  {
    category: "Ruang Khusus",
    icon: <Heart size={20} />,
    iconBg: "#FBEAF0",
    iconColor: "#993556",
    name: "ICU / ICCU",
    desc: "Ruang perawatan intensif dengan 20 bed ICU dan 10 bed ICCU, dilengkapi ventilator dan monitor jantung.",
    detail: "Lantai 2 · Gedung Khusus",
    badge: "30 Bed",
    badgeBg: "#FBEAF0",
    badgeColor: "#993556",
  },
  {
    category: "Ruang Khusus",
    icon: <Baby size={20} />,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    name: "NICU / Perinatologi",
    desc: "Unit perawatan neonatus intensif dengan inkubator, CPAP, dan ventilator khusus bayi prematur.",
    detail: "Lantai 2 · Gedung Ibu & Anak",
    badge: "15 Inkubator",
    badgeBg: "#E6F1FB",
    badgeColor: "#185FA5",
  },
  {
    category: "Ruang Khusus",
    icon: <Wind size={20} />,
    iconBg: "#EAF3DE",
    iconColor: "#3B6D11",
    name: "Ruang Isolasi",
    desc: "Ruang isolasi tekanan negatif untuk pasien infeksi menular, dilengkapi sistem ventilasi khusus.",
    detail: "Lantai 3 · Gedung Rawat Inap",
    badge: "10 Kamar",
    badgeBg: "#EAF3DE",
    badgeColor: "#3B6D11",
  },
  {
    category: "Peralatan Medis",
    icon: <Cpu size={20} />,
    iconBg: "#FAEEDA",
    iconColor: "#854F0B",
    name: "CT-Scan 128 Slice",
    desc: "Computed Tomography terbaru dengan resolusi tinggi untuk diagnosis kepala, thoraks, abdomen, dan angiografi.",
    detail: "Lantai 1 · Radiologi",
    badge: "128 Slice",
    badgeBg: "#FAEEDA",
    badgeColor: "#854F0B",
  },
  {
    category: "Peralatan Medis",
    icon: <Radiation size={20} />,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    name: "MRI 1.5 Tesla",
    desc: "Magnetic Resonance Imaging 1.5 Tesla untuk pencitraan jaringan lunak, otak, tulang belakang, dan sendi.",
    detail: "Lantai 1 · Radiologi",
    badge: "1.5 Tesla",
    badgeBg: "#EEEDFE",
    badgeColor: "#534AB7",
  },
  {
    category: "Peralatan Medis",
    icon: <FlaskConical size={20} />,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    name: "Laboratorium Otomatis",
    desc: "Sistem analyzer hematologi dan kimia darah otomatis kapasitas tinggi dengan waktu tunggu hasil ≤2 jam.",
    detail: "Lantai 1 · Gedung Penunjang",
    badge: "500 sampel/hari",
    badgeBg: "#E6F1FB",
    badgeColor: "#185FA5",
  },
  {
    category: "Kapasitas",
    icon: <BedDouble size={20} />,
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    name: "Rawat Inap Kelas III",
    desc: "Kamar kelas III berkapasitas 4–6 bed per ruangan, diperuntukkan bagi peserta BPJS Kesehatan.",
    detail: "Lantai 2–3 · Gedung Rawat Inap",
    badge: "180 TT",
    badgeBg: "#E1F5EE",
    badgeColor: "#0F6E56",
  },
  {
    category: "Kapasitas",
    icon: <BedDouble size={20} />,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    name: "Rawat Inap Kelas I & II",
    desc: "Kamar kelas I (2 bed) dan kelas II (3 bed) dengan fasilitas lebih lengkap dan privasi lebih terjaga.",
    detail: "Lantai 3–4 · Gedung Rawat Inap",
    badge: "150 TT",
    badgeBg: "#E6F1FB",
    badgeColor: "#185FA5",
  },
  {
    category: "Kapasitas",
    icon: <BedDouble size={20} />,
    iconBg: "#FAEEDA",
    iconColor: "#854F0B",
    name: "VIP & VVIP",
    desc: "Kamar VIP dan VVIP dengan fasilitas setara hotel bintang, termasuk sofa tamu dan TV LED.",
    detail: "Lantai 5 · Gedung Rawat Inap",
    badge: "40 Kamar",
    badgeBg: "#FAEEDA",
    badgeColor: "#854F0B",
  },
];

export const mitraKamiItems: MitraKamiItem[] = [
  {
    initials: "FH",
    avatarBg: "#E1F5EE",
    avatarColor: "#0F6E56",
    name: "Fullerton Health",
    category: "Asuransi & Layanan Kesehatan Korporat",
    description:
      "Penyedia layanan kesehatan korporat internasional yang melayani pemeriksaan, rawat inap, dan pengelolaan klaim asuransi bagi karyawan perusahaan mitra.",
    tags: [
      { label: "Korporat", bg: "#E1F5EE", color: "#0F6E56" },
      { label: "Rawat jalan", bg: "#E6F1FB", color: "#185FA5" },
      { label: "Rawat inap", bg: "#E6F1FB", color: "#185FA5" },
    ],
    website: "https://www.fullertonhealth.com",
    websiteLabel: "fullertonhealth.com",
  },
  {
    initials: "JR",
    avatarBg: "#FAEEDA",
    avatarColor: "#854F0B",
    name: "Jasa Raharja",
    category: "Asuransi Kecelakaan Lalu Lintas",
    description:
      "BUMN penjamin santunan kecelakaan lalu lintas jalan dan angkutan umum. Pasien korban kecelakaan lalu lintas dapat mengakses layanan RSUD dengan jaminan Jasa Raharja.",
    tags: [
      { label: "Kecelakaan lalin", bg: "#FAEEDA", color: "#854F0B" },
      { label: "Jaminan penuh", bg: "#E1F5EE", color: "#0F6E56" },
    ],
    website: "https://www.jasaraharja.co.id",
    websiteLabel: "jasaraharja.co.id",
  },
  {
    initials: "BK",
    avatarBg: "#E6F1FB",
    avatarColor: "#185FA5",
    name: "BPJS Kesehatan",
    category: "Jaminan Kesehatan Nasional",
    description:
      "Program jaminan kesehatan nasional yang menjamin seluruh peserta JKN-KIS mendapatkan layanan kesehatan komprehensif di RSUD Karawang sebagai faskes rujukan tingkat II.",
    tags: [
      { label: "JKN-KIS", bg: "#E6F1FB", color: "#185FA5" },
      { label: "Faskes rujukan II", bg: "#E1F5EE", color: "#0F6E56" },
      { label: "Rawat inap", bg: "#EAF3DE", color: "#3B6D11" },
    ],
    website: "https://www.bpjs-kesehatan.go.id",
    websiteLabel: "bpjs-kesehatan.go.id",
  },
  {
    initials: "BT",
    avatarBg: "#EEEDFE",
    avatarColor: "#534AB7",
    name: "BPJS Ketenagakerjaan",
    category: "Jaminan Sosial Tenaga Kerja",
    description:
      "Menjamin tenaga kerja peserta BPJS Ketenagakerjaan yang mengalami kecelakaan kerja atau penyakit akibat kerja untuk mendapatkan penanganan medis di RSUD Karawang.",
    tags: [
      { label: "Kecelakaan kerja", bg: "#EEEDFE", color: "#534AB7" },
      { label: "Penyakit akibat kerja", bg: "#FAEEDA", color: "#854F0B" },
    ],
    website: "https://www.bpjsketenagakerjaan.go.id",
    websiteLabel: "bpjsketenagakerjaan.go.id",
  },
  {
    initials: "MI",
    avatarBg: "#FAECE7",
    avatarColor: "#993C1D",
    name: "Mandiri Inhealth",
    category: "Asuransi Kesehatan Korporat",
    description:
      "Anak perusahaan Bank Mandiri yang menyediakan asuransi kesehatan bagi karyawan perusahaan. Peserta dapat menggunakan layanan rawat jalan dan rawat inap di RSUD Karawang.",
    tags: [
      { label: "Asuransi korporat", bg: "#FAECE7", color: "#993C1D" },
      { label: "Rawat jalan", bg: "#E6F1FB", color: "#185FA5" },
      { label: "Rawat inap", bg: "#E6F1FB", color: "#185FA5" },
    ],
    website: "https://www.mandiriinhealth.co.id",
    websiteLabel: "mandiriinhealth.co.id",
  },
];

export const UnitsItems: UnitSectionItem[] = [
  {
    key: "Rawat Jalan",
    label: "Rawat Jalan",
    sub: "Poliklinik umum & spesialis",
    icon: <Stethoscope size={18} />,
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    items: [
      {
        title: "Pendaftaran pasien rawat jalan",
        description:
          "Pendaftaran via loket, aplikasi, atau telepon. Wajib membawa kartu identitas dan kartu BPJS/asuransi.",
        waktu: "≤ 30 menit",
        waktuVariant: "teal",
        badges: [
          { label: "Gratis (BPJS)", variant: "teal" },
          { label: "Online & offline", variant: "blue" },
        ],
        pdfHref: "/standar-pelayanan/rawat-jalan-pendaftaran.pdf",
      },
      {
        title: "Pelayanan poliklinik spesialis",
        description:
          "Pemeriksaan oleh dokter spesialis. Pasien BPJS wajib membawa surat rujukan dari faskes tingkat I.",
        waktu: "Sesuai jadwal",
        waktuVariant: "blue",
        badges: [
          { label: "BPJS & Umum", variant: "teal" },
          { label: "Surat rujukan", variant: "purple" },
        ],
        pdfHref: "/standar-pelayanan/rawat-jalan-spesialis.pdf",
      },
    ],
  },
  {
    key: "IGD",
    label: "Instalasi Gawat Darurat (IGD)",
    sub: "Pelayanan 24 jam",
    icon: <Ambulance size={18} />,
    iconBg: "#FCEBEB",
    iconColor: "#A32D2D",
    items: [
      {
        title: "Triase & penanganan awal",
        description:
          "Penilaian tingkat kegawatan pasien oleh tenaga medis terlatih. Pasien kritis diprioritaskan tanpa antri.",
        waktu: "≤ 5 menit",
        waktuVariant: "red",
        badges: [
          { label: "Gratis triase", variant: "teal" },
          { label: "Prioritas kritis", variant: "red" },
        ],
        pdfHref: "/standar-pelayanan/igd-triase.pdf",
      },
      {
        title: "Tindakan gawat darurat",
        description:
          "Tindakan medis yang diperlukan untuk menyelamatkan nyawa dan mencegah kecacatan. Tidak memerlukan surat rujukan.",
        waktu: "Segera",
        waktuVariant: "amber",
        badges: [
          { label: "Semua pasien", variant: "teal" },
          { label: "Tanpa rujukan", variant: "amber" },
        ],
        pdfHref: "/standar-pelayanan/igd-tindakan.pdf",
      },
    ],
  },
  {
    key: "Rawat Inap",
    label: "Rawat Inap",
    sub: "Pelayanan perawatan di ruang bangsal",
    icon: <BedDouble size={18} />,
    iconBg: "#EEEDFE",
    iconColor: "#534AB7",
    items: [
      {
        title: "Penerimaan pasien rawat inap",
        description:
          "Pasien diterima dari IGD atau poliklinik setelah ada keputusan rawat inap dari dokter. Proses penempatan kamar sesuai kelas perawatan.",
        waktu: "≤ 60 menit",
        waktuVariant: "blue",
        badges: [
          { label: "Semua kelas", variant: "teal" },
          { label: "Surat admit dokter", variant: "purple" },
        ],
        pdfHref: "/standar-pelayanan/rawat-inap-penerimaan.pdf",
      },
    ],
  },
  {
    key: "Laboratorium",
    label: "Laboratorium",
    sub: "Pemeriksaan patologi klinik",
    icon: <FlaskConical size={18} />,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    items: [
      {
        title: "Pemeriksaan darah rutin",
        description:
          "Hematologi lengkap, kimia darah, urinalisis. Sampel dikirim dari poliklinik atau IGD dengan formulir permintaan dokter.",
        waktu: "≤ 2 jam",
        waktuVariant: "blue",
        badges: [
          { label: "Rujukan dokter", variant: "teal" },
          { label: "Senin – Sabtu", variant: "blue" },
        ],
        pdfHref: "/standar-pelayanan/lab-darah-rutin.pdf",
      },
      {
        title: "Pemeriksaan khusus / cito",
        description:
          "Pemeriksaan prioritas untuk kondisi darurat. Hasil dikeluarkan lebih cepat dari waktu normal.",
        waktu: "≤ 60 menit",
        waktuVariant: "red",
        badges: [
          { label: "24 jam (cito)", variant: "red" },
          { label: "Rujukan dokter", variant: "teal" },
        ],
        pdfHref: "/standar-pelayanan/lab-cito.pdf",
      },
    ],
  },
  {
    key: "Farmasi",
    label: "Farmasi / Apotek",
    sub: "Pelayanan kefarmasian rawat jalan & inap",
    icon: <Pill size={18} />,
    iconBg: "#FAEEDA",
    iconColor: "#854F0B",
    items: [
      {
        title: "Penyiapan & penyerahan obat",
        description:
          "Obat disiapkan berdasarkan resep dokter. Farmasis memberikan konseling pemakaian obat kepada pasien atau keluarga.",
        waktu: "≤ 30 menit",
        waktuVariant: "amber",
        badges: [
          { label: "Resep dokter", variant: "amber" },
          { label: "Termasuk konseling", variant: "teal" },
        ],
        pdfHref: "/standar-pelayanan/farmasi-penyerahan.pdf",
      },
    ],
  },
  {
    key: "Radiologi",
    label: "Radiologi",
    sub: "Pencitraan diagnostik",
    icon: <RadioTower size={18} />,
    iconBg: "#EAF3DE",
    iconColor: "#3B6D11",
    items: [
      {
        title: "Pemeriksaan rontgen / X-Ray",
        description:
          "Pemeriksaan foto rontgen konvensional dengan surat permintaan dokter. Hasil diberikan dalam bentuk foto dan ekspertisi radiolog.",
        waktu: "≤ 2 jam",
        waktuVariant: "teal",
        badges: [
          { label: "Rujukan dokter", variant: "teal" },
          { label: "Senin – Sabtu", variant: "blue" },
        ],
        pdfHref: "/standar-pelayanan/radiologi-rontgen.pdf",
      },
    ],
  },
];

export const dasarHukumStandarPelayananItems: DasarHukumItem[] = [
  {
    title: "UU No. 25/2009",
    desc: "Pelayanan publik — kerangka dasar standar layanan",
    color: "#0F6E56",
  },
  {
    title: "Permenpan RB 15/2014",
    desc: "Pedoman standar pelayanan instansi pemerintah",
    color: "#185FA5",
  },
  {
    title: "Perda Kab. Karawang",
    desc: "Ketentuan tarif dan pelayanan RSUD daerah",
    color: "#854F0B",
  },
];
