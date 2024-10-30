import HeroComponent from '@/components/HeroComponent';
import ServiceComponents from '@/components/ServiceComponents';
import WorksComponent from '@/components/WorksComponent';
import TeamComponent from '@/components/TeamComponent';
import CtaComponent from '@/components/CtaComponent';
import ContactComponent from '@/components/ContactComponent';

export default function Home() {
  return (
    <>
      <HeroComponent/>
      <ServiceComponents/>
      <WorksComponent />
      <TeamComponent />
      <CtaComponent />
      <ContactComponent />
    </>
  );
}
