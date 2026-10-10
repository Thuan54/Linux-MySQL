import SlideLayout from '../components/SlideLayout';

const workflow = [
  'Find the slow query and reproduce its workload.',
  'Inspect EXPLAIN or EXPLAIN ANALYZE where appropriate.',
  'Compare estimated rows with actual execution behavior.',
  'Check indexes, locks, I/O, memory, and concurrency.',
  'Change one thing, then measure again.',
];

export default function PerformanceSlide() {
  return (
    <SlideLayout
      eyebrow="08 · Performance"
      title="A systematic tuning workflow"
      subtitle="Measure first. Optimize the bottleneck, not the symptom."
    >
      <div className="space-y-3">
        {workflow.map((step, index) => (
          <div
            key={step}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 font-bold text-cyan-300">
              {index + 1}
            </span>
            <p className="pt-1 text-lg text-slate-200">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
        <p className="font-semibold text-amber-200">
          Avoid blindly adding indexes or increasing memory settings.
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Validate the hypothesis with execution plans and workload metrics.
        </p>
      </div>
    </SlideLayout>
  );
}
