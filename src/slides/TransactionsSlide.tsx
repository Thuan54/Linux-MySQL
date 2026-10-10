import SlideLayout from '../components/SlideLayout';

export default function TransactionsSlide() {
  return (
    <SlideLayout
      eyebrow="05 · Transactions"
      title="ACID, MVCC, and locks"
      subtitle="Correctness under concurrent reads, writes, failures, and retries."
    >
      <div className="grid grid-cols-2 gap-4">
        {[
          ['Atomicity', 'A transaction commits as a unit or is rolled back.'],
          ['Consistency', 'Constraints and application rules preserve valid states.'],
          ['Isolation', 'Concurrent transactions follow the configured isolation semantics.'],
          ['Durability', 'Committed changes survive failures within the configured guarantees.'],
        ].map(([title, detail]) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 p-5"
          >
            <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
            <p className="mt-2 text-slate-300">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-violet-400/10 p-4 text-violet-100">
        Explore next: consistent reads, undo records, record locks,
        gap locks, deadlocks, and isolation levels.
      </div>
    </SlideLayout>
  );
}
