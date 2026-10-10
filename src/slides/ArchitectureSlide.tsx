import SlideLayout from '../components/SlideLayout';

const layers = [
  {
    title: 'Connection & Security',
    detail: 'Authentication, sessions, privileges',
    color: 'border-blue-400/40',
  },
  {
    title: 'SQL Processing',
    detail: 'Parser, resolver, optimizer, executor',
    color: 'border-cyan-400/40',
  },
  {
    title: 'Storage Engine API',
    detail: 'Handler interface between SQL and storage',
    color: 'border-violet-400/40',
  },
  {
    title: 'InnoDB',
    detail: 'Buffer pool, indexes, transactions, recovery',
    color: 'border-emerald-400/40',
  },
  {
    title: 'Persistent Storage',
    detail: 'Tablespaces, redo logs, undo data',
    color: 'border-amber-400/40',
  },
];

export default function ArchitectureSlide() {
  return (
    <SlideLayout
      eyebrow="01 · Architecture"
      title="The major server layers"
      subtitle="MySQL separates SQL processing from the storage engine that manages table data."
    >
      <div className="mx-auto max-w-4xl space-y-2">
        {layers.map((layer, index) => (
          <div key={layer.title}>
            <div
              className={`rounded-xl border ${layer.color} bg-white/5 px-5 py-3 text-center`}
            >
              <h3 className="text-lg font-bold text-white">
                {layer.title}
              </h3>
              <p className="text-sm text-slate-400">
                {layer.detail}
              </p>
            </div>

            {index < layers.length - 1 && (
              <div className="py-1 text-center text-cyan-400">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">
        Conceptual architecture · simplified for discussion
      </p>
    </SlideLayout>
  );
}
