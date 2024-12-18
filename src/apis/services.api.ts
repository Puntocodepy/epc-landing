export type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

/**
 * Returns an array of Service objects.
 */
const getServices = (): Service[] => {
  return [
    {
      id: 1,
      title: 'Excavaciones para Edificaciones',
      description: 'Excavaciones de precisión para cualquier tipo de proyecto',
      icon: '/images/services/excavation.svg',
    },
    {
      id: 2,
      title: 'Movimiento de Suelo y Pavimento',
      description: 'Soluciones duraderas para pavimentos rígidos y flexibles',
      icon: '/images/services/tractor.svg',
    },
    {
      id: 3,
      title: 'Fiscalización de Obra',
      description: 'Supervisión técnica para asegurar que los proyectos se desarrollen con los más altos estándares',
      icon: '/images/services/work.svg',
    },
    {
      id: 4,
      title: 'Estabilización Química de Suelos',
      description: 'Mejora de suelos blandos con técnicas avanzadas de suelo cemento y suelo cal',
      icon: '/images/services/wall.svg',
    }
  ];
};

export { getServices };
