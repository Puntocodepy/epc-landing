import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


const WorksComponent = () => {


  return (
    <section className="works py-12 lg:py-20">
      <div className="container text-center px-10">
        <h2 className="sub-title">Obras</h2>
        <p className="lg:px-40 mb-8">
          Empresas líderes confían en nosotros para la ejecución de sus proyectos más importantes. Aquí algunos de los
          trabajos que hemos realizado.
        </p>
        <div className="row">


          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({length: 8}).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
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