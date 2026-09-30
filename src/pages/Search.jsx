import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { searchBaseCourses as baseCourses } from '../data/courses';
import { searchCategoryPills as categoryPills } from '../data/categories';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const urlCategory = searchParams.get('category') || 'Featured';

  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Full catalog: 18 cards per page x 5 pages = 90 cards matching exact Figma 18-card page layout
  const fullCatalog = useMemo(() => {
    const list = [];
    for (let page = 1; page <= 5; page++) {
      // Repeat the 6 courses 3 times to get 18 courses per page
      for (let rep = 0; rep < 3; rep++) {
        baseCourses.forEach((c, idx) => {
          list.push({
            ...c,
            uniqueId: `p${page}-r${rep}-${c.id}-${idx}`,
          });
        });
      }
    }
    return list;
  }, []);

  // Filter & Search logic
  const filteredCourses = useMemo(() => {
    return fullCatalog.filter((course) => {
      // Category filter (Featured shows all by default)
      const matchesCategory =
        selectedCategory === 'Featured' ||
        course.category.toLowerCase() === selectedCategory.toLowerCase() ||
        course.title.toLowerCase().includes(selectedCategory.toLowerCase());

      // Level filter
      const matchesLevel =
        selectedLevel === 'All' ||
        course.level.toLowerCase() === selectedLevel.toLowerCase();

      // Search Query
      const matchesQuery =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesQuery;
    });
  }, [fullCatalog, selectedCategory, selectedLevel, searchQuery]);

  const itemsPerPage = 18;
  const totalPages = Math.max(1, Math.min(5, Math.ceil(filteredCourses.length / itemsPerPage)));

  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCourses, currentPage]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="w-full bg-white font-satoshi min-h-screen">
      {/* 
        ========================================================================
        1. BLUE HERO BANNER (360px total with 120px header, Find Your Next Course)
        Exact Figma measurements:
        - Background: #003BE2 with 120px grid pattern (bg-hero-grid)
        - Title: "Find Your Next Course" (white, bold, 40px)
        - Search Box Pill: 461px x 52px, white rounded-full, magnifying glass icon
        - "Courses" Button: 147px x 52px, lime #CBFC01, chevron down icon
        ========================================================================
      */}
      <section className="w-full bg-[#003BE2] bg-hero-grid text-white pt-8 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] flex flex-col items-center text-center">
          {/* Main Title - Exact Figma 36px Poppins SemiBold */}
          <h1 className="font-poppins text-3xl sm:text-[36px] font-semibold text-white tracking-[-0.01em] leading-[1.2] mb-7">
            Find Your Next Course
          </h1>

          {/* Search Row */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[624px]"
          >
            {/* White Search Input Pill */}
            <div className="relative flex-1 w-full max-w-[461px]">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-[#82868E]">
                <svg
                  className="w-5 h-5 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full h-[52px] pl-12 pr-5 bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-normal rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#CBFC01] transition-all"
              />
            </div>

            {/* Lime "Courses" Dropdown Button */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="h-[52px] px-6 bg-[#CBFC01] hover:bg-[#b8e400] text-[#1D1E20] font-medium text-[15px] rounded-full flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Courses</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 stroke-current ${
                    coursesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {coursesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-[#242528] rounded-[18px] shadow-card border border-[#E5E6E8] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {['All Courses', 'Design', 'Development', 'Business', 'Marketing', 'Finance'].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(item === 'All Courses' ? 'Featured' : item);
                          setCoursesDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#F5F5F6] text-sm text-[#242528] transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 
        ========================================================================
        2. TOOLBAR ROW & CATEGORY PILLS
        Exact Figma measurements:
        - Buttons: Filter (96px x 48px), Level (97px x 48px), Category (127px x 48px)
        - Right: Most relevant (157px x 48px)
        - 9 Category Pills: Featured (Active lime #CBFC01), Music, Drawing & Painting, etc.
        ========================================================================
      */}
      <section className="w-full bg-white pt-10 sm:pt-14 pb-4">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">
          {/* Top Filter Buttons & Sort Dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Action Buttons: Filter, Level, Category */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 1. Filter Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Featured');
                  setSelectedLevel('All');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white hover:border-[#242528] text-[#242528] text-[15px] font-normal flex items-center gap-2.5 transition-all cursor-pointer active:scale-95"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filter</span>
              </button>

              {/* 2. Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
                  className={`h-[48px] px-5 rounded-full border text-[15px] font-normal flex items-center gap-2.5 transition-all cursor-pointer active:scale-95 ${
                    selectedLevel !== 'All'
                      ? 'border-[#003BE2] bg-blue-50/50 text-[#003BE2]'
                      : 'border-[#CED0D3] bg-white hover:border-[#242528] text-[#242528]'
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                    <rect x="6.5" y="7" width="2.5" height="7" rx="0.5" />
                    <rect x="11" y="3" width="2.5" height="11" rx="0.5" />
                  </svg>
                  <span>{selectedLevel === 'All' ? 'Level' : selectedLevel}</span>
                </button>

                {levelDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white text-[#242528] rounded-[18px] shadow-card border border-[#E5E6E8] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#F5F5F6] text-sm cursor-pointer transition-colors ${
                          selectedLevel === lvl ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {lvl === 'All' ? 'All Levels' : lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className={`h-[48px] px-5 rounded-full border text-[15px] font-normal flex items-center gap-2.5 transition-all cursor-pointer active:scale-95 ${
                    selectedCategory !== 'Featured'
                      ? 'border-[#003BE2] bg-blue-50/50 text-[#003BE2]'
                      : 'border-[#CED0D3] bg-white hover:border-[#242528] text-[#242528]'
                  }`}
                >
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l4 7H8l4-7z" />
                    <circle cx="6" cy="18" r="4" />
                    <rect x="14" y="14" width="8" height="8" rx="1" />
                  </svg>
                  <span>{selectedCategory === 'Featured' ? 'Category' : selectedCategory}</span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-52 bg-white text-[#242528] rounded-[18px] shadow-card border border-[#E5E6E8] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {categoryPills.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCategoryDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#F5F5F6] text-sm cursor-pointer transition-colors ${
                          selectedCategory === cat ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Most Relevant Sort Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white hover:border-[#242528] text-[#242528] text-[15px] font-normal flex items-center gap-2.5 transition-all cursor-pointer active:scale-95"
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="6" y1="12" x2="18" y2="12" />
                  <line x1="10" y1="18" x2="14" y2="18" />
                </svg>
                <span>{sortBy}</span>
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-[#242528] rounded-[18px] shadow-card border border-[#E5E6E8] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {['Most relevant', 'Highest Rated', 'Newest', 'Price: Low to High'].map(
                    (s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setSortBy(s);
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#F5F5F6] text-sm cursor-pointer transition-colors ${
                          sortBy === s ? 'font-semibold text-[#003BE2]' : 'text-[#242528]'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Category Pills Row */}
          <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {categoryPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => {
                  setSelectedCategory(pill);
                  setCurrentPage(1);
                }}
                className={`h-[43px] px-4.5 rounded-full text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center ${
                  selectedCategory === pill
                    ? 'bg-[#CBFC01] text-[#242528] font-medium shadow-xs'
                    : 'bg-[#F5F5F6] hover:bg-[#E5E6E8] text-[#4B4C53] font-normal'
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. COURSE CARDS GRID & PAGINATION
        Exact Figma layout: 3 columns x 3 rows (9 cards per page), 1200px container
        ========================================================================
      */}
      <section className="w-full bg-white pt-6 pb-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">
          {currentCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {currentCourses.map((course) => (
                <CourseCard key={course.uniqueId || course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F5F5F6] rounded-[28px] p-8 max-w-2xl mx-auto font-satoshi">
              <h3 className="font-poppins text-xl font-semibold text-[#242528] mb-2">No courses found</h3>
              <p className="text-sm text-[#4B4C53] mb-6">
                We couldn't find any courses matching your criteria. Try adjusting your search query or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Featured');
                  setSelectedLevel('All');
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-[#003BE2] hover:bg-[#0030B8] text-white rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Centered Pagination Matching Figma (< 1 2 3 4 5 >) */}
          <div className="mt-20 flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous Circular Button */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 320, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="w-12 h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-[#242528] disabled:opacity-40 disabled:hover:border-[#CED0D3] disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers: 1, 2, 3, 4, 5 */}
            <div className="flex items-center gap-3 sm:gap-5">
              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNum);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 rounded-full text-[16px] font-poppins flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'text-[#242528] font-semibold'
                      : 'text-[#82868E] hover:text-[#242528] font-normal'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Circular Button */}
            <button
              type="button"
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 320, behavior: 'smooth' });
              }}
              disabled={currentPage === 5 || currentPage === totalPages}
              aria-label="Next Page"
              className="w-12 h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-[#242528] disabled:opacity-40 disabled:hover:border-[#CED0D3] disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
