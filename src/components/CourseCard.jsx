import { Link } from 'react-router-dom';
import { avatar08, avatar03, avatar02, avatar04 } from '../assets/images';

export default function CourseCard({ course }) {
  const {
    id = 1,
    title = 'Learn Figma from Basic',
    thumbnail,
    lessons = '17 Lessons',
    duration = '2 hours 16 mins',
    comments = '59 Comments',
    rating = '4.5',
    level = 'Beginner',
    studentBadge = '26+',
    price = '$25',
    pricePeriod = '/lifetime',
  } = course || {};

  const cleanPrice = typeof price === 'string' && price.includes('/') ? price.split('/')[0] : price;
  const cleanPeriod = typeof price === 'string' && price.includes('/') ? `/${price.split('/')[1]}` : pricePeriod;

  return (
    <div className="bg-white rounded-[28px] border border-[#E2E4E8] p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      {/* 1. Thumbnail Container */}
      <Link to={`/courses/${id}`} className="block relative rounded-[18px] overflow-hidden aspect-[341/195] bg-[#F5F5F6] mb-3.5">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#82868E] text-xs">
            Course Thumbnail
          </div>
        )}

        {/* 3 Frosted Metadata Pills at Bottom of Thumbnail */}
        <div className="absolute bottom-3 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
          <span className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
            {lessons}
          </span>
          <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
            {duration}
          </span>
          <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
            {comments}
          </span>
        </div>
      </Link>

      {/* 2. Course Details Body */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-2">
            <Link to={`/courses/${id}`}>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#242528] leading-[1.25] group-hover:text-[#003BE2] transition-colors line-clamp-2 min-h-[46px] sm:min-h-[50px]">
                {title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="text-[15px] font-normal text-[#242528]">{rating}</span>
              <svg className="w-3.5 h-3.5 fill-[#CED0D3] text-[#CED0D3]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Author line */}
          <p className="text-[13px] text-[#82868E] font-normal mt-1">
            by <span className="text-[#003BE2] font-medium">purepearl studio</span>
          </p>
        </div>

        {/* Level Badge + Avatar Stack Row */}
        <div className="flex items-center justify-between mt-3.5 pt-1">
          {/* Signal Level Badge */}
          <div className="bg-[#F5F5F6] text-[#4B4C53] rounded-full px-3 py-1 text-[13px] font-normal flex items-center gap-1.5 h-8">
            <svg className="w-3.5 h-3.5 fill-[#4B4C53]" viewBox="0 0 16 16">
              <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
              <rect x="6.5" y="7" width="2.5" height="7" rx="0.5" />
              <rect x="11" y="3" width="2.5" height="11" rx="0.5" />
            </svg>
            <span>{level}</span>
          </div>

          {/* Overlapping Student Avatars + Lime 26+ Badge */}
          <div className="flex items-center -space-x-2">
            <img src={avatar08} alt="Student" className="w-7 h-7 rounded-full object-cover border border-white shadow-xs" />
            <img src={avatar03} alt="Student" className="w-7 h-7 rounded-full object-cover border border-white shadow-xs" />
            <img src={avatar02} alt="Student" className="w-7 h-7 rounded-full object-cover border border-white shadow-xs" />
            <img src={avatar04} alt="Student" className="w-7 h-7 rounded-full object-cover border border-white shadow-xs" />
            <span className="w-7 h-7 rounded-full bg-[#CBFC01] text-[#242528] text-[10px] font-bold flex items-center justify-center border border-white shadow-xs">
              {studentBadge}
            </span>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-3.5">
          <span className="text-[22px] font-bold text-[#003BE2] leading-none">
            {cleanPrice}
          </span>
          <span className="text-[12px] text-[#82868E] font-normal ml-0.5">
            {cleanPeriod}
          </span>
        </div>
      </div>
    </div>
  );
}
