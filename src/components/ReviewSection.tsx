
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  platform: string;
}

const ReviewSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Thomas M.",
      rating: 5,
      date: "15.03.2023",
      text: "Der beste Döner in Neumünster! Die Qualität der Zutaten ist hervorragend und der Service ist immer freundlich. Besonders die Soßen sind ein Traum!",
      platform: "Google"
    },
    {
      id: 2,
      name: "Sarah K.",
      rating: 4.5,
      date: "22.05.2023",
      text: "Sehr leckerer Döner und schneller Service. Die Portionen sind großzügig und das Preis-Leistungs-Verhältnis stimmt. Ein klarer Favorit!",
      platform: "Facebook"
    },
    {
      id: 3,
      name: "Michael L.",
      rating: 5,
      date: "10.07.2023",
      text: "Authentischer Geschmack wie in Berlin! Das Fleisch ist saftig und die Beilagen immer frisch. Definitiv der beste Döner in der Gegend.",
      platform: "Google"
    },
    {
      id: 4,
      name: "Julia B.",
      rating: 4.5,
      date: "05.09.2023",
      text: "Regelmäßiger Kunde hier! Liebe den Dürüm Spezial und die freundliche Atmosphäre. Auch bei viel Betrieb ist die Qualität konstant gut.",
      platform: "Yelp"
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={20} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400" size={20} />);
    }
    
    return stars;
  };

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kundenbewertungen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sehen Sie, was unsere Kunden über Berlin Döner sagen. Wir sind stolz auf unsere Qualität und den Service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-gray-600">{review.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{review.date}</p>
                  <p className="text-sm text-gray-500">via {review.platform}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-lg font-medium">
            Besuchen Sie uns und überzeugen Sie sich selbst von unserer Qualität!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
