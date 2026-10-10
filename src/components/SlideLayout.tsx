import type { ReactNode } from 'react';
import { Slide } from '@revealjs/react';

type SlideLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  background?: string;
};

export default function SlideLayout({
  eyebrow,
  title,
  subtitle,
  children,
  background = '#0b1120',
}: SlideLayoutProps) {
  return (
    <Slide background={background}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-8 text-left md:px-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mb-8 max-w-4xl text-lg text-slate-400">
            {subtitle}
          </p>
        )}

        <div className="min-h-0 text-slate-200">
          {children}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-slate-500">
          <span>MYSQL SERVER · DEEP DIVE</span>
          <span>INTERNAL TECH TALK</span>
        </div>
      </div>
    </Slide>
  );
}
