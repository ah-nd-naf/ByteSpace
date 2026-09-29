import { logoPartners } from '../assets/images';
import Container from './Container';

export default function PartnerLogos({ className = '' }) {
  return (
    <section className={`w-full bg-[#F5F5F6] py-8 sm:py-10 border-y border-[#E5E6E8] ${className}`}>
      <Container className="flex items-center justify-center overflow-x-auto">
        <img
          src={logoPartners}
          alt="Trusted Partner Logos"
          className="h-8 md:h-[42px] max-w-full w-auto object-contain select-none"
        />
      </Container>
    </section>
  );
}
