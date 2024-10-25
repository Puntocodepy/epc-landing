'use client';
import ServiceCard from '@/components/ui/service-card';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {Collapsible,  CollapsibleContent,  CollapsibleTrigger} from '@/components/ui/collapsible';
import {getServices} from '@/apis/services.api';
import {useState} from 'react';

const ServicesComponent = () => {
  const services = getServices();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="services" className="services bg-secondary py-12 lg:py-20">
      <div className="container text-center px-10">
        <h2 className="sub-title">Nuestros servicios</h2>
        <p className="lg:px-40 mb-8">
          En EPC EAS, combinamos años de experiencia con tecnología avanzada para ofrecer soluciones integrales en el
          sector de la construcción. Nos enfocamos en optimizar cada proyecto, reduciendo tiempos y costos sin
          comprometer la calidad, para garantizar resultados eficientes y duraderos.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </CollapsibleContent>
          <CollapsibleTrigger>
            {isOpen
              ? <span className="flex"> Ver menos servicios <ChevronUp /> </span>
              : <span className="flex"> Ver más servicios <ChevronDown /> </span>
            }
          </CollapsibleTrigger>
        </Collapsible>

      </div>
    </section>
  );
};

export default ServicesComponent;