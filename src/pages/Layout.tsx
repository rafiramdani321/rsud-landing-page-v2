import Footer from "#components/common/Footer.tsx";
import { TopBar } from "#components/common/Topbar.tsx";
import { Outlet } from "react-router-dom";
import { Hero } from "./home/sections/Hero";
import { SiteHeader } from "#components/common/navbar/SiteHeader.tsx";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteHeader />
      <main>
        <Hero />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
