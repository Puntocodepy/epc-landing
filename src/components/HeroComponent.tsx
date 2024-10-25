import NavbarComponent from '@/components/ui/navbar';
import { AnimatedButton } from '@/components/ui/animated-button';

const HeroComponent = () => {
  return (
    <section className="hero bg-[url('/images/background.webp')] bg-center bg-cover bg-no-repeat">
      <NavbarComponent />
      <div className="container px-10 grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h5 className="mb-3 font-domine text-md md:text-2xl font-light">
            Especialistas en construcciones
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8">
            Construimos tus proyectos con precisión y confianza
          </h1>
          <p className="mb-10 font-light">
            Ofrecemos soluciones de construcción que garantizan durabilidad, precisión y ahorro para tus proyectos más ambiciosos.
          </p>

          <AnimatedButton className="max-w-96 py-6">
            Solicita tu presupuesto gratuito
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;