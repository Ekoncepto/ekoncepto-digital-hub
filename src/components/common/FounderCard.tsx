import React from 'react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { Linkedin, Instagram } from 'lucide-react';

interface Founder {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
  instagram: string;
}

interface FounderCardProps {
  founder: Founder;
}

export const FounderCard: React.FC<FounderCardProps> = ({ founder }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="relative w-40 h-40 mb-4">
        <OptimizedImage
          src={founder.image}
          alt={founder.name}
          widths={[160, 320]}
          sizes="160px"
          className="rounded-full"
          imgClassName="rounded-full object-cover"
          width={160}
          height={160}
        />
      </div>
      <h3 className="text-2xl font-bold tracking-tight">{founder.name}</h3>
      <p className="text-primary font-medium">{founder.title}</p>
      <p className="mt-4 text-muted-foreground max-w-md">{founder.bio}</p>
      <div className="flex mt-4 space-x-4">
        {founder.linkedin && (
          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name} on LinkedIn`}>
            <Linkedin className="size-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        )}
        {founder.instagram && (
          <a href={founder.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name} on Instagram`}>
            <Instagram className="size-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        )}
      </div>
    </div>
  );
};

export default FounderCard;
