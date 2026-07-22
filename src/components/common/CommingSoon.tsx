const CommingSoon = () => {
  return (
    <div className="flex flex-col items-center text-center py-10">
      <div className="w-18 h-18 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>

      <div className="flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-1.5 mb-4">
        <span className="flex gap-1">
          {[0, 200, 300].map((delay) => (
            <span
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </span>
        <span className="text-xs text-muted-foreground">
          Sedang dalam pengembangan
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-2">
        Pendaftaran Online <span className="text-primary">segera hadir</span>
      </h3>
    </div>
  );
};

export default CommingSoon;
