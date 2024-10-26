import {Service} from '@/apis/services.api';

type ServiceCardProps = { service: Service };
const ServiceCard = ({service}: ServiceCardProps) => {
  return (
    <div className="mb-6 p-8">
      <div className="text-center">
        <i className={service.icon}></i>
        <h3 className="text-lg font-bold">{service.title}</h3>
        <p className="text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;