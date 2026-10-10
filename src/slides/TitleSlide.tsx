import { Slide } from '@revealjs/react';

export default function TitleSlide() {
  return (
    <Slide background="#07111f">
      <div className="flex h-full flex-col justify-center text-left">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Database Engineering
        </p>

        <h1 className="max-w-5xl text-6xl font-black leading-tight text-white md:text-7xl">
          Deep Dive into
          <span className="block text-cyan-400">
            MySQL Server
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-2xl text-slate-300">
          From SQL parsing to disk I/O, transactions,
          indexes, and query performance.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {['Architecture', 'InnoDB', 'MVCC', 'Optimization'].map(
            (topic) => (
              <span
                key={topic}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
              >
                {topic}
              </span>
            ),
          )}
        </div>

        <p className="mt-16 text-sm text-slate-500">
          Presenter Name · Engineering Team · 2026
        </p>
      </div>
    </Slide>
  );
}
