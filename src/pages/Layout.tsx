import { TopBar } from "#components/common/Topbar.tsx";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "#components/common/SiteHeader.tsx";
import { SiteFooter } from "#components/common/SiteFooter.tsx";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};
