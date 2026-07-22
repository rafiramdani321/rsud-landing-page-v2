import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // opsional, lihat catatan di bawah
import { usePublicPage } from "../hooks/usePublicPage";
import { SectionRenderer } from "../components/SectionRenderer";

const PageView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: page, isLoading, isError } = usePublicPage(slug ?? "");

  if (isLoading) {
    return (
      <div className="py-24 text-center text-sm text-muted-foreground">
        Memuat halaman...
      </div>
    );
  }

  if (isError || !page) {
    return (
      <div className="py-24 text-center">
        <p className="text-lg font-medium text-foreground">
          Halaman tidak ditemukan
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Halaman yang Anda cari mungkin belum tersedia.
        </p>
      </div>
    );
  }

  const sortedSections = [...page.sections].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <>
      <Helmet>
        <title>{page.seoTitle || page.title}</title>
        {page.seoDescription && (
          <meta name="description" content={page.seoDescription} />
        )}
      </Helmet>
      <div>
        {sortedSections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </div>
    </>
  );
};

export default PageView;
