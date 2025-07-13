import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingDialog from './BookingDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const navigation = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-barbershop-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/lovable-uploads/653fef1c-76ed-485f-b238-a70f78bad3e8.png" alt="SWAT BARBER SHOP" className="h-12" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map(item => <a key={item.name} href={item.href} className="text-gray-300 hover:text-barbershop-gold transition-colors duration-200 font-medium">
                  {item.name}
                </a>)}
            </nav>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-barbershop-gold hover:bg-barbershop-bronze text-black font-semibold"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white transition-colors">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-barbershop-charcoal/95 backdrop-blur-sm rounded-lg mt-2">
                {navigation.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-300 hover:text-barbershop-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>)}
                <div className="px-3 py-2">
                  <Button 
                    onClick={() => {
                      setIsBookingOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-barbershop-gold hover:bg-barbershop-bronze text-black font-semibold"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>}
        </div>
      </header>

      <BookingDialog 
        open={isBookingOpen} 
        onOpenChange={setIsBookingOpen} 
      />
    </>
  );
};

export default Header;
