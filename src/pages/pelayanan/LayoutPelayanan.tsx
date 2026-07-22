import { Outlet } from "react-router-dom";

const LayoutPelayanan = () => {
  return (
    <main className="min-h-screen mt-28">
      <Outlet />
    </main>
  );
};

export default LayoutPelayanan;
