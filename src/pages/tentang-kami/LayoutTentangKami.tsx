import { Outlet } from "react-router-dom";

const LayoutTentangKami = () => {
  return (
    <main className="min-h-screen mt-28">
      <Outlet />
    </main>
  );
};

export default LayoutTentangKami;
