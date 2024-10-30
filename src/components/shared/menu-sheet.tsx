import Link from 'next/link';
import {Menu} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {useState} from 'react';

const MenuSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="pt-8">
            <Link href="#home" onClick={handleLinkClick}>Inicio</Link>
          </SheetTitle>
          <SheetDescription className="pt-6">
            <ul className="list-none flex flex-col gap-10">
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <Link href="#services">Servicios</Link>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <Link href="#works">Obras</Link>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <Link href="#teams">Equipo</Link>
              </li>
              <li className="text-xl text-white" onClick={handleLinkClick}>
                <Link href="#contact">Contacto</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;