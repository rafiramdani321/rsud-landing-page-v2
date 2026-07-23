import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import DokterPage from "./pages/pelayanan/DoctorPage";
import JadwalPelayananPage from "./pages/pelayanan/JadwalPelayananPage";
import LayananPenunjangPage from "./pages/pelayanan/LayananPenunjangPage";
import PendaftaranOnlinePage from "./pages/pelayanan/PendaftaranOnlinePage";
import HakDanKewajibanPage from "./pages/pelayanan/HakDanKewajibanPage";
import BeritaDanPengumumanPage from "./pages/informasi/BeritaDanPengumumanPage";
import BlogPage from "./pages/informasi/BlogPage";
import RekrutmenPage from "./pages/informasi/RekrutmenPage";
import MaklumatPage from "./pages/informasi/MaklumatPage";
import IndexKepuasanPage from "./pages/informasi/IndexKepuasanPage";
import StandarPelayananPage from "./pages/informasi/StandarPelayananPage";
import ProfilePage from "./pages/tentang-kami/ProfilePage";
import FasilitasPage from "./pages/tentang-kami/FasilitasPage";
import MitraPage from "./pages/tentang-kami/MitraPage";
import FaqPage from "./pages/faq/FaqPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="dokter" element={<DokterPage />} />
          <Route path="jadwal" element={<JadwalPelayananPage />} />
          <Route path="penunjang" element={<LayananPenunjangPage />} />
          <Route path="pendaftaran" element={<PendaftaranOnlinePage />} />
          <Route path="hak-kewajiban" element={<HakDanKewajibanPage />} />
          <Route path="berita" element={<BeritaDanPengumumanPage />} />
          <Route path="pengumuman" element={<BeritaDanPengumumanPage />} />

          <Route path="blogs" element={<BlogPage />} />
          <Route path="rekrutmen" element={<RekrutmenPage />} />
          <Route path="maklumat" element={<MaklumatPage />} />
          <Route path="index-kepuasan" element={<IndexKepuasanPage />} />
          <Route path="standar-pelayanan" element={<StandarPelayananPage />} />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="fasilitas" element={<FasilitasPage />} />
          <Route path="mitra" element={<MitraPage />} />

          <Route path="faq" element={<FaqPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
