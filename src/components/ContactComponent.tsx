import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import {Separator} from '@/components/ui/separator';

const ContactComponent = () => {
  return (
    <section id="contact" className="services py-12 lg:py-20">
      <div className="container px-10">
        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex flex-col items-start">
            <Image
              loading="lazy"
              src="/images/epc-logo.svg"
              width={150}
              height={30}
              alt="epc-footer"
            />
            <p className="mt-5 max-w-80 text-xs">
              Síguenos en nuestras redes para ver nuestras últimas actualizaciones y proyectos.
            </p>

            <div className="flex gap-1 mt-3">
              <a href="https://www.instagram.com/epceas/" target="_blank">
                <Icon name="bxl-instagram" size="1.2rem"/>
              </a>
              <a href="https://puntocode.com.py" target="_blank">
                <Icon name="bxl-linkedin" size="1.2rem"/>
              </a>
            </div>
          </div>

          {/*  Contactanos ----------------------*/}
          <div className="flex flex-col justify-end mt-4 md:mt-0 md:items-end">
            <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
            <a className="text-xs mb-1" href="tel:+595976549903">+595 976 549 903</a>
            <a className="text-xs mb-1" href="mailto:presupuestos@epc.com.py">presupuestos@epc.com.py</a>
            <p className="text-xs mb-1">Direccion particular con enlace al mapa</p>
          </div>
        </div>

        <Separator className="my-6 bg-gray-400" />

        <div className="flex flex-col md:flex-row text-center justify-between">
          <p className="text-xs">
            {new Date().getFullYear()} EPC EAS® - Todos los derechos reservados.
          </p>
          <p className="flex text-xs items-center justify-center">
            Desarrollado por
            <a href="https://puntocode.com.py" target="_blank">
              <Image
                loading="lazy"
                src="/images/puntocode-logo.svg"
                width={80}
                height={15}
                alt="Puntocode"
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;