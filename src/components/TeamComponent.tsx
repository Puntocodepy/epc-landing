import Image from 'next/image';
import {getTeams} from '@/apis/teams.api';

const TeamComponent = () => {

  const teams = getTeams();

  return (
    <section id="teams" className="bg-secondary py-12 lg:py-20">
      <div className="container text-center px-10">
        <h2 className="sub-title">Nuestros Equipo</h2>
        <p className="lg:px-40 mb-8">
          EPC EAS está liderada por expertos con años de experiencia en los proyectos más desafiantes del país.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="flex flex-col gap-3 items-center md:items-start">
              <Image
                src={team.image}
                alt={team.name}
                width={200}
                height={200}
              />

              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
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