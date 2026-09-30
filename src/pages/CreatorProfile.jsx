import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import {
  avatar03,
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
} from '../assets/images';

export default function CreatorProfile() {
  useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('relevant');
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // 6 Creator Courses strictly matching Figma Screenshot 2, 3 & 4
  const creatorCourses = [
    {
      id: 1,
      title: 'Learn Figma from Basic',
      thumbnail: course1,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Design',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
    {
      id: 2,
      title: 'Build Digital Asset',
      thumbnail: course2,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Design',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
    {
      id: 3,
      title: 'the Power of Big Data',
      thumbnail: course3,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Development',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
    {
      id: 4,
      title: 'Balancing Productivity and Life',
      thumbnail: course4,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Business',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
    {
      id: 5,
      title: 'Mastering Money Management',
      thumbnail: course5,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Finance',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
    {
      id: 6,
      title: 'From Idea to Startup Success',
      thumbnail: course6,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      category: 'Marketing',
      studentBadge: '26+',
      price: '$25',
      pricePeriod: '/lifetime',
    },
  ];

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...creatorCourses];
    if (selectedLevel !== 'all') {
      result = result.filter((c) => c.level.toLowerCase() === selectedLevel.toLowerCase());
    }
    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (sortOption === 'rating') {
      result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortOption === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [selectedLevel, selectedCategory, sortOption, creatorCourses]);

  const sortLabel = {
    relevant: 'Most relevant',
    rating: 'Highest rated',
    title: 'Alphabetical',
  }[sortOption] || 'Most relevant';

  return (
    <div className="creator-profile-page w-full bg-white font-satoshi min-h-screen">
      {/* 
        ========================================================================
        1. BLUE HERO SECTION (Figma Screenshot 1)
        Seamlessly connects to header with #003BE2 and 120px hero grid pattern
        ========================================================================
      */}
      <section className="w-full bg-[#003BE2] bg-hero-grid text-white pt-8 sm:pt-10 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">
          {/* Creator Profile Header: Avatar + Name + Creator Badge + Role */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] sm:rounded-[28px] overflow-hidden shrink-0 border border-white/20 shadow-md">
              <img
                src={avatar03}
                alt="PurePearl Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-[36px] text-white tracking-[-0.01em] leading-[1.2]">
                  PurePearl Studio
                </h1>
                <span className="bg-[#CBFC01] text-[#1D1E20] font-satoshi font-semibold text-xs sm:text-sm px-4 py-1 rounded-full shadow-xs">
                  Creator
                </span>
              </div>
              <p className="font-satoshi text-white/90 text-sm sm:text-base font-normal mt-1.5 leading-[1.6]">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Description (Exact Text from Figma Screenshot 1) */}
          <div className="font-satoshi text-white/85 text-sm sm:text-base leading-[1.6] max-w-4xl mt-7 space-y-3 font-normal">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Badges & Follow Button Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-2">
            {/* Stats Badges: 3 Products | 12 Followers */}
            <div className="flex items-center gap-3">
              <div className="px-5 py-2.5 rounded-full bg-white text-[#1D1E20] font-satoshi text-sm font-medium shadow-sm flex items-center">
                <span className="text-[#003BE2] font-poppins font-semibold mr-1.5 text-base">3</span>
                <span>Products</span>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white text-[#1D1E20] font-satoshi text-sm font-medium shadow-sm flex items-center">
                <span className="text-[#003BE2] font-poppins font-semibold mr-1.5 text-base">
                  {isFollowing ? 13 : 12}
                </span>
                <span>Followers</span>
              </div>
            </div>

            {/* Follow Button */}
            <button
              type="button"
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-8 sm:px-10 py-2.5 sm:py-3 rounded-full font-satoshi font-medium text-sm sm:text-base transition-all shadow-sm active:scale-95 cursor-pointer leading-[1.2] ${
                isFollowing
                  ? 'bg-white text-[#003BE2] border border-white'
                  : 'bg-[#CBFC01] hover:bg-[#b8e400] text-[#1D1E20]'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. COURSES CATALOG SECTION (Figma Screenshots 2, 3 & 4)
        Filters bar + 6 Course Cards Grid
        ========================================================================
      */}
      <section className="w-full bg-white pt-8 sm:pt-10 pb-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">
          {/* Top Filter and Sorting Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
            {/* Left Filter Pills: Filter | Level | Category */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedCategory('all');
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                  selectedLevel !== 'all' || selectedCategory !== 'all'
                    ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                    : 'border-[#CED0D3] bg-white text-[#1D1E20] hover:border-[#1D1E20]'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span>Filter</span>
              </button>

              {/* Level Dropdown Pill */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLevelDropdownOpen(!levelDropdownOpen);
                    setCategoryDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                    selectedLevel !== 'all'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                      : 'border-[#CED0D3] bg-white text-[#1D1E20] hover:border-[#1D1E20]'
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                    <rect x="6.5" y="7" width="2.5" height="7" rx="0.5" />
                    <rect x="11" y="3" width="2.5" height="11" rx="0.5" />
                  </svg>
                  <span>{selectedLevel === 'all' ? 'Level' : selectedLevel}</span>
                </button>
                {levelDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-[16px] border border-[#CED0D3] shadow-lg py-2 z-20">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          selectedLevel === lvl
                            ? 'bg-[#CBFC01]/30 font-semibold text-[#1D1E20]'
                            : 'text-[#1D1E20] hover:bg-[#F5F5F6]'
                        }`}
                      >
                        {lvl === 'all' ? 'All Levels' : lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown Pill */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCategoryDropdownOpen(!categoryDropdownOpen);
                    setLevelDropdownOpen(false);
                    setSortDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory !== 'all'
                      ? 'border-[#003BE2] bg-[#003BE2]/5 text-[#003BE2]'
                      : 'border-[#CED0D3] bg-white text-[#1D1E20] hover:border-[#1D1E20]'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l4 7H8l4-7z" />
                    <circle cx="6" cy="18" r="4" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  <span>{selectedCategory === 'all' ? 'Category' : selectedCategory}</span>
                </button>
                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[16px] border border-[#CED0D3] shadow-lg py-2 z-20">
                    {['all', 'Design', 'Development', 'Business', 'Finance', 'Marketing'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCategoryDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          selectedCategory === cat
                            ? 'bg-[#CBFC01]/30 font-semibold text-[#1D1E20]'
                            : 'text-[#1D1E20] hover:bg-[#F5F5F6]'
                        }`}
                      >
                        {cat === 'all' ? 'All Categories' : cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sorting Pill: Most relevant */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                  setCategoryDropdownOpen(false);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CED0D3] bg-white text-[#1D1E20] text-sm font-medium hover:border-[#1D1E20] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#1D1E20]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="6" y1="12" x2="21" y2="12" />
                  <line x1="10" y1="18" x2="21" y2="18" />
                </svg>
                <span>{sortLabel}</span>
              </button>
              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-[16px] border border-[#CED0D3] shadow-lg py-2 z-20">
                  {[
                    { id: 'relevant', label: 'Most relevant' },
                    { id: 'rating', label: 'Highest rated' },
                    { id: 'title', label: 'Alphabetical' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSortOption(opt.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        sortOption === opt.id
                          ? 'bg-[#CBFC01]/30 font-semibold text-[#1D1E20]'
                          : 'text-[#1D1E20] hover:bg-[#F5F5F6]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Cards 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16 text-[#82868E]">
              <p className="text-base">No courses found matching the selected filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#003BE2] text-white text-sm font-semibold hover:bg-[#0030B8] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
