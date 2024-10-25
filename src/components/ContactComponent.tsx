import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import {Separator} from '@/components/ui/separator';

const ContactComponent = () => {
  return (
    <section className="services bg-secondary py-12 lg:py-20">
      <div className="container px-10">
        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex flex-col items-start">
            <Image src="/images/epc-logo.svg" width={150} height={50} alt="logo"/>
            <p className="mt-5 max-w-80 text-xs">
              Síguenos en nuestras redes para ver nuestras últimas actualizaciones y proyectos.
            </p>

            <div className="flex gap-1 mt-3">
              <Icon name="bxl-instagram" size="1.2rem" />
              <Icon name="bxl-linkedin" size="1.2rem" />
            </div>
          </div>

          {/*  Contactanos ----------------------*/}
          <div className="flex flex-col justify-end mt-4 md:mt-0 md:items-end">
            <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
            <p className="text-xs mb-1">+595 976 549 903</p>
            <p className="text-xs mb-1">presupuestos@epc.com.py</p>
            <p className="text-xs mb-1">Direccion particular con enlace al mapa</p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-400" />

        <div className="flex flex-col md:flex-row text-center justify-between">
          <p>
            2024 EPC EAS® - Todos los derechos reservados.
          </p>
          <p>Desarrollado por <a href="https://puntocode.com.py">PUNTOCODE</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;