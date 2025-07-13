
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeAfterPhotos = [
    {
      id: 1,
      title: "Modern Fade Transformation",
      before: "/lovable-uploads/40909bf9-06c3-4a40-8e82-d48b4bdf7c99.png",
      after: "/lovable-uploads/6819fdfb-084e-450b-994c-2d99b87745d0.png",
      description: "Clean modern fade with stylish finish"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPhotos.length) % beforeAfterPhotos.length);
  };

  const currentPhoto = beforeAfterPhotos[currentIndex];

  return (
    <div className="min-h-screen bg-barbershop-black">
      {/* Header */}
      <div className="bg-barbershop-charcoal border-b border-barbershop-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white font-serif">Before & After Gallery</h1>
              <p className="text-gray-300 mt-2">See the amazing transformations at SWAT Barber Shop</p>
            </div>
            <Link to="/">
              <Button variant="outline" className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-black">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2 font-serif">
                {currentPhoto.title}
              </h2>
              <p className="text-gray-300">{currentPhoto.description}</p>
            </div>

            {/* Before & After Images */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-8">
              {/* Before */}
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-barbershop-gold text-center">BEFORE</h3>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={currentPhoto.before}
                    alt="Before haircut"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-barbershop-gold text-center">AFTER</h3>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={currentPhoto.after}
                    alt="After haircut"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-green-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation (if multiple photos) */}
            {beforeAfterPhotos.length > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <Button
                  onClick={prevPhoto}
                  variant="outline"
                  className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-white">
                  {currentIndex + 1} of {beforeAfterPhotos.length}
                </span>
                
                <Button
                  onClick={nextPhoto}
                  variant="outline"
                  className="border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-black"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-barbershop-gold/10 rounded-lg p-6 border border-barbershop-gold/20">
                <h3 className="text-xl font-semibold text-white mb-2">Ready for Your Transformation?</h3>
                <p className="text-gray-300 mb-4">Book your appointment today and experience the SWAT difference</p>
                <Link to="/">
                  <Button className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-semibold">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
