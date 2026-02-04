import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AstrologerCardProps {
  astrologer: {
    id: string;
    name: string;
    specialty: string;
    experience: number;
    rating: number;
    consultations: number;
    languages: string[];
    available: boolean;
    image: string;
    alt: string;
  };
}

export default function AstrologerCard({ astrologer }: AstrologerCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:border-primary/50 scroll-reveal will-animate">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative mb-4">
          <AppImage
            src={astrologer.image}
            alt={astrologer.alt}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg"
          />
          {/* Online Status Badge */}
          <div
            className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-card ${
              astrologer.available ? 'bg-success' : 'bg-muted'
            }`}
          />
        </div>

        {/* Name & Specialty */}
        <h3 className="font-serif text-2xl text-card-foreground mb-1 tracking-tight">
          {astrologer.name}
        </h3>
        <p className="text-sm text-card-foreground/60 mb-3">
          {astrologer.specialty}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={`star_${astrologer.id}_${i}`}
              name="StarIcon"
              size={18}
              variant={i < Math.floor(astrologer.rating) ? 'solid' : 'outline'}
              className={
                i < Math.floor(astrologer.rating)
                  ? 'text-secondary' :'text-border'
              }
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-card-foreground">
            {astrologer.rating}
          </span>
        </div>

        {/* Stats */}
        <div className="w-full space-y-2 mb-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-card-foreground/60">Experience:</span>
            <span className="font-semibold text-card-foreground">
              {astrologer.experience} years
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-card-foreground/60">Consultations:</span>
            <span className="font-semibold text-card-foreground">
              {astrologer.consultations.toLocaleString()}+
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-card-foreground/60">Languages:</span>
            <span className="font-semibold text-card-foreground">
              {astrologer.languages.join(', ')}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
          <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
          Chat Now
        </button>
      </div>
    </div>
  );
}