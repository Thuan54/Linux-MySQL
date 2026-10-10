import SlideLayout from '../components/SlideLayout';

export default function ReplicationSlide() {
  return (
    <SlideLayout
      eyebrow="07 · Replication"
      title="From primary to replica"
      subtitle="Replication helps distribute reads and support recovery strategies, but it requires operational care."
    >
      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-5 text-center">
          <h3 className="text-2xl font-bold text-white">Primary</h3>
          <p className="mt-2 text-sm text-slate-300">
            Transactions and binary log
          </p>
        </div>

        <div className="text-3xl text-cyan-400">→</div>

        <div className="flex-1 rounded-xl border border-violet-400/40 bg-violet-400/10 p-5 text-center">
          <h3 className="text-2xl font-bold text-white">Replica</h3>
          <p className="mt-2 text-sm text-slate-300">
            Receive and apply events
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          ['Binary log', 'Records changes for replication and recovery.'],
          ['Apply process', 'Replica processes incoming events.'],
          ['Replication lag', 'Replica state may trail the primary.'],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-xl bg-white/5 p-4">
            <h3 className="font-bold text-cyan-300">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{detail}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
