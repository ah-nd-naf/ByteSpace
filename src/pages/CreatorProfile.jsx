import { useParams, Link } from 'react-router-dom';
import Container from '../components/Container';

export default function CreatorProfile() {
  const { id = '1' } = useParams();

  const creator = {
    name: 'PurePearl Studios',
    handle: '@purepearl_design',
    role: 'Principal UX Designer & Instructor',
    bio: 'Passionate design educator with over 10 years of industry experience building scalable design systems for startups and Fortune 500 companies.',
    coursesCount: 8,
    studentsCount: '14.2K',
    rating: '4.9',
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-10">
      <Container className="space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#82868E] flex items-center gap-2">
          <Link to="/" className="hover:text-[#003BE2]">Home</Link>
          <span>/</span>
          <span className="text-[#242528] font-medium">Creator #{id}</span>
        </nav>

        {/* Creator Header Banner */}
        <div className="bg-white rounded-[24px] border border-[#E5E6E8] p-8 shadow-card flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-28 h-28 rounded-full bg-[#003BE2]/10 border-2 border-[#003BE2] flex items-center justify-center text-3xl font-bold text-[#003BE2] shrink-0">
            PP
          </div>

          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#242528]">
                {creator.name}
              </h1>
              <span className="text-xs bg-[#CBFC01] text-[#242528] px-2.5 py-1 rounded-full font-semibold">
                Verified Creator
              </span>
            </div>

            <p className="text-xs text-[#82868E]">{creator.handle} • {creator.role}</p>

            <p className="text-sm text-[#4B4C53] max-w-2xl leading-relaxed">
              {creator.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-3 text-xs text-[#242528] font-medium">
              <div>
                <span className="font-bold text-base text-[#003BE2]">{creator.coursesCount}</span> Courses
              </div>
              <div>
                <span className="font-bold text-base text-[#003BE2]">{creator.studentsCount}</span> Students
              </div>
              <div>
                <span className="font-bold text-base text-[#003BE2]">★ {creator.rating}</span> Instructor Rating
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              className="bg-[#003BE2] hover:bg-[#0030B8] text-white text-xs font-semibold px-6 py-2.5 rounded-[10px] transition-colors"
            >
              Follow Creator
            </button>
          </div>
        </div>

        {/* Creator's Courses Shell */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#242528]">Courses by {creator.name}</h2>
            <Link to="/search" className="text-xs font-semibold text-[#003BE2] hover:underline">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((courseId) => (
              <div
                key={courseId}
                className="bg-white rounded-[24px] border border-[#E5E6E8] shadow-card overflow-hidden flex flex-col justify-between"
              >
                <div className="h-44 bg-[#F5F5F6] flex items-center justify-center text-[#82868E] text-sm">
                  Course Preview #{courseId}
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase font-semibold text-[#003BE2]">Design</span>
                  <h3 className="text-base font-semibold text-[#242528] mt-2">
                    {courseId === 1 ? 'Learn Figma from Basic by PurePearl' : `Advanced UI Systems #${courseId}`}
                  </h3>
                  <div className="mt-6 pt-4 border-t border-[#E5E6E8] flex items-center justify-between">
                    <span className="text-base font-bold text-[#003BE2]">$49.00</span>
                    <Link
                      to={`/courses/${courseId}`}
                      className="text-xs font-semibold bg-[#242528] text-white px-3.5 py-1.5 rounded-[8px] hover:bg-[#003BE2]"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
