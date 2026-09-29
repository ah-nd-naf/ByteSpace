import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import PartnerLogos from '../components/PartnerLogos';
import CourseCard from '../components/CourseCard';
import {
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  cutoutHeroManLaptop,
  cutoutWomanTablet,
  shapeCylinderLime,
  shapeSpring1Lime,
  shapeSpring1White,
  shapeTorusWhite,
  shapePyramidBrightWhite,
  shapeConeLime,
  shapePyramidWhite,
  shapeTorusBlue,
  shapeSpring1Blue,
} from '../assets/images';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Drawing & Painting');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/search');
    }
  };

  // 6 Curated Course Cards matching exact Figma prototype content
  // Note: Cards 3 and 5 have lime #CBFC01 Enroll Now buttons as confirmed in Figma
  const courses = [
    {
      id: 1,
      title: 'Learn Figma from Basic',
      thumbnail: course1,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Design',
      highlightEnroll: false,
    },
    {
      id: 2,
      title: 'Build Digital Asset',
      thumbnail: course2,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Development',
      highlightEnroll: false,
    },
    {
      id: 3,
      title: 'the Power of Big Data',
      thumbnail: course3,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Data Science',
      highlightEnroll: true, // Lime button
    },
    {
      id: 4,
      title: 'Balancing Productivity and Self-Care',
      thumbnail: course4,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Productivity',
      highlightEnroll: false,
    },
    {
      id: 5,
      title: 'Mastering Money Management',
      thumbnail: course5,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Finance',
      highlightEnroll: true, // Lime button
    },
    {
      id: 6,
      title: 'From Idea to Startup Success',
      thumbnail: course6,
      author: 'by purepearl studio',
      authorAvatar: avatar03,
      lessons: '17 Lessons',
      duration: '2 hours 16 mins',
      comments: '59 Comments',
      rating: '4.5',
      level: 'Beginner',
      age: '26+',
      price: '$25/lifetime',
      category: 'Business',
      highlightEnroll: false,
    },
  ];

  // Category filter pills extracted from PDF
  const categoryPills = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
    '+ More',
  ];

  // Category paths with lime circle icons
  const learningPaths = [
    {
      name: 'Design',
      slug: 'design',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      name: 'Development',
      slug: 'development',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'IT & Software',
      slug: 'it',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Business',
      slug: 'business',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Marketing',
      slug: 'marketing',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      name: 'Photography',
      slug: 'photography',
      icon: (
        <svg className="w-8 h-8 stroke-[#242528]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar: avatar02,
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      avatar: avatar11,
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      avatar: avatar12,
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <div className="w-full font-['Poppins']">
      {/* 
        ========================================================================
        1. HERO SECTION (1440 x 1024, .bg-hero-grid on #003BE2, overflow-hidden)
        ========================================================================
      */}
      <section className="-mt-[120px] relative w-full bg-[#003BE2] bg-hero-grid overflow-hidden text-white h-[1024px]">
        {/* Centered 1440x1024 Coordinate Container */}
        <div className="relative mx-auto w-full max-w-[1440px] h-[1024px]">
          {/* Big Lime Circle: 1149px diameter, 320px border, left: 145px, top: 582px, box-border */}
          <div
            className="pointer-events-none rounded-full absolute box-border bg-transparent"
            style={{
              width: '1149px',
              height: '1149px',
              left: '145px',
              top: '582px',
              border: '320px solid #CBFC01',
              zIndex: 1,
            }}
          />

          {/* 3D Decorative Shapes Surrounding Hero */}
          {/* 1. Top-Left: shapeSpring1Lime (wavy lime spring matching exact Figma properties: 385x385, top: 221, left: -118) */}
          <img
            src={shapeSpring1Lime}
            alt=""
            className="pointer-events-none absolute select-none object-contain"
            style={{
              left: '-118px',
              top: '221px',
              width: '385px',
              height: '385px',
              zIndex: 2,
            }}
          />

          {/* 2. Mid-Left: shapeSpring1White (white wave spring rotated ~-35deg matching Figma: 175.8x175.8) */}
          <img
            src={shapeSpring1White}
            alt=""
            className="pointer-events-none absolute select-none object-contain -rotate-[35deg]"
            style={{
              left: '184px',
              top: '477px',
              width: '176px',
              height: '176px',
              zIndex: 2,
            }}
          />

          {/* 3. Bottom-Left: shapeTorusWhite (Pure White Torus overlapping lime arch: 343.7x343.7) */}
          <img
            src={shapeTorusWhite}
            alt=""
            className="pointer-events-none absolute select-none object-contain"
            style={{
              left: '14px',
              top: '681px',
              width: '344px',
              height: '344px',
              zIndex: 2,
            }}
          />

          {/* 4. Top-Right: shapeCylinderLime */}
          <img
            src={shapeCylinderLime}
            alt=""
            className="pointer-events-none absolute select-none object-contain"
            style={{
              left: '1227px',
              top: '220px',
              width: '372px',
              height: '372px',
              zIndex: 2,
            }}
          />

          {/* 5. Mid-Right: shapePyramidBrightWhite (Pure White Pyramid floating in blue grid matching Figma) */}
          <img
            src={shapePyramidBrightWhite}
            alt=""
            className="pointer-events-none absolute select-none object-contain"
            style={{
              left: '1104px',
              top: '464px',
              width: '189px',
              height: '189px',
              zIndex: 2,
            }}
          />

          {/* 6. Bottom-Right: shapeSpring1White (White wave spring rotated ~-35deg matching Figma) */}
          <img
            src={shapeSpring1White}
            alt=""
            className="pointer-events-none absolute select-none object-contain -rotate-[35deg]"
            style={{
              left: '1124px',
              top: '672px',
              width: '332px',
              height: '332px',
              zIndex: 2,
            }}
          />

          {/* Hero Heading H1: Exact 2 Lines from Figma */}
          <div
            className="absolute text-center left-0 right-0 mx-auto"
            style={{
              top: '165px',
              width: '100%',
              maxWidth: '1080px',
              zIndex: 5,
            }}
          >
            <h1 className="text-[72px] font-semibold text-white tracking-[-0.01em] leading-[1.18]">
              Get Access to Hundreds <br />Courses Available
            </h1>
          </div>

          {/* Hero Subtitle - Exact Figma properties: Width 819px, Height 29px, Size 18px, Line-height 160%, Color #E5E6E8 */}
          <p
            className="absolute text-center left-0 right-0 mx-auto text-[#E5E6E8] text-[18px] font-normal leading-[160%]"
            style={{
              top: '376px',
              width: '819px',
              zIndex: 5,
            }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Form (White rounded-full input + separate rounded-full lime button #CBFC01) */}
          <form
            onSubmit={handleSearchSubmit}
            className="absolute flex items-center gap-4 left-1/2 -translate-x-1/2"
            style={{
              top: '462px',
              width: '581px',
              height: '52px',
              zIndex: 10,
            }}
          >
            <div className="relative flex-1 bg-white rounded-full flex items-center px-6 h-[52px] shadow-floating">
              <svg
                className="w-5 h-5 text-[#82868E] shrink-0 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-[16px] focus:outline-none font-normal"
              />
            </div>
            <button
              type="submit"
              className="h-[46px] w-[104px] bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-[16px] rounded-full transition-all active:scale-95 shadow-md cursor-pointer flex items-center justify-center shrink-0"
            >
              Search
            </button>
          </form>

          {/* Central Student Cutout Image (cutoutHeroManLaptop) - Exact PDF transform: left 431px, top 512px, 578x541 */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              left: '431px',
              top: '512px',
              width: '578px',
              height: '541px',
              zIndex: 4,
            }}
          >
            <img
              src={cutoutHeroManLaptop}
              alt="ByteSpace Student Learning"
              className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (top 639px, left 404px) */}
          <div
            className="absolute flex flex-col justify-center bg-white text-[#242528] px-5 py-3 rounded-[16px] shadow-floating border border-[#E5E6E8]"
            style={{
              left: '404px',
              top: '639px',
              width: '208px',
              height: '70px',
              zIndex: 10,
            }}
          >
            <h4 className="text-[16px] font-semibold text-[#242528] leading-tight">UI/UX Design</h4>
            <p className="text-[12px] text-[#82868E] whitespace-nowrap mt-1">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (top 651px, left 842px) */}
          <div
            className="absolute flex flex-col justify-between bg-white text-[#242528] p-5 rounded-[20px] shadow-floating border border-[#E5E6E8]"
            style={{
              left: '842px',
              top: '651px',
              width: '232px',
              height: '131px',
              zIndex: 10,
            }}
          >
            <span className="text-[14px] text-[#4B4C53] font-medium">Learning Progress</span>
            <span className="text-[48px] font-bold text-[#242528] leading-none tracking-tight">55%</span>
            <div className="w-full bg-[#E5E6E8] h-2 rounded-full overflow-hidden">
              <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (top 837px, left 328px) - Compact Figma layout */}
          <div
            className="absolute flex flex-col justify-between bg-white text-[#242528] p-4 rounded-[24px] shadow-floating border border-[#E5E6E8]"
            style={{
              left: '328px',
              top: '837px',
              width: '258px',
              height: '121px',
              zIndex: 10,
            }}
          >
            {/* Header: Title and Rating stacked closely */}
            <div>
              <h4 className="text-[16px] font-semibold text-[#242528] leading-tight">Happy Students</h4>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[12px] font-semibold text-[#242528] leading-none">4.5</span>
                <span className="text-[12px] text-[#82868E] font-normal leading-none">(240)</span>
                <svg className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] shrink-0" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Overlapping Avatars Row + Lime 2K+ Badge (spans evenly across card interior) */}
            <div className="flex items-center -space-x-4">
              <img src={avatar06} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar03} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar07} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar10} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar08} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar09} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <img src={avatar05} alt="Student" className="w-[43px] h-[43px] rounded-full object-cover shrink-0 border-2 border-white shadow-xs" />
              <span className="w-[43px] h-[43px] rounded-full bg-[#CBFC01] text-[#242528] text-[13px] font-bold flex items-center justify-center shrink-0 border-2 border-white shadow-xs">
                2K+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. PARTNER LOGO STRIP (1132px Container on #F5F5F6)
        ========================================================================
      */}
      <section className="w-full border-b border-[#E5E6E8] bg-[#F5F5F6]">
        <PartnerLogos />
      </section>

      {/* 
        ========================================================================
        3. COURSES SECTION ("Discover Your Passion, Build Your Skills")
        ========================================================================
      */}
      <section className="w-full py-20 lg:py-24 bg-white">
        <Container className="space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-[854px] mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
              Discover Your Passion, Build Your Skills
            </h2>
            <p className="text-[#4B4C53] text-base sm:text-lg leading-[1.5] max-w-[750px] mx-auto font-normal">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills (3 Rows with active state) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[1020px] mx-auto pt-2">
            {categoryPills.map((pill) => {
              const isSelected = activeCategory === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveCategory(pill)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#CBFC01] text-[#242528] font-semibold shadow-sm'
                      : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* 3x2 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Bottom Button */}
          <div className="text-center pt-6">
            <Link
              to="/search"
              className="inline-block bg-[#003BE2] hover:bg-[#0030B8] text-white font-semibold text-base px-8 py-3.5 rounded-[12px] transition-all active:scale-95 shadow-md"
            >
              Explore More Courses
            </Link>
          </div>
        </Container>
      </section>

      {/* 
        ========================================================================
        4. CATEGORIES SECTION ("Explore Diverse Learning Paths at ByteSpace")
           Clean unboxed layout: Only lime circle icon + category name below
        ========================================================================
      */}
      <section className="w-full py-20 bg-[#FAFAFA] border-y border-[#E5E6E8]">
        <Container className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-[854px] mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#242528] tracking-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-[#4B4C53] text-base sm:text-lg leading-relaxed max-w-[760px] mx-auto font-normal">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* 6 Category Items: Clean Lime Circle (#CBFC01) + Title Below (Unboxed) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pt-6 max-w-[1132px] mx-auto">
            {learningPaths.map((item) => (
              <Link
                key={item.name}
                to={`/search?category=${item.slug}`}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Clean Lime circle container */}
                <div className="w-20 h-20 sm:w-[88px] sm:h-[88px] rounded-full bg-[#CBFC01] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#242528] group-hover:text-[#003BE2] transition-colors">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 
        ========================================================================
        5. FEATURE SPLIT SECTIONS (Row 1 & Row 2 with soft radial glow)
        ========================================================================
      */}
      <section className="w-full py-24 bg-white space-y-28">
        <Container className="space-y-28">
          {/* Row 1: "Your Path to Professional Growth Starts Here!" */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Your Path to Professional Growth Starts Here!
              </h2>

              <p className="text-[#4B4C53] text-base sm:text-lg leading-[1.6]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Counters (12K Students, 70+ Courses, 16 Creators) */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E5E6E8]">
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2]">12K</span>
                  <span className="text-sm sm:text-base text-[#4B4C53] mt-1 font-medium">Students</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2]">70+</span>
                  <span className="text-sm sm:text-base text-[#4B4C53] mt-1 font-medium">Courses</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2]">16</span>
                  <span className="text-sm sm:text-base text-[#4B4C53] mt-1 font-medium">Creators</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/search"
                  className="inline-block bg-[#003BE2] hover:bg-[#0030B8] text-white font-semibold text-base px-8 py-3.5 rounded-[12px] transition-all active:scale-95 shadow-md"
                >
                  Explore Courses
                </Link>
              </div>
            </div>

            {/* Right Visual Column (Student cutout + soft radial glow + floating card) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Soft radial glow (lime/blue) behind student cutout */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#003BE2]/25 via-[#CBFC01]/35 to-transparent blur-3xl -z-10 pointer-events-none" />

              <div className="relative w-full max-w-[500px] flex justify-center">
                <img
                  src={cutoutHeroManLaptop}
                  alt="Student Growth"
                  className="w-full h-auto object-contain max-h-[460px] mx-auto relative z-10"
                />

                {/* 3D Shapes around Student Photo */}
                <img src={shapeConeLime} alt="" className="absolute -left-6 top-6 w-24 h-24 object-contain pointer-events-none drop-shadow-lg z-20" />
                <img src={shapePyramidWhite} alt="" className="absolute -right-8 top-1/3 w-28 h-28 object-contain pointer-events-none drop-shadow-lg z-20" />
                <img src={shapeTorusBlue} alt="" className="absolute left-10 -bottom-8 w-32 h-32 object-contain pointer-events-none drop-shadow-lg z-20" />

                {/* Floating 55% Card */}
                <div className="absolute top-8 right-4 bg-white p-4 rounded-[16px] shadow-floating border border-[#E5E6E8] z-20">
                  <span className="text-xs text-[#4B4C53] font-medium block">Learning Progress</span>
                  <span className="text-3xl font-bold text-[#242528]">55%</span>
                </div>

                {/* Floating Rating */}
                <div className="absolute bottom-6 left-4 bg-white px-4 py-2.5 rounded-[12px] shadow-floating border border-[#E5E6E8] flex items-center gap-2 z-20">
                  <span className="text-[#CBFC01] text-lg">★</span>
                  <span className="text-sm font-semibold text-[#242528]">4.5</span>
                  <span className="text-xs text-[#82868E]">(120 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: "Create & Manage Courses Easily." */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Column (Female Creator cutout + soft radial glow + revenue & bar chart cards) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative flex justify-center items-center mt-10 lg:mt-0">
              {/* Soft radial glow (lime/blue) */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#CBFC01]/35 via-[#003BE2]/25 to-transparent blur-[100px] -z-10 pointer-events-none" />

              <div className="relative w-full max-w-[500px] flex justify-center">
                <img
                  src={cutoutWomanTablet}
                  alt="Creator Teaching"
                  className="w-full h-auto object-contain max-h-[460px] mx-auto relative z-10"
                />

                {/* Floating Revenue Card 1 */}
                <div className="absolute top-6 left-2 bg-white p-4 rounded-[16px] shadow-floating border border-[#E5E6E8] min-w-[150px] z-20">
                  <span className="text-xs text-[#82868E] block">Total Revenue</span>
                  <span className="text-xs text-[#82868E] block">July 1-28</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-lg font-bold text-[#242528]">$120.29</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      +12.5%
                    </span>
                  </div>
                </div>

                {/* Floating Revenue Card 2 */}
                <div className="absolute bottom-6 left-2 bg-white p-4 rounded-[16px] shadow-floating border border-[#E5E6E8] min-w-[160px] z-20">
                  <span className="text-xs text-[#82868E] block">Year to Date</span>
                  <span className="text-xs text-[#82868E] block">2023</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-lg font-bold text-[#242528]">$1,200.38</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      +12.5%
                    </span>
                  </div>
                </div>

                {/* Floating Bar Chart Card */}
                <div className="absolute top-28 -right-2 bg-white p-4 rounded-[16px] shadow-floating border border-[#E5E6E8] z-20 flex flex-col gap-2 min-w-[140px]">
                  <span className="text-[11px] font-semibold text-[#82868E]">Enrollment Trends</span>
                  <div className="flex items-end gap-2 h-14 pt-2">
                    <div className="w-3.5 bg-[#003BE2]/30 rounded-t h-[45%]" />
                    <div className="w-3.5 bg-[#003BE2] rounded-t h-[65%]" />
                    <div className="w-3.5 bg-[#CBFC01] rounded-t h-[85%]" />
                    <div className="w-3.5 bg-[#003BE2] rounded-t h-[100%]" />
                  </div>
                  <span className="text-[11px] text-emerald-600 font-bold">+18.5% this month</span>
                </div>

                {/* 3D Shapes: shapeConeLime on top-right, shapeSpring1Blue on bottom-left */}
                <img
                  src={shapeConeLime}
                  alt=""
                  className="absolute -right-6 -top-4 w-28 h-28 object-contain pointer-events-none drop-shadow-lg -z-10"
                />
                <img
                  src={shapeSpring1Blue}
                  alt=""
                  className="absolute -left-12 -bottom-10 w-32 h-32 object-contain pointer-events-none drop-shadow-lg -z-10"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Create & Manage Courses Easily.
              </h2>

              <p className="text-[#4B4C53] text-base sm:text-lg leading-[1.6]">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* 4 Checklist Points */}
              <div className="space-y-4 pt-2">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#CBFC01] flex items-center justify-center shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-[#242528]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-[#242528]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/register"
                  className="inline-block bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-base px-8 py-3.5 rounded-[12px] transition-all active:scale-95 shadow-sm"
                >
                  Become a Creator
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 
        ========================================================================
        6. CREATOR CTA BANNER ("Unlock Your Potential as a Creator with ByteSpace")
        ========================================================================
      */}
      <section className="relative w-full bg-hero-grid bg-[#003BE2] py-28 mt-8 text-white">
        {/* Surrounding 3D Shapes positioned without overlapping the 2-line heading */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Top-Left: shapeConeLime */}
          <img
            src={shapeConeLime}
            alt=""
            className="absolute left-4 lg:left-14 -top-8 w-36 lg:w-48 object-contain opacity-95 drop-shadow-lg"
          />
          {/* Bottom-Left: shapeTorusBlue */}
          <img
            src={shapeTorusBlue}
            alt=""
            className="absolute left-6 lg:left-16 -bottom-10 w-44 lg:w-56 object-contain opacity-90"
          />
          {/* Top-Right: shapePyramidWhite placed comfortably away from 2-line text */}
          <img
            src={shapePyramidWhite}
            alt=""
            className="absolute right-6 lg:right-20 -top-8 w-28 lg:w-36 object-contain opacity-85 drop-shadow-lg"
          />
          {/* Bottom-Right: shapeCylinderLime replacing spring-white */}
          <img
            src={shapeCylinderLime}
            alt=""
            className="absolute right-6 lg:right-16 -bottom-8 w-36 lg:w-48 object-contain opacity-90 drop-shadow-lg"
          />
        </div>

        <Container className="relative z-10 text-center max-w-[850px] mx-auto space-y-6">
          {/* Exact 2 lines heading as in Figma */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.01em] leading-[1.2] max-w-[680px] mx-auto">
            Unlock Your Potential as a <br className="hidden sm:inline" />Creator with ByteSpace
          </h2>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-[780px] mx-auto font-normal">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="pt-4">
            <Link
              to="/register"
              className="inline-block bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-lg px-10 py-4 rounded-[12px] transition-all active:scale-95 shadow-lg"
            >
              Join as Creator
            </Link>
          </div>
        </Container>
      </section>

      {/* 
        ========================================================================
        7. TESTIMONIALS SECTION ("Discover What Our Community Is Saying")
        ========================================================================
      */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Soft radial background glow (lime/blue) on the right side */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#CBFC01]/30 via-[#003BE2]/20 to-transparent blur-[120px] pointer-events-none -z-10" />

        <Container className="space-y-16 relative z-10">
          {/* Header Row: Left Heading (44px) + Right Description (18px) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Discover What Our Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[#4B4C53] text-base sm:text-lg leading-[1.6]">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonial Cards (Normal upright font, no italic) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[24px] p-8 border border-[#E5E6E8] shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  {/* User Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#E5E6E8]"
                    />
                    <div>
                      <h4 className="text-[20px] font-semibold text-[#242528]">{t.name}</h4>
                      <p className="text-sm text-[#82868E] font-normal">{t.role}</p>
                    </div>
                  </div>

                  {/* Quote: Clean upright font, no italic */}
                  <p className="text-base text-[#4B4C53] leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
