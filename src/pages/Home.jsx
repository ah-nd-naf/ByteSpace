import { Link } from 'react-router-dom';
import Container from '../components/Container';
import PartnerLogos from '../components/PartnerLogos';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section Shell with Background Grid & Lime Circle */}
      <section className="relative w-full bg-hero-grid overflow-hidden text-white py-20 lg:py-28">
        <div className="hero-lime-circle scale-75 origin-top hidden lg:block" />

        <Container className="relative z-10 text-center flex flex-col items-center">
          <span className="inline-block bg-[#CBFC01] text-[#242528] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Online Course Marketplace
          </span>

          <h1 className="text-heading-l text-4xl sm:text-5xl lg:text-7xl font-semibold max-w-4xl tracking-tight leading-[1.15]">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mt-6 text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Discover your passion, build your skills, and unlock your potential with expert-led courses designed for your career growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/search"
              className="bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-base px-8 py-3.5 rounded-[12px] transition-all active:scale-95 shadow-md"
            >
              Explore Courses
            </Link>
            <Link
              to="/register"
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-base px-8 py-3.5 rounded-[12px] border border-white/20 transition-all active:scale-95"
            >
              Join as Creator
            </Link>
          </div>
        </Container>
      </section>

      {/* Partner Logos Strip */}
      <section className="border-b border-[#E5E6E8]">
        <PartnerLogos />
      </section>

      {/* Section Placeholders */}
      <section className="py-20 bg-[#FAFAFA]">
        <Container className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#003BE2] uppercase tracking-wider">
                Explore Top Content
              </span>
              <h2 className="text-3xl font-semibold text-[#242528] mt-1">
                Featured Courses
              </h2>
            </div>
            <Link to="/search" className="text-sm font-semibold text-[#003BE2] hover:underline">
              View All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white p-6 rounded-[24px] border border-[#E5E6E8] shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 bg-[#F5F5F6] rounded-[16px] mb-4 flex items-center justify-center text-[#82868E] text-sm">
                    Course Thumbnail #{id}
                  </div>
                  <span className="text-xs bg-[#003BE2]/10 text-[#003BE2] px-2.5 py-1 rounded-full font-semibold">
                    Design
                  </span>
                  <h3 className="text-lg font-semibold text-[#242528] mt-3">
                    Learn Figma from Basic by PurePearl
                  </h3>
                  <p className="text-sm text-[#4B4C53] mt-2 line-clamp-2">
                    A comprehensive hands-on guide covering wireframes, components, and interactive prototypes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E6E8] flex items-center justify-between">
                  <span className="text-lg font-bold text-[#003BE2]">$49.00</span>
                  <Link
                    to={`/courses/${id}`}
                    className="text-xs font-semibold bg-[#242528] hover:bg-[#003BE2] text-white px-4 py-2 rounded-[8px] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Creator Banner Placeholder */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-[#003BE2] text-white rounded-[24px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-hero-grid">
            <div className="max-w-xl">
              <span className="bg-[#CBFC01] text-[#242528] text-xs font-semibold px-3 py-1 rounded-full uppercase">
                Creator Community
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold mt-3">
                Teach the World & Share Your Knowledge
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Join thousands of creators sharing their expertise on ByteSpace.
              </p>
            </div>
            <Link
              to="/creator/1"
              className="bg-[#CBFC01] text-[#242528] hover:bg-[#b8e400] px-6 py-3 rounded-[12px] font-semibold text-sm whitespace-nowrap transition-transform active:scale-95"
            >
              View Creator Profile
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
