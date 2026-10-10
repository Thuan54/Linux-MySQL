import SlideLayout from '../components/SlideLayout';

export default function IndexesSlide() {
  return (
    <SlideLayout
      eyebrow="06 · Indexes"
      title="Indexes are access paths"
      subtitle="InnoDB's primary index is clustered; secondary indexes store indexed columns and the primary-key value."
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-5">
          <h3 className="text-xl font-bold text-white">
            Composite index
          </h3>
          <code className="mt-4 block rounded-lg bg-black/30 p-3 text-sm text-cyan-200">
            (tenant_id, created_at)
          </code>
          <p className="mt-4 text-slate-300">
            Column order matters. The leftmost-prefix principle
            affects which predicates can use this index efficiently.
          </p>
        </div>

        <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
          <h3 className="text-xl font-bold text-white">
            The trade-off
          </h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Faster eligible reads</li>
            <li>• Extra storage</li>
            <li>• More work on inserts and updates</li>
            <li>• Index selection depends on cost estimates</li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        Demo query: use EXPLAIN to compare a table scan with
        an appropriate index access path.
      </p>
    </SlideLayout>
  );
}
