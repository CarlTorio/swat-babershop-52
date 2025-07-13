
import { BookingData } from '../BookingDialog';

interface BarberSelectionProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onNext: () => void;
  onClose: () => void;
}

const barbers = [
  {
    id: '1',
    name: 'Juan',
    image: '/lovable-uploads/2a38f175-44b4-4f55-b321-b5ec3ee92bdf.png',
    specialties: ['Classic Cuts', 'Beard Styling', 'Hot Towel Shave'],
    experience: '8 years experience'
  },
  {
    id: '2',
    name: 'James',
    image: '/lovable-uploads/2a38f175-44b4-4f55-b321-b5ec3ee92bdf.png',
    specialties: ['Modern Styles', 'Fade Cuts', 'Hair Washing'],
    experience: '5 years experience'
  },
  {
    id: '3',
    name: 'Marcoleta',
    image: '/lovable-uploads/2a38f175-44b4-4f55-b321-b5ec3ee92bdf.png',
    specialties: ['Traditional Cuts', 'Mustache Grooming', 'Scalp Treatment'],
    experience: '12 years experience'
  }
];

const BarberSelection = ({ bookingData, setBookingData }: BarberSelectionProps) => {
  const handleBarberSelect = (barber: typeof barbers[0]) => {
    setBookingData({
      ...bookingData,
      barber: {
        id: barber.id,
        name: barber.name,
        image: barber.image,
      },
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-300 text-center">
        Choose your preferred barber for your appointment
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            onClick={() => handleBarberSelect(barber)}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              bookingData.barber?.id === barber.id
                ? 'border-barbershop-gold bg-barbershop-gold/10'
                : 'border-gray-600 hover:border-barbershop-gold/50'
            }`}
          >
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-barbershop-gold">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-serif text-white mb-2">
                Barber #{barber.id} - {barber.name}
              </h3>
              
              <p className="text-barbershop-gold text-sm mb-3">
                {barber.experience}
              </p>
              
              <div className="space-y-1">
                {barber.specialties.map((specialty, index) => (
                  <p key={index} className="text-gray-400 text-sm">
                    • {specialty}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberSelection;
