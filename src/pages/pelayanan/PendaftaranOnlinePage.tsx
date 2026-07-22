import CommingSoon from "#components/common/CommingSoon.tsx";

const PendaftaranOnlinePage = () => {
  return (
    <div className="px-4 sm:px-16 lg:px-48 py-10">
      <section className="relative rounded-3xl bg-primary overflow-hidden p-8 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary">
            Pendaftaran <span className="text-cyan-300">Online</span>
          </h2>
          <p className="text-sm text-secondary/60 mt-0.5">
            RSUD Kabupaten Karawang - Pendataran pasien online
          </p>
        </div>
      </section>

      <CommingSoon />
    </div>
  );
};

export default PendaftaranOnlinePage;
