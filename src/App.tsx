import { Deck } from '@revealjs/react';

import TitleSlide from './slides/TitleSlide';
import MembersSlide from './slides/MembersSlide';
import AgendaSlide from './slides/AgendaSlide';
import ArchitectureSlide from './slides/ArchitectureSlide';
import ServerLayerSlide from './slides/ServerLayerSlide';
import StorageEngineSlide from './slides/StorageEngineSlide';
import InnoDBVsMyISAMSlide from './slides/InnoDBVsMyISAMSlide';
import AccountSlide from './slides/AccountSlide';
import AccessControlSlide from './slides/AccessControlSlide';
import PrivilegeLevelsSlide from './slides/PrivilegeLevelsSlide';
import GrantRevokeSlide from './slides/GrantRevokeSlide';
import PrivilegeSecuritySlide from './slides/PrivilegeSecuritySlide';
import LogOverviewSlide from './slides/LogOverviewSlide';
import BinlogIntroSlide from './slides/BinlogIntroSlide';
import BinlogFormatSlide from './slides/BinlogFormatSlide';
import SlowLogParamsSlide from './slides/SlowLogParamsSlide';
import SlowLogCaseStudySlide from './slides/SlowLogCaseStudySlide';
import TransactionSlide from './slides/TransactionSlide';
import AtomicitySlide from './slides/AtomicitySlide';
import ConsistencySlide from './slides/ConsistencySlide';
import IsolationPhenomenaSlide from './slides/IsolationPhenomenaSlide';
import IsolationLevelsSlide from './slides/IsolationLevelsSlide';
import DurabilitySlide from './slides/DurabilitySlide';
import LowRamSlide from './slides/LowRamSlide';
import Demo1InstallSlide from './slides/Demo1InstallSlide';
import Demo1UserSlide from './slides/Demo1UserSlide';
import Demo2SlowLogSlide from './slides/Demo2SlowLogSlide';
import Demo3BackupSlide from './slides/Demo3BackupSlide';
import Demo4TroubleshootSlide from './slides/Demo4TroubleshootSlide';
import ConclusionSlide from './slides/ConclusionSlide';
import ReferencesSlide from './slides/ReferencesSlide';
import ThanksSlide from './slides/ThanksSlide';

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
      <MembersSlide />
      <AgendaSlide />
      <ArchitectureSlide />
      <ServerLayerSlide />
      <StorageEngineSlide />
      <InnoDBVsMyISAMSlide />
      <AccountSlide />
      <AccessControlSlide />
      <PrivilegeLevelsSlide />
      <GrantRevokeSlide />
      <PrivilegeSecuritySlide />
      <LogOverviewSlide />
      <BinlogIntroSlide />
      <BinlogFormatSlide />
      <SlowLogParamsSlide />
      <SlowLogCaseStudySlide />
      <TransactionSlide />
      <AtomicitySlide />
      <ConsistencySlide />
      <IsolationPhenomenaSlide />
      <IsolationLevelsSlide />
      <DurabilitySlide />
      <LowRamSlide />
      <Demo1InstallSlide />
      <Demo1UserSlide />
      <Demo2SlowLogSlide />
      <Demo3BackupSlide />
      <Demo4TroubleshootSlide />
      <ConclusionSlide />
      <ReferencesSlide />
      <ThanksSlide />
    </Deck>
  );
}
