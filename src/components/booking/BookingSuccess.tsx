
import { format } from 'date-fns';
import { CheckCircle, MapPin, Phone, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingData } from '../BookingDialog';

interface BookingSuccessProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onNext: () => void;
  onClose: () => void;
}

const BookingSuccess = ({ bookingData, onClose }: BookingSuccessProps) => {
  const bookingId = `SWB${Date.now().toString().slice(-6)}`;

  return (
    <div className="text-center space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      {/* Success Message */}
      <div>
        <h2 className="text-2xl font-serif text-barbershop-gold mb-2">
          Booking Confirmed!
        </h2>
        <p className="text-gray-300">
          Your appointment has been successfully booked
        </p>
        <p className="text-barbershop-gold font-mono text-sm mt-2">
          Booking ID: {bookingId}
        </p>
      </div>

      {/* Booking Details Card */}
      <div className="bg-barbershop-black/50 rounded-lg p-6 space-y-4 text-left">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm">Barber</p>
            <p className="text-white font-semibold">{bookingData.barber?.name}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Service</p>
            <p className="text-white font-semibold">{bookingData.service?.name}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Date</p>
            <p className="text-white font-semibold">
              {bookingData.date && format(bookingData.date, 'MMMM d, yyyy')}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Time</p>
            <p className="text-white font-semibold">{bookingData.time}</p>
          </div>
        </div>
      </div>

      {/* Important Reminders */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-left">
        <div className="flex items-center space-x-2 mb-3">
          <AlertCircle className="h-5 w-5 text-orange-500" />
          <h3 className="text-orange-500 font-semibold">Important Reminders</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>Please arrive 10 minutes before your appointment time</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>Bring a valid ID for verification</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>Payment is due at the time of service</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>Cancellations must be made 24 hours in advance</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>Late arrivals may result in shortened service time</span>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="bg-barbershop-charcoal/50 rounded-lg p-4">
        <h3 className="text-barbershop-gold font-semibold mb-3 text-center">
          SWAT Barber Shop
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-4 w-4 text-barbershop-gold" />
            <span className="text-gray-300">123 Main Street, Downtown</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-4 w-4 text-barbershop-gold" />
            <span className="text-gray-300">(555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-4 w-4 text-barbershop-gold" />
            <span className="text-gray-300">Mon-Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <Button
        onClick={onClose}
        className="w-full bg-barbershop-gold hover:bg-barbershop-bronze text-black font-semibold"
      >
        Close
      </Button>
    </div>
  );
};

export default BookingSuccess;
