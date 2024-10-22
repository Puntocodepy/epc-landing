import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Menu} from 'lucide-react';

const NavbarComponent = () => {
  return (
    <nav className="p-4 bg-secondary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
            <Image
              src="/images/epc-logo.svg"
              width={150}
              height={50}
              alt="EPC Logo"
            />
          </a>

          <div className="!visible mt-2 hidden items-center lg:!flex">
            <ul className="list-none flex gap-10">
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Obras</li>
              <li>Equipo</li>
              <li>Contacto</li>
            </ul>
          </div>

          <Button className="lg:hidden" variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;