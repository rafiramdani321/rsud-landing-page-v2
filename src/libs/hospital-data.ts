import {
  Stethoscope,
  Baby,
  HeartPulse,
  Bone,
  Scissors,
  Brain,
  Eye,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const HOSPITAL = {
  name: "RSUD Karawang",
  fullName: "Rumah Sakit Umum Daerah",
  emergencyPhone: "+62-21-EMERGENCY",
  emergencyPhoneHref: "tel:+622136374629",
  whatsapp: "+62 812 1000 2000",
  whatsappHref: "https://wa.me/6281210002000",
  email: "care@sehatprima.co.id",
  address: "Jl. Kesehatan Raya No. 1, Jakarta Selatan 12190, Indonesia",
};

export const NAV_LINKS = [
  { label: "Polyclinics", href: "#polyclinics" },
  { label: "Doctors & Schedule", href: "#doctors" },
  { label: "Inpatient Care", href: "#inpatient" },
  { label: "Support Services", href: "#services" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#news" },
];

export type Poli = {
  name: string;
  category: string;
  description: string;
  hours: string;
  icon: LucideIcon;
};

export const POLI_CATEGORIES = [
  "All",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Surgery",
  "Dental",
  "Women's Health",
];

export const POLICLINICS: Poli[] = [
  {
    name: "Internal Medicine",
    category: "Internal Medicine",
    description:
      "Comprehensive diagnosis and treatment for adult diseases and chronic conditions.",
    hours: "Mon–Sat, 08:00–20:00",
    icon: Stethoscope,
  },
  {
    name: "Pediatrics",
    category: "Pediatrics",
    description:
      "Complete care for infants, children, and adolescents including immunization.",
    hours: "Mon–Sat, 08:00–18:00",
    icon: Baby,
  },
  {
    name: "Cardiology",
    category: "Cardiology",
    description:
      "Heart health screening, ECG, echocardiography and cardiac rehabilitation.",
    hours: "Mon–Fri, 09:00–17:00",
    icon: HeartPulse,
  },
  {
    name: "Orthopedics",
    category: "Orthopedics",
    description:
      "Treatment for bones, joints, spine, and sports-related injuries.",
    hours: "Mon–Sat, 08:00–16:00",
    icon: Bone,
  },
  {
    name: "General Surgery",
    category: "Surgery",
    description:
      "Pre- and post-operative care with minimally invasive surgical options.",
    hours: "Mon–Fri, 08:00–15:00",
    icon: Scissors,
  },
  {
    name: "Neurology",
    category: "Internal Medicine",
    description:
      "Care for disorders of the brain, spinal cord, and nervous system.",
    hours: "Tue–Sat, 09:00–17:00",
    icon: Brain,
  },
  {
    name: "Dental & Oral",
    category: "Dental",
    description:
      "Preventive, restorative, and cosmetic dental care for the whole family.",
    hours: "Mon–Sat, 08:00–19:00",
    icon: Eye,
  },
  {
    name: "Obstetrics & Gynecology",
    category: "Women's Health",
    description:
      "Prenatal care, delivery, and women's reproductive health services.",
    hours: "Mon–Sat, 08:00–18:00",
    icon: Activity,
  },
];

export type Doctor = {
  name: string;
  title: string;
  specialty: string;
  department: string;
  experience: string;
  bpjs: boolean;
  photo: string;
  days: string[];
  schedule: { day: string; time: string }[];
};

export const DOCTOR_DEPARTMENTS = [
  "All Departments",
  "Cardiology",
  "Pediatrics",
  "Internal Medicine",
  "Women's Health",
];

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const DOCTORS: Doctor[] = [
  {
    name: "dr. Andi Wijaya",
    title: "Sp.JP",
    specialty: "Interventional Cardiologist",
    department: "Cardiology",
    experience: "18+ Yrs Exp",
    bpjs: true,
    photo: "/images/doctor-1.png",
    days: ["Mon", "Wed", "Fri"],
    schedule: [
      { day: "Monday", time: "09:00 – 13:00" },
      { day: "Wednesday", time: "13:00 – 17:00" },
      { day: "Friday", time: "09:00 – 12:00" },
    ],
  },
  {
    name: "dr. Sarah Lestari",
    title: "Sp.A",
    specialty: "Pediatric Specialist",
    department: "Pediatrics",
    experience: "12+ Yrs Exp",
    bpjs: true,
    photo: "/images/doctor-2.png",
    days: ["Mon", "Tue", "Thu", "Sat"],
    schedule: [
      { day: "Monday", time: "08:00 – 12:00" },
      { day: "Tuesday", time: "14:00 – 18:00" },
      { day: "Thursday", time: "08:00 – 12:00" },
      { day: "Saturday", time: "09:00 – 13:00" },
    ],
  },
  {
    name: "dr. Budi Santoso",
    title: "Sp.PD",
    specialty: "Internal Medicine Consultant",
    department: "Internal Medicine",
    experience: "22+ Yrs Exp",
    bpjs: false,
    photo: "/images/doctor-3.png",
    days: ["Tue", "Wed", "Fri"],
    schedule: [
      { day: "Tuesday", time: "10:00 – 14:00" },
      { day: "Wednesday", time: "10:00 – 14:00" },
      { day: "Friday", time: "13:00 – 17:00" },
    ],
  },
  {
    name: "dr. Nadia Rahma",
    title: "Sp.OG",
    specialty: "Obstetrics & Gynecology",
    department: "Women's Health",
    experience: "10+ Yrs Exp",
    bpjs: true,
    photo: "/images/doctor-4.png",
    days: ["Mon", "Thu", "Sat"],
    schedule: [
      { day: "Monday", time: "13:00 – 17:00" },
      { day: "Thursday", time: "09:00 – 13:00" },
      { day: "Saturday", time: "10:00 – 14:00" },
    ],
  },
];

export type Room = {
  id: string;
  name: string;
  price: string;
  image: string;
  visiting: string;
  facilities: string[];
};

export const ROOMS: Room[] = [
  {
    id: "vvip",
    name: "VVIP Suite",
    price: "Rp 3.500.000 / night",
    image: "/images/room-vip.png",
    visiting: "10:00 – 20:00 (flexible)",
    facilities: [
      "AC",
      "Smart TV",
      "WiFi",
      "Sofa Bed",
      "Nurse Call",
      "Private Bathroom",
      "Mini Pantry",
    ],
  },
  {
    id: "vip",
    name: "VIP Room",
    price: "Rp 2.200.000 / night",
    image: "/images/room-vip.png",
    visiting: "11:00 – 13:00 & 17:00 – 20:00",
    facilities: [
      "AC",
      "Smart TV",
      "WiFi",
      "Sofa",
      "Nurse Call",
      "Private Bathroom",
    ],
  },
  {
    id: "class-1",
    name: "Class 1",
    price: "Rp 950.000 / night",
    image: "/images/room-standard.png",
    visiting: "11:00 – 13:00 & 17:00 – 19:00",
    facilities: ["AC", "TV", "WiFi", "Nurse Call", "2 Beds"],
  },
  {
    id: "class-2",
    name: "Class 2",
    price: "Rp 600.000 / night",
    image: "/images/room-standard.png",
    visiting: "11:00 – 13:00 & 17:00 – 19:00",
    facilities: ["AC", "TV", "Nurse Call", "3 Beds"],
  },
  {
    id: "class-3",
    name: "Class 3",
    price: "Rp 350.000 / night",
    image: "/images/room-standard.png",
    visiting: "11:00 – 13:00 & 17:00 – 19:00",
    facilities: ["AC", "Nurse Call", "4–6 Beds"],
  },
  {
    id: "icu",
    name: "ICU / ICCU",
    price: "Rp 4.000.000 / night",
    image: "/images/room-icu.png",
    visiting: "Restricted: 11:00 – 12:00 & 18:00 – 19:00",
    facilities: [
      "24/7 Monitoring",
      "Ventilator",
      "Nurse Call",
      "1:1 Nursing",
      "Advanced Life Support",
    ],
  },
];

export type BlogPost = {
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "5 Everyday Habits to Keep Your Heart Healthy",
    category: "Cardiology",
    readTime: "4 min read",
    image: "/images/blog-heart.png",
    excerpt:
      "Simple, doctor-reviewed lifestyle changes that can significantly lower your risk of heart disease.",
  },
  {
    title: "Building a Balanced Plate: A Nutrition Guide",
    category: "Nutrition",
    readTime: "6 min read",
    image: "/images/blog-nutrition.png",
    excerpt:
      "Our clinical nutritionists explain how to build meals that fuel your body and support recovery.",
  },
  {
    title: "Your Child's Immunization Schedule Explained",
    category: "Pediatrics",
    readTime: "5 min read",
    image: "/images/blog-children.png",
    excerpt:
      "A complete, reassuring guide to keeping your little ones protected from preventable diseases.",
  },
];

export const ANNOUNCEMENTS = [
  {
    title: "Idul Fitri Holiday Operating Hours",
    date: "Apr 8, 2026",
    tag: "Schedule",
  },
  {
    title: "BPJS Kesehatan Referral System Update",
    date: "Mar 22, 2026",
    tag: "BPJS",
  },
  {
    title: "Welcome dr. Nadia Rahma, Sp.OG to our team",
    date: "Mar 15, 2026",
    tag: "New Doctor",
  },
  {
    title: "New Advanced MRI 3 Tesla Now Available",
    date: "Feb 28, 2026",
    tag: "Facility",
  },
];

export const FAQ_CATEGORIES = [
  {
    category: "Online Booking",
    items: [
      {
        q: "How do I book an appointment online?",
        a: "Use the 'Book Appointment' button, choose your doctor or polyclinic, select an available time slot, and confirm your details. You'll receive a confirmation via WhatsApp and email.",
      },
      {
        q: "Can I reschedule or cancel my booking?",
        a: "Yes. Open the confirmation link sent to you, or contact our WhatsApp Center at least 3 hours before your appointment to reschedule or cancel free of charge.",
      },
    ],
  },
  {
    category: "BPJS & Insurance Claim",
    items: [
      {
        q: "Do you accept BPJS Kesehatan?",
        a: "Yes, we are a registered BPJS partner hospital. Please bring a valid referral (rujukan) from your Faskes 1 and your BPJS card for outpatient visits.",
      },
      {
        q: "Which private insurers do you work with?",
        a: "We partner with major insurers including Prudential, AXA, Allianz, and Mandiri Inhealth. Please confirm your coverage at our admission desk before treatment.",
      },
    ],
  },
  {
    category: "Visiting Rules",
    items: [
      {
        q: "What are the general visiting hours?",
        a: "Standard visiting hours are 11:00–13:00 and 17:00–19:00. VIP and VVIP rooms offer more flexible hours. ICU/ICCU visits are restricted for patient safety.",
      },
      {
        q: "How many visitors are allowed at once?",
        a: "To ensure patient comfort and safety, we allow a maximum of 2 visitors per patient at any time.",
      },
    ],
  },
  {
    category: "Emergency Procedures",
    items: [
      {
        q: "What should I do in a medical emergency?",
        a: `Call our 24/7 emergency hotline at ${HOSPITAL.emergencyPhone} immediately or come directly to our Emergency Department (IGD), which is open around the clock.`,
      },
      {
        q: "Is an ambulance service available?",
        a: "Yes, we operate a 24/7 ambulance service equipped with advanced life support. Call the emergency hotline to dispatch an ambulance to your location.",
      },
    ],
  },
];
