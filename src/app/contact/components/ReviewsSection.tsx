import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  image: string;
  alt: string;
}

const reviews: Review[] = [
  {
    id: 'review_1',
    name: 'Priya Sharma',
    rating: 5,
    review: 'Absolutely amazing service! The astrologer was very accurate and helpful.',
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Priya Sharma smiling customer with traditional jewelry',
  },
  {
    id: 'review_2',
    name: 'Rajesh Kumar',
    rating: 5,
    review: 'Life-changing experience. Highly recommend to everyone seeking guidance.',
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Rajesh Kumar satisfied customer with glasses and formal attire',
  },
  {
    id: 'review_3',
    name: 'Anita Desai',
    rating: 5,
    review: 'Professional and compassionate. Got clarity on many life decisions.',
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Anita Desai happy customer with elegant traditional saree',
  },
  {
    id: 'review_4',
    name: 'Vikram Singh',
    rating: 5,
    review: 'Very knowledgeable astrologers. The predictions were spot on!',
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Vikram Singh confident customer with modern casual wear',
  },
  {
    id: 'review_5',
    name: 'Meera Iyer',
    rating: 5,
    review: 'Excellent service and very affordable. Will definitely come back.',
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Meera Iyer pleased customer with warm smile and traditional bindi',
  },
  {
    id: 'review_6',
    name: 'Anil Verma',
    rating: 5,
    review: 'The Kundli matching service helped me find my perfect life partner!',
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Anil Verma grateful customer with spectacles and cheerful expression',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal will-animate">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-4">
            Customer Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found guidance through Bhavishya Darpan
          </p>
        </div>

        {/* Circular Review Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex flex-col items-center text-center scroll-reveal will-animate`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Circular Image */}
              <div className="relative mb-4 group">
                <AppImage
                  src={review.image}
                  alt={review.alt}
                  className="w-32 h-32 rounded-full object-cover border-4 border-secondary shadow-lg group-hover:shadow-2xl transition-shadow"
                />
                {/* Star Rating Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Icon name="StarIcon" size={14} variant="solid" />
                  <span className="text-xs font-bold">{review.rating}.0</span>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-semibold text-foreground mb-2">
                {review.name}
              </h3>

              {/* Review */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 scroll-reveal will-animate delay-500">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 shadow-md">
            <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
            <span className="font-semibold text-foreground">
              Trusted by 10,000+ Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}