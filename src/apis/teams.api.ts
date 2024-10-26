const getTeams = () => {
  return [
    {
      id: 1,
      name: 'JAZMÍN SUÁREZ',
      description: ['Ingeniera Civil', 'Depto. Financiero', 'Obras'],
      image: '/images/teams/jaz.png'
    },
    {
      id: 2,
      name: 'ANTONIO RAMOS',
      description: ['Ingeniero Civil', 'Depto. Técnico', 'Obras'],
      image: '/images/teams/antonio.png'
    },
    {
      id: 3,
      name: 'PABLO MARTÍNEZ',
      description: ['Depto. Técnico', 'Obras'],
      image: '/images/teams/martinez.png'
    },
    {
      id: 4,
      name: 'EZVALO',
      description: ['Administración Tercerizada'],
      image: '/images/teams/ezvalo.png'
    }
  ];
};

export { getTeams };