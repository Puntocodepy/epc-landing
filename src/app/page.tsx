'use client';
import {useState} from 'react';

import ContactComponent from '@/components/ContactComponent';
import CtaComponent from '@/components/CtaComponent';
import HeroComponent from '@/components/HeroComponent';
import Loader from '@/components/shared/page-loader';
import ServiceComponents from '@/components/ServiceComponents';
import TeamComponent from '@/components/TeamComponent';
import WorksComponent from '@/components/WorksComponent';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if(isLoading) {
    return (<Loader setIsLoading={setIsLoading}/>);
  }

  return (
    <div className="fade-in">
      <HeroComponent/>
      <ServiceComponents/>
      <WorksComponent/>
      <CtaComponent/>
      <TeamComponent/>
      <ContactComponent/>
    </div>
  );
}
