import { Slide } from '@revealjs/react';

export default function ConclusionSlide() {
  return (
    <Slide background="#07111f">
      <div className="flex h-full flex-col justify-center text-left">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          Key takeaways
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Understand the path.
          <span className="block text-cyan-400">
            Measure the cost.
          </span>
        </h2>

        <ul className="mt-8 space-y-4 text-xl text-slate-300">
          <li>• SQL processing and storage are separate layers.</li>
          <li>• InnoDB combines memory, logs, indexes, and transactions.</li>
          <li>• Query plans and measurements guide optimization.</li>
        </ul>

        <p className="mt-12 text-lg text-slate-400">
          Questions & discussion
        </p>
      </div>
    </Slide>
  );
}
