import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Container from '../components/Container';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'business', label: 'Business' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'it', label: 'IT & Software' },
  ];

  const dummyCourses = [
    { id: 1, title: 'Learn Figma from Basic by PurePearl', category: 'design', price: '$49.00', lessons: 17, duration: '2h 16m', level: 'Beginner' },
    { id: 2, title: 'Build Digital Asset: A Comprehensive Guide', category: 'development', price: '$59.00', lessons: 24, duration: '4h 30m', level: 'Intermediate' },
    { id: 3, title: 'Mastering Modern UI/UX Architecture', category: 'design', price: '$69.00', lessons: 32, duration: '6h 10m', level: 'All Levels' },
    { id: 4, title: 'Advanced Business Strategy & Product Management', category: 'business', price: '$79.00', lessons: 19, duration: '3h 45m', level: 'Advanced' },
    { id: 5, title: 'Fullstack Web Development with Modern Stack', category: 'development', price: '$89.00', lessons: 48, duration: '12h 00m', level: 'Intermediate' },
    { id: 6, title: 'Digital Marketing & Growth Hacking Essentials', category: 'marketing', price: '$39.00', lessons: 14, duration: '2h 00m', level: 'Beginner' },
  ];

  const filteredCourses = dummyCourses.filter((c) => {
    const matchesCat = currentCategory === 'all' || c.category === currentCategory;
    const matchesQuery = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-12">
      <Container className="space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#82868E] flex items-center gap-2">
          <Link to="/" className="hover:text-[#003BE2]">Home</Link>
          <span>/</span>
          <span className="text-[#242528] font-medium">Courses & Search</span>
        </nav>

        {/* Page Header */}
        <div className="bg-white p-8 rounded-[24px] border border-[#E5E6E8] shadow-card">
          <span className="text-xs bg-[#CBFC01] text-[#242528] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Explore Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#242528] mt-3">
            Find the Perfect Course for You
          </h1>
          <p className="text-sm text-[#4B4C53] mt-2 max-w-2xl">
            Browse our wide selection of expert-crafted courses across design, technology, business, and creative fields.
          </p>

          {/* Search Bar Input */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by course title, topic, or creator..."
              className="flex-1 h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
            />
            <button
              type="button"
              className="h-[52px] px-8 bg-[#003BE2] hover:bg-[#0030B8] text-white font-semibold text-sm rounded-[12px] transition-colors"
            >
              Search
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#E5E6E8]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  currentCategory === cat.id
                    ? 'bg-[#CBFC01] text-[#242528]'
                    : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid Shell */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#4B4C53]">
              Showing <span className="font-semibold text-[#242528]">{filteredCourses.length}</span> courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-[24px] border border-[#E5E6E8] shadow-card overflow-hidden flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div className="h-48 bg-[#F5F5F6] flex items-center justify-center text-[#82868E] text-sm border-b border-[#E5E6E8]">
                  Course Preview #{c.id}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#82868E] mb-2">
                      <span className="uppercase font-semibold text-[#003BE2]">{c.category}</span>
                      <span>{c.level}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#242528] line-clamp-2">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#82868E] mt-2">
                      {c.lessons} Lessons • {c.duration}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E6E8] flex items-center justify-between">
                    <span className="text-lg font-bold text-[#003BE2]">{c.price}</span>
                    <Link
                      to={`/courses/${c.id}`}
                      className="text-xs font-semibold bg-[#242528] hover:bg-[#003BE2] text-white px-4 py-2 rounded-[8px] transition-colors"
                    >
                      Course Details &rarr;
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
