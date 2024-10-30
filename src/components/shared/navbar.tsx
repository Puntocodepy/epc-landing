'use client';
import Image from 'next/image';
import Link from 'next/link';
import MenuSheet from '@/components/shared/menu-sheet';
import {useEffect, useState} from 'react';


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
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      section && observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
              <li className={activeSection === 'home' ? 'active' : ''}>
                <Link href="#home">Inicio</Link>
              </li>
              <li className={activeSection === 'services' ? 'active' : ''}>
                <Link href="#services">Servicios</Link>
              </li>
              <li className={activeSection === 'works' ? 'active' : ''}>
                <Link href="#works">Obras</Link>
              </li>
              <li className={activeSection === 'teams' ? 'active' : ''}>
                <Link href="#teams">Equipo</Link>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <Link href="#contact">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <MenuSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;