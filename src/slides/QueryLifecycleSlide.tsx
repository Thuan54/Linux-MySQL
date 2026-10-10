import SlideLayout from '../components/SlideLayout';

const steps = [
  ['01', 'Receive', 'Client sends SQL'],
  ['02', 'Parse', 'Validate SQL syntax'],
  ['03', 'Resolve', 'Find tables, columns and privileges'],
  ['04', 'Optimize', 'Choose a candidate execution plan'],
  ['05', 'Execute', 'Read or modify rows through the engine'],
  ['06', 'Return', 'Send result rows to the client'],
];

export default function QueryLifecycleSlide() {
  return (
    <SlideLayout
      eyebrow="02 · Query lifecycle"
      title="What happens after SELECT?"
      subtitle="The exact execution path depends on the query, schema, plan, and storage engine."
    >
      <div className="grid grid-cols-3 gap-4">
        {steps.map(([number, title, detail]) => (
          <div
            key={number}
            className="rounded-xl border border-white/10 bg-slate-800/70 p-4"
          >
            <p className="text-sm font-bold text-cyan-400">
              STEP {number}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {detail}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg bg-cyan-400/10 p-4 text-sm text-cyan-100">
        Key question: which work is performed by the SQL layer,
        and which work is delegated to InnoDB?
      </div>
    </SlideLayout>
  );
}
