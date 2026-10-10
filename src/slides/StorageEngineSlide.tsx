import SlideLayout from '../components/SlideLayout';

export default function StorageEngineSlide() {
  return (
    <SlideLayout
      eyebrow="03 · Storage engines"
      title="Why storage engines matter"
      subtitle="The SQL layer coordinates queries; the engine determines how table data is stored and accessed."
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
            InnoDB
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            General-purpose OLTP
          </h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Transactions and ACID guarantees</li>
            <li>• Row-level locking</li>
            <li>• MVCC and crash recovery</li>
            <li>• Clustered primary-key indexes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
            Other engines
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            Specialized trade-offs
          </h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• MEMORY: data held in memory</li>
            <li>• MyISAM: legacy nontransactional engine</li>
            <li>• Different locking and recovery behavior</li>
            <li>• Capabilities vary by engine</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
