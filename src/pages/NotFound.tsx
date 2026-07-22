import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <p className="text-xl font-semibold text-foreground">
        Halaman tidak ditemukan
      </p>
      <p className="text-muted-foreground text-sm max-w-sm">
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="mt-2 px-6 py-2.5 bg-primary text-secondary rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
