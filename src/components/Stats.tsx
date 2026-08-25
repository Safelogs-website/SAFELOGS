const stats = [
  { value: '48K+', label: 'Accounts delivered' },
  { value: '12K+', label: 'Verified vendors' },
  { value: '99.6%', label: 'Successful delivery rate' },
  { value: '<4min', label: 'Avg. support response' },
];

export default function Stats() {
  return (
    <section className="py-6 sm:py-10">
      <div className="container-page">
        <div className="card-surface grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-ink-850/40 p-6 text-center sm:p-8 ${
                i < 2 ? 'border-b border-white/5 lg:border-b-0' : ''
              } ${i % 2 === 0 ? 'border-r border-white/5 lg:border-r-0' : ''}`}
            >
              <div className="text-3xl font-extrabold tracking-tight text-gradient-brand sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
