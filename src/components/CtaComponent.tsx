import {AnimatedButton} from '@/components/ui/animated-button';
import Icon from '@/components/ui/Icon';
import ButtonBudget from '@/components/shared/button-budget';
import React from 'react';

const CtaComponent = () => {
  return (
    <section className="cta bg-gray-50 py-12">
      <div className="container px-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-gray-950 font-bold text-2xl mb-4">
              ¿Listo para transformar tu próximo proyecto?
            </h2>
            <p className="text-gray-950">
              Nuestro equipo está listo para brindarte las mejores soluciones en infraestructura. Contáctanos y recibe
              un presupuesto en menos de 24 horas,. O habla con nuestros técnicos para una consulta personalizada
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6 lg:mt-0">
            <ButtonBudget isOutline={true} />
            <AnimatedButton className="p-6 border min-w-72 lg:min-w-60 bg-gray-50">
              <Icon name="bxl-whatsapp" />
              Contácta con un técnico
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaComponent;