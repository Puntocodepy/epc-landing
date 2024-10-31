'use client';
import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {getWorks} from '@/apis/works.ap';


const WorksComponent = () => {
  const works = getWorks();

  return (
    <section id="works" className="works py-12 px-8 lg:py-20">
      <div className="container text-center px-10">
        <h2 className="sub-title">Obras</h2>
        <p className="lg:px-40 mb-8">
          Empresas líderes confían en nosotros para la ejecución de sus proyectos más importantes. Aquí algunos de los
          trabajos que hemos realizado.
        </p>
        <div className="row">


          <Carousel className="w-full">
            <CarouselContent>
              {works.map((work) => (
                <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="relative rounded-lg overflow-hidden border border-black">
                    {/* Imagen de fondo */}
                    <div
                      className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${work.image})` }}
                    />

                    {/* Capa de degradado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    {/* Contenido del card */}
                    <CardContent className="relative h-96 p-4 flex flex-col justify-end z-10">
                      <h3 className="text-xl font-bold text-white mb-1">{work.name}</h3>
                      <p className="text-gray-100 text-sm mb-6">{work.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WorksComponent;