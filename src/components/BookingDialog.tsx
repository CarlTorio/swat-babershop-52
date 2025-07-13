
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BarberSelection from './booking/BarberSelection';
import ServiceSelection from './booking/ServiceSelection';
import DateTimeSelection from './booking/DateTimeSelection';
import BookingConfirmation from './booking/BookingConfirmation';
import BookingSuccess from './booking/BookingSuccess';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface BookingData {
  barber: {
    id: string;
    name: string;
    image: string;
  } | null;
  service: {
    id: string;
    name: string;
    price: number;
    duration: number;
  } | null;
  date: Date | null;
  time: string | null;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    barber: null,
    service: null,
    date: null,
    time: null,
  });

  const steps = [
    { title: 'Select Barber', component: BarberSelection },
    { title: 'Choose Service', component: ServiceSelection },
    { title: 'Select Date & Time', component: DateTimeSelection },
    { title: 'Confirmation', component: BookingConfirmation },
    { title: 'Booking Confirmed', component: BookingSuccess },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setBookingData({
      barber: null,
      service: null,
      date: null,
      time: null,
    });
    onOpenChange(false);
  };

  const CurrentStepComponent = steps[currentStep].component;

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return bookingData.barber !== null;
      case 1:
        return bookingData.service !== null;
      case 2:
        return bookingData.date !== null && bookingData.time !== null;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-barbershop-charcoal border-barbershop-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-barbershop-gold text-center">
            {steps[currentStep].title}
          </DialogTitle>
          
          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index <= currentStep ? 'bg-barbershop-gold' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="mt-6">
          <CurrentStepComponent
            bookingData={bookingData}
            setBookingData={setBookingData}
            onNext={handleNext}
            onClose={handleClose}
          />
        </div>

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-6 pt-4 border-t border-barbershop-gold/20">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 bg-barbershop-gold hover:bg-barbershop-bronze text-black"
            >
              <span>{currentStep === 3 ? 'Confirm Booking' : 'Next'}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
