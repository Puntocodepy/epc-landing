import {Service} from '@/apis/services.api';

type ServiceCardProps = { service: Service };
const ServiceCard = ({service}: ServiceCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="text-center">
        <i className={service.icon}></i>
      </div>
      <h3 className="text-lg font-bold">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;