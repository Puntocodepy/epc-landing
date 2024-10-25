import {Card} from '@/components/ui/card';

const TeamComponent = () => {

  const teams = [
    {
      id: 1,
      name: 'JAZMÍN SUÁREZ',
      description: ['Ingeniera Civil', 'Depto. Financiero', 'Obras'],
    },
    {
      id: 2,
      name: 'ANTONIO RAMOS',
      description: ['Ingeniero Civil', 'Depto. Técnico', 'Obras'],
    },
    {
      id: 3,
      name: 'PABLO MARTÍNEZ',
      description: ['Depto. Técnico', 'Obras'],
    },
    {
      id: 4,
      name: 'EZVALO',
      description: ['Administración Tercerizada'],
    }
  ];

  return (
    <section className="bg-secondary py-12 lg:py-20">
      <div className="container text-center px-10">
        <h2 className="sub-title">Nuestros Equipo</h2>
        <p className="lg:px-40 mb-8">
          EPC EAS está liderada por expertos con años de experiencia en los proyectos más desafiantes del país.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {teams.map((team) => (
            <div className="flex flex-col">
              <Card key={team.id} className="card-image mb-6">
                {/*<CardImage*/}
                {/*  src="/images/team.webp"*/}
                {/*  alt="team"*/}
                {/*  className="rounded-full"*/}
                {/*/>*/}
              </Card>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold mb-4">{team.name}</h3>
                {team.description.map((description, index) => (
                  <p key={index} className="text-gray-100">{description}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;