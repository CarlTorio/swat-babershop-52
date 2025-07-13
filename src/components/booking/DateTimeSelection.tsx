
import { useState } from 'react';
import { format, addDays, isSameDay, startOfToday } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { BookingData } from '../BookingDialog';

interface DateTimeSelectionProps {
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
  onNext: () => void;
  onClose: () => void;
}

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
];

const DateTimeSelection = ({ bookingData, setBookingData }: DateTimeSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(bookingData.date || undefined);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setBookingData({
        ...bookingData,
        date,
        time: null, // Reset time when date changes
      });
    }
  };

  const handleTimeSelect = (time: string) => {
    setBookingData({
      ...bookingData,
      time,
    });
  };

  const today = startOfToday();
  const maxDate = addDays(today, 30);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="w-6 h-6 rounded-full bg-barbershop-gold text-black text-sm flex items-center justify-center mr-2">
              1
            </span>
            Select Date
          </h3>
        </div>
        
        <div className="bg-barbershop-black/50 p-4 rounded-lg">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={(date) => date < today || date > maxDate}
            className="rounded-md border-0 pointer-events-auto"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center text-barbershop-gold",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-barbershop-gold hover:bg-barbershop-gold/20",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-barbershop-gold rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "h-9 w-9 text-center text-sm p-0 relative text-white hover:bg-barbershop-gold/20",
              day: "h-9 w-9 p-0 font-normal hover:bg-barbershop-gold/20 rounded-md",
              day_selected: "bg-barbershop-gold text-black hover:bg-barbershop-gold hover:text-black",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-gray-600 opacity-50",
              day_disabled: "text-gray-600 opacity-50",
            }}
          />
        </div>
        
        <div className="text-sm text-gray-400 space-y-1">
          <p>• Available appointments up to 30 days in advance</p>
          <p>• Select a date to view available time slots</p>
        </div>
      </div>

      {/* Time Slots Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="w-6 h-6 rounded-full bg-barbershop-gold text-black text-sm flex items-center justify-center mr-2">
              2
            </span>
            Available Time
          </h3>
          {selectedDate && (
            <span className="text-barbershop-gold text-sm">
              {format(selectedDate, 'EEEE, MMMM d')}
            </span>
          )}
        </div>

        {selectedDate ? (
          <div className="max-h-96 overflow-y-auto space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`p-3 rounded-lg border text-sm transition-all duration-200 ${
                    bookingData.time === time
                      ? 'border-barbershop-gold bg-barbershop-gold text-black'
                      : 'border-gray-600 text-white hover:border-barbershop-gold/50 hover:bg-barbershop-gold/10'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-lg">
            <p className="text-gray-400">Please select a date first</p>
          </div>
        )}

        <div className="text-sm text-gray-400 space-y-1">
          <p>• Each appointment will be done not less than 30 minutes</p>
          <p>• Office hours: 9:00 AM - 7:00 PM (Mon-Sat)</p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-barbershop-gold"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <span>Booked</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Unavailable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
