import SlideLayout from '../components/SlideLayout';

const topics = [
  ['01', 'Server architecture', 'What happens inside mysqld?'],
  ['02', 'Query lifecycle', 'From SQL text to execution plan'],
  ['03', 'InnoDB internals', 'Pages, buffer pool, redo and undo'],
  ['04', 'Transactions', 'ACID, MVCC and locking'],
  ['05', 'Indexes', 'B+ trees and access paths'],
  ['06', 'Performance', 'EXPLAIN, slow queries and bottlenecks'],
];

export default function AgendaSlide() {
  return (
    <SlideLayout
      eyebrow="The roadmap"
      title="What we will explore"
      subtitle="Follow a query through the database, then investigate how MySQL keeps data correct and fast."
    >
      <div className="grid grid-cols-2 gap-4">
        {topics.map(([number, title, description]) => (
          <div
            key={number}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <span className="text-xl font-bold text-cyan-400">
              {number}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
