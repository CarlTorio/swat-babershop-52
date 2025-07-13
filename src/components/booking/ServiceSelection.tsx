
import { BookingData } from '../BookingDialog';

interface ServiceSelectionProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onNext: () => void;
  onClose: () => void;
}

const services = [
  {
    id: '1',
    name: 'Sharp & Styled',
    price: 149,
    duration: 45,
    description: 'Modern / Classic Haircut'
  },
  {
    id: '2',
    name: 'Clean Cut Duo',
    price: 180,
    duration: 60,
    description: 'Haircut + Shave'
  },
  {
    id: '3',
    name: 'Korean Perms',
    price: 850,
    duration: 120,
    description: 'Light Perm, Medium Perm, Afro Perm'
  },
  {
    id: '4',
    name: 'SWAT Signature Edge',
    price: 200,
    duration: 90,
    description: 'Haircut + Hair Art'
  },
  {
    id: '5',
    name: 'Little Trooper',
    price: 170,
    duration: 30,
    description: 'Kids Classic / Modern Haircuts'
  }
];

const ServiceSelection = ({ bookingData, setBookingData }: ServiceSelectionProps) => {
  const handleServiceSelect = (service: typeof services[0]) => {
    setBookingData({
      ...bookingData,
      service: {
        id: service.id,
        name: service.name,
        price: service.price,
        duration: service.duration,
      },
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-300 text-center">
        Select the service you would like to book
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceSelect(service)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
              bookingData.service?.id === service.id
                ? 'border-barbershop-gold bg-barbershop-gold/10'
                : 'border-gray-600 hover:border-barbershop-gold/50'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>
              <div className="text-right">
                <p className="text-barbershop-gold font-bold text-lg">
                  ₱{service.price}
                </p>
                <p className="text-gray-400 text-sm">
                  {service.duration} min
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
