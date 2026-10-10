import SlideLayout from '../components/SlideLayout';

const concepts = [
  {
    title: 'Buffer pool',
    detail: 'Caches data and index pages in memory.',
  },
  {
    title: 'Redo log',
    detail: 'Supports crash recovery for committed changes.',
  },
  {
    title: 'Undo data',
    detail: 'Supports rollback and consistent read versions.',
  },
  {
    title: 'Background threads',
    detail: 'Flush pages and perform internal maintenance.',
  },
];

export default function InnoDBSlide() {
  return (
    <SlideLayout
      eyebrow="04 · InnoDB internals"
      title="Memory, logs, and pages"
      subtitle="InnoDB avoids treating every query as a direct disk operation."
    >
      <div className="grid grid-cols-2 gap-4">
        {concepts.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-xl font-bold text-cyan-300">
              {item.title}
            </h3>
            <p className="mt-2 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-400">
        Discussion prompt: why can a write be acknowledged before
        the modified data page reaches its final location on disk?
      </p>
    </SlideLayout>
  );
}
