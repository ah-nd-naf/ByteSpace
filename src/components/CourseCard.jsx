import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const {
    id = 1,
    title = 'Learn Figma from Basic',
    thumbnail,
    author = 'by purepearl studio',
    authorAvatar,
    lessons = '17 Lessons',
    duration = '2 hours 16 mins',
    comments = '59 Comments',
    rating = '4.5',
    level = 'Beginner',
    age = '26+',
    price = '$25/lifetime',
    category = 'Design',
    highlightEnroll = false,
  } = course || {};

  return (
    <div className="bg-white rounded-[24px] border border-[#CED0D3] p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Course Thumbnail Image */}
        <Link to={`/courses/${id}`} className="block relative rounded-[16px] overflow-hidden aspect-[16/10] bg-[#F5F5F6] mb-4">
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
          {category && (
            <span className="absolute top-3 left-3 bg-[#003BE2] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              {category}
            </span>
          )}
        </Link>

        {/* Metadata: Lessons • Duration • Comments */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#82868E] mb-2 font-normal">
          <span>{lessons}</span>
          <span className="text-[#CED0D3]">•</span>
          <span>{duration}</span>
          <span className="text-[#CED0D3]">•</span>
          <span>{comments}</span>
        </div>

        {/* Title and Rating Row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link to={`/courses/${id}`}>
            <h3 className="text-[20px] font-semibold text-[#242528] leading-[1.3] group-hover:text-[#003BE2] transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 shrink-0 pt-0.5">
            <svg
              className="w-4 h-4 fill-[#CBFC01] stroke-[#242528]"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-[18px] font-semibold text-[#242528]">{rating}</span>
          </div>
        </div>

        {/* Author Line */}
        <div className="flex items-center gap-2 mb-4">
          {authorAvatar && (
            <img
              src={authorAvatar}
              alt={author}
              className="w-6 h-6 rounded-full object-cover border border-[#E5E6E8]"
            />
          )}
          <span className="text-xs text-[#82868E] font-normal">{author}</span>
        </div>
      </div>

      <div>
        {/* Level Badges */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#E5E6E8] mb-3 text-xs text-[#82868E]">
          <span className="bg-[#F5F5F6] px-2.5 py-1 rounded-[6px] font-medium text-[#4B4C53]">
            {level}
          </span>
          <span className="bg-[#F5F5F6] px-2.5 py-1 rounded-[6px] font-medium text-[#4B4C53]">
            {age}
          </span>
        </div>

        {/* Price & CTA Action */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[20px] font-semibold text-[#242528]">
            {price}
          </span>
          <Link
            to={`/courses/${id}`}
            className={`text-xs font-semibold px-4 py-2 rounded-[8px] transition-all cursor-pointer ${
              highlightEnroll
                ? 'bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] shadow-sm'
                : 'bg-[#242528] group-hover:bg-[#003BE2] text-white'
            }`}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
