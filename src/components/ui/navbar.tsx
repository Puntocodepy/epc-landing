'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {AnimatedButton} from '@/components/ui/animated-button';
import {Menu} from 'lucide-react';


const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['home', 'services', 'works', 'teams', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        const activeId = entries.find((entry) => entry.isIntersecting)?.target.id;
        if (activeId) setActiveSection(activeId);
      },
      {threshold: 0.6}
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      section && observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        section && observer.unobserve(section);
      });
    };
  }, []);


  // Render-------------------------------------------------------------------------------------
  return (
    <nav className="p-4 bg-secondary fixed top-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
            <Image
              src="/images/epc-logo.svg"
              width={150}
              height={30}
              alt="EPC Logo"
            />
          </a>

          <div className="!visible mt-2 hidden items-center lg:!flex">
            <ul className="list-none flex gap-10">
              <li className={activeSection === 'home' ? 'font-bold' : ''}>
                <Link href="#home">Inicio</Link>
              </li>
              <li className={activeSection === 'services' ? 'font-bold' : ''}>
                <Link href="#services">Servicios</Link>
              </li>
              <li className={activeSection === 'works' ? 'font-bold' : ''}>
                <Link href="#works">Obras</Link>
              </li>
              <li className={activeSection === 'teams' ? 'font-bold' : ''}>
                <Link href="#teams">Equipo</Link>
              </li>
              <li className={activeSection === 'contact' ? 'font-bold' : ''}>
                <Link href="#contact">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;