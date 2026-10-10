import { Deck } from '@revealjs/react';

import TitleSlide from './slides/TitleSlide';
import AgendaSlide from './slides/AgendaSlide';
import ArchitectureSlide from './slides/ArchitectureSlide';
import QueryLifecycleSlide from './slides/QueryLifecycleSlide';
import StorageEngineSlide from './slides/StorageEngineSlide';
import InnoDBSlide from './slides/InnoDBSlide';
import TransactionsSlide from './slides/TransactionsSlide';
import IndexesSlide from './slides/IndexesSlide';
import ReplicationSlide from './slides/ReplicationSlide';
import PerformanceSlide from './slides/PerformanceSlide';
import ConclusionSlide from './slides/ConclusionSlide';

export default function App() {
  return (
    <Deck
      config={{
        width: 1280,
        height: 720,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2,
        hash: true,
        controls: true,
        progress: true,
        slideNumber: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        center: false,
      }}
    >
      <TitleSlide />
      <AgendaSlide />
      <ArchitectureSlide />
      <QueryLifecycleSlide />
      <StorageEngineSlide />
      <InnoDBSlide />
      <TransactionsSlide />
      <IndexesSlide />
      <ReplicationSlide />
      <PerformanceSlide />
      <ConclusionSlide />
    </Deck>
  );
}
