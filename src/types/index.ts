import type { LucideIcon } from "lucide-react";
import type React from "react";

export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

// =========== MOCK DATA TYPES ============

export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items?: NavItem[];
}

export interface LayananPenunjangItem {
  name: string;
  icon: LucideIcon;
  desc: string;
  tag: string;
  tagVariant: "default" | "urgent";
  featured?: boolean;
  jam?: string;
  jamExtra?: string;
  lokasi?: string;
}

export interface LayananSpesialisItem {
  icon: string;
  name: string;
  desc: string;
}

export interface DokterItem {
  name: string;
  spesialis: string;
  pengalaman: string;
  jadwal: string;
  rating: number;
  foto: string;
}

export type KategoriNameType =
  | "Kesehatan Jantung"
  | "Kesehatan Anak"
  | "Diabetes"
  | "Gaya Hidup"
  | "Neurologi"
  | "Gizi & Nutrisi"
  | "Kegiatan Rumah Sakit"
  | "Pengumuman";

export interface KategoriArtikelItem {
  id: string;
  name: KategoriNameType;
  slug: string;
}

export interface ArtikelItem {
  id: string;
  slug: string;
  kategori: KategoriNameType;
  judul: string;
  excerpt: string;
  image?: string | null;
  author: string;
  tanggal: string;
  publishedAt: string;
  views: number;
  featured?: boolean;
  status: "published" | "draft";
}

export type BadgeVariant = "hot" | "new" | "info" | "warning";

export interface BeritaItem {
  id: number;
  badge: string;
  badgeVariant: BadgeVariant;
  judul: string;
  excerpt: string;
  tanggal: string;
  sumber: string;
}

export interface PengumumanItem {
  id: number;
  badge: string;
  badgeVariant: BadgeVariant;
  judul: string;
  excerpt: string;
  tanggal: string;
  sumber: string;
  berlakuHingga?: string | null;
  penting?: boolean;
}

export type Day = "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat";

export type Poli =
  | "Anak"
  | "Penyakit Dalam"
  | "Kebidanan"
  | "Kardiologi"
  | "THT"
  | "Bedah Umum"
  | "Orthopedi"
  | "Saraf"
  | "Kulit"
  | "Mata";

export interface PoliItem {
  name: Poli;
  href: string;
}

export interface JadwalPelayananItem {
  poli: Poli;
  dokter: string;
  jamPelayanan: string;
  lokasi: string;
  hari: Day;
}

export interface RawatInapFasilitas {
  icon: string;
  label: string;
}

export interface RawatInapItem {
  kelas: string;
  nama: string;
  kapasitas: number;
  foto: string;
  badgeColor: { bg: string; text: string };
  fasilitasColor: string;
  fasilitas: RawatInapFasilitas[];
}

export interface HakKewajibanItem {
  icon: string;
  label: string;
  desc: string;
}

export type CategoryRecruitment =
  | "Semua"
  | "Tenaga Medis"
  | "Keperawatan"
  | "Laboratorium"
  | "Non Medis"
  | "Magang";

export type EmploymentType = "PNS / PPPK" | "Kontrak" | "Magang";

export interface JobItem {
  title: string;
  category: Exclude<CategoryRecruitment, "Semua">;
  location: string;
  type: string;
  employmentType: EmploymentType;
  deadline: string;
  deadlineSoon: boolean;
}

export interface CommitmentItem {
  icon: string;
  accentColor: string;
  title: string;
  description: string;
}

export interface ServiceStandardItem {
  title: string;
  value: string;
  note: string;
}

export interface ComplaintChannelItem {
  icon: string;
  iconColor: string;
  label: string;
  value: string;
}

export interface UnsurItem {
  label: string;
  value: number; // skala 1 - 4
}

export interface ArchiveItem {
  title: string;
  period: string;
  respondents: number;
  score: number;
  mutu: string;
  href: string;
  variant: "teal" | "blue" | "gray";
}

export type UnitKey =
  | "Semua unit"
  | "Rawat Jalan"
  | "IGD"
  | "Rawat Inap"
  | "Laboratorium"
  | "Farmasi"
  | "Radiologi";

export interface BadgeItem {
  label: string;
  variant: "teal" | "blue" | "amber" | "purple" | "red";
}

export interface StandardItem {
  title: string;
  description: string;
  waktu: string;
  waktuVariant: "teal" | "blue" | "amber" | "red";
  badges: BadgeItem[];
  pdfHref: string;
}

export interface DasarHukumItem {
  title: string;
  desc: string;
  color: string;
}

export type CategoryPAQ =
  | "Semua"
  | "Pendaftaran"
  | "BPJS"
  | "Rawat Inap"
  | "Biaya"
  | "IGD"
  | "Lainnya";

export interface FaqItem {
  id: number;
  category: Exclude<CategoryPAQ, "Semua">;
  dotColor: string;
  question: string;
  answer: React.ReactNode;
}

export interface StatProfileItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface NilaiProfileItem {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  desc: string;
}

export interface TimelineProfileItem {
  year: string;
  event: string;
  desc: string;
  isLast?: boolean;
}

export interface PimpinanProfileItem {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  avatarColor: string;
}

export type CategoryFasilitas =
  | "Semua"
  | "Gedung & Ruang"
  | "Peralatan Medis"
  | "Ruang Khusus"
  | "Kapasitas";

export interface FasilitasItem {
  category: Exclude<CategoryFasilitas, "Semua">;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  name: string;
  desc: string;
  detail?: string;
  badge?: string;
  badgeBg?: string;
  badgeColor?: string;
}

export interface TagMitraKami {
  label: string;
  bg: string;
  color: string;
}

export interface MitraKamiItem {
  initials: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  category: string;
  description: string;
  tags: TagMitraKami[];
  website: string;
  websiteLabel: string;
}

export interface UnitSectionItem {
  key: UnitKey;
  label: string;
  sub: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  items: StandardItem[];
}
