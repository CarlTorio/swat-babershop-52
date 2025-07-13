import { format } from 'date-fns';
import { User, Scissors, Calendar, Clock, DollarSign } from 'lucide-react';
import { BookingData } from '../BookingDialog';

interface BookingConfirmationProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onNext: () => void;
  onClose: () => void;
}

const BookingConfirmation = ({ bookingData }: BookingConfirmationProps) => {
  return (
    <div className="space-y-6">
      <p className="text-gray-300 text-center">
        Please review your booking details before confirming
      </p>

      <div className="bg-barbershop-black/50 rounded-lg p-6 space-y-6">
        {/* Barber Info */}
        <div className="flex items-center space-x-4 p-4 bg-barbershop-charcoal/50 rounded-lg">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-barbershop-gold">
            <img
              src={bookingData.barber?.image}
              alt={bookingData.barber?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-barbershop-gold" />
              <span className="text-white font-semibold">Your Barber</span>
            </div>
            <p className="text-barbershop-gold">
              {bookingData.barber?.name}
            </p>
          </div>
        </div>

        {/* Service Info */}
        <div className="flex items-center space-x-4 p-4 bg-barbershop-charcoal/50 rounded-lg">
          <Scissors className="h-6 w-6 text-barbershop-gold" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Service</p>
                <p className="text-barbershop-gold">
                  {bookingData.service?.name}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-barbershop-gold" />
                  <span className="text-barbershop-gold font-bold">
                    ₱{bookingData.service?.price}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-gray-400 text-sm">
                    {bookingData.service?.duration} min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date & Time Info */}
        <div className="flex items-center space-x-4 p-4 bg-barbershop-charcoal/50 rounded-lg">
          <Calendar className="h-6 w-6 text-barbershop-gold" />
          <div className="flex-1">
            <p className="text-white font-semibold">Date & Time</p>
            <p className="text-barbershop-gold">
              {bookingData.date && format(bookingData.date, 'EEEE, MMMM d, yyyy')}
            </p>
            <p className="text-barbershop-gold">
              {bookingData.time}
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-barbershop-gold/10 border border-barbershop-gold/30 rounded-lg p-4">
        <h3 className="text-barbershop-gold font-semibold mb-2">Booking Summary</h3>
        <div className="flex justify-between items-center">
          <span className="text-white">Total Amount:</span>
          <span className="text-barbershop-gold font-bold text-xl">
            ₱{bookingData.service?.price}
          </span>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          Payment will be collected at the barbershop
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
