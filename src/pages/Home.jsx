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
  shapeSpring2Lime,
  shapeSpring1White,
  shapeSpring2White,
  shapeTorusWhite,
  shapePyramidBrightWhite,
  shapeConeLime,
  shapePyramidWhite,
  shapeCone,
  shapeCylinder,
  shapeTorusLime,
  shapeTorusBlue,
  shapeSpring1Blue,
  learningPathDesign,
  learningPathDevelopment,
  learningPathItSoftware,
  learningPathBusiness,
  learningPathMarketing,
  learningPathPhotography,
} from '../assets/images';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');

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
      price: '$25',
      pricePeriod: '/lifetime',
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
      price: '$25',
      pricePeriod: '/lifetime',
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
      price: '$25',
      pricePeriod: '/lifetime',
      category: 'Data Science',
      highlightEnroll: true,
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
      price: '$25',
      pricePeriod: '/lifetime',
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
      price: '$25',
      pricePeriod: '/lifetime',
      category: 'Finance',
      highlightEnroll: true,
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
      price: '$25',
      pricePeriod: '/lifetime',
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

  // Category paths with lime circle icons (Exact Figma Prototype Assets)
  const learningPaths = [
    {
      name: 'Design',
      slug: 'design',
      icon: learningPathDesign,
    },
    {
      name: 'Development',
      slug: 'development',
      icon: learningPathDevelopment,
    },
    {
      name: 'IT & Software',
      slug: 'it',
      icon: learningPathItSoftware,
    },
    {
      name: 'Business',
      slug: 'business',
      icon: learningPathBusiness,
    },
    {
      name: 'Marketing',
      slug: 'marketing',
      icon: learningPathMarketing,
    },
    {
      name: 'Photography',
      slug: 'photography',
      icon: learningPathPhotography,
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
    <div className="w-full font-satoshi overflow-x-hidden">
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

          {/* 6. Bottom-Right: shapeSpring2White (Large white 3D spring matching Figma) */}
          <img
            src={shapeSpring2White}
            alt=""
            className="pointer-events-none absolute select-none object-contain"
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
            <h1 className="font-poppins text-[72px] font-semibold text-white tracking-[-0.01em] leading-[1.2]">
              Get Access to Hundreds <br />Courses Available
            </h1>
          </div>

          {/* Hero Subtitle - Exact Figma properties: Width 819px, Height 29px, Size 18px, Line-height 160%, Color #E5E6E8 */}
          <p
            className="font-satoshi absolute text-center left-0 right-0 mx-auto text-[#E5E6E8] text-[18px] font-normal leading-[1.6]"
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
            <h4 className="font-poppins text-[16px] font-semibold text-[#242528] leading-tight">UI/UX Design</h4>
            <p className="font-satoshi text-[12px] text-[#82868E] whitespace-nowrap mt-1">200 Courses • 1000+ Students</p>
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
            <span className="font-satoshi text-[14px] text-[#4B4C53] font-medium">Learning Progress</span>
            <span className="font-poppins text-[48px] font-semibold text-[#242528] leading-none tracking-tight">55%</span>
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
              <h4 className="font-poppins text-[16px] font-semibold text-[#242528] leading-tight">Happy Students</h4>
              <div className="flex items-center gap-1.5 mt-1 font-satoshi">
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
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-5 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-[854px] mx-auto space-y-4">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
              Discover Your Passion, <br className="hidden sm:inline" />Build Your Skills
            </h2>
            <p className="font-satoshi text-[#4B4C53] text-base sm:text-[18px] leading-[1.6] max-w-[750px] mx-auto font-normal">
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills (3 Centered Rows matching exact Figma screenshot layout) */}
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 max-w-[1200px] mx-auto pt-2 w-full overflow-x-auto no-scrollbar">
            {/* Row 1 - 8 Pills */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap">
              {['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveCategory(pill)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] md:text-[15px] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === pill
                      ? 'bg-[#CBFC01] text-[#242528] font-semibold shadow-xs'
                      : 'bg-[#F5F5F6] text-[#242528] font-normal hover:bg-[#E5E6E8]'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Row 2 - 6 Pills */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap">
              {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveCategory(pill)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] md:text-[15px] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === pill
                      ? 'bg-[#CBFC01] text-[#242528] font-semibold shadow-xs'
                      : 'bg-[#F5F5F6] text-[#242528] font-normal hover:bg-[#E5E6E8]'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Row 3 - 4 Pills + "+ More" */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap">
              {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveCategory(pill)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] md:text-[15px] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === pill
                      ? 'bg-[#CBFC01] text-[#242528] font-semibold shadow-xs'
                      : 'bg-[#F5F5F6] text-[#242528] font-normal hover:bg-[#E5E6E8]'
                  }`}
                >
                  {pill}
                </button>
              ))}
              <Link
                to="/search"
                className="text-[#003BE2] hover:text-[#0030B8] text-[13px] sm:text-[14px] md:text-[15px] font-medium ml-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                + More
              </Link>
            </div>
          </div>

          {/* 3x2 Course Cards Grid (Max-width 1200px, 40px gap matching exact Figma coordinates) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto pt-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        4. CATEGORIES SECTION ("Explore Diverse Learning Paths at Bytespace")
           Exact Figma 1:1 Boxed Cards Layout (169x169px, rounded-[25px], #CED0D3 border)
        ========================================================================
      */}
      <section className="w-full py-20 lg:py-24 bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-5 space-y-12 sm:space-y-14">
          {/* Header */}
          <div className="text-center max-w-[854px] mx-auto space-y-4">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="font-satoshi text-[#4B4C53] text-base sm:text-[18px] leading-[1.6] max-w-[760px] mx-auto font-normal">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* 6 Category Boxed Cards (Exact 169x169px cards matching Figma prototype) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-[38px] max-w-[1204px] mx-auto justify-items-center">
            {learningPaths.map((item) => (
              <Link
                key={item.name}
                to={`/search?category=${item.slug}`}
                className="w-full max-w-[169px] h-[169px] bg-white rounded-[25px] border-[1.5px] border-[#CED0D3] hover:border-[#003BE2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-3.5 group cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[60px] h-[60px] object-contain mb-3.5 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-poppins text-[20px] font-semibold text-[#242528] group-hover:text-[#003BE2] transition-colors text-center leading-tight">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        5. FEATURE SPLIT SECTIONS (Row 1 & Row 2 matching exact Figma prototype)
        ========================================================================
      */}
      <section
        className="w-full py-24 lg:py-32 relative overflow-hidden space-y-28 lg:space-y-36"
        style={{
          background: `
            radial-gradient(ellipse 700px 550px at 12% 20%, rgba(203, 252, 1, 0.32) 0%, rgba(203, 252, 1, 0) 70%),
            radial-gradient(ellipse 600px 500px at 2% 48%, rgba(0, 59, 226, 0.10) 0%, rgba(0, 59, 226, 0) 70%),
            radial-gradient(ellipse 650px 550px at 98% 22%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0) 70%),
            radial-gradient(ellipse 650px 600px at 6% 82%, rgba(203, 252, 1, 0.36) 0%, rgba(203, 252, 1, 0) 70%),
            radial-gradient(ellipse 750px 650px at 96% 78%, rgba(0, 59, 226, 0.14) 0%, rgba(0, 59, 226, 0) 70%),
            #FFFFFF
          `,
        }}
      >
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-5 space-y-28 lg:space-y-36">
          {/* Row 1: "Your Path to Professional Growth Starts Here!" */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Your Path to Professional <br className="hidden sm:inline" />Growth Starts Here!
              </h2>

              <p className="font-satoshi text-[#4B4C53] text-base sm:text-[18px] leading-[1.6] max-w-[500px] font-normal">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Counters (12K Students, 70+ Courses, 16 Creators - Exact Figma Typography & Spacing) */}
              <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 pt-2 font-satoshi">
                <div>
                  <span className="font-poppins block text-[36px] sm:text-[44px] font-bold text-[#003BE2] leading-none">12K</span>
                  <span className="text-[18px] text-[#4B4C53] mt-1.5 block font-normal">Students</span>
                </div>
                <div>
                  <span className="font-poppins block text-[36px] sm:text-[44px] font-bold text-[#003BE2] leading-none">70+</span>
                  <span className="text-[18px] text-[#4B4C53] mt-1.5 block font-normal">Courses</span>
                </div>
                <div>
                  <span className="font-poppins block text-[36px] sm:text-[44px] font-bold text-[#003BE2] leading-none">16</span>
                  <span className="text-[18px] text-[#4B4C53] mt-1.5 block font-normal">Creators</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Figma: CourseCard + 3D Spring + Student Cutout + Learning Progress Card) */}
            <div className="lg:col-span-6 relative flex justify-center items-center w-full max-w-[580px] mx-auto min-h-[480px] sm:min-h-[520px]">
              {/* Back Layer 1: Floating Figma Course Card behind Student */}
              <div className="absolute left-0 sm:left-4 top-2 sm:top-4 w-[270px] sm:w-[310px] bg-white rounded-[24px] border border-[#E2E4E8] p-3 shadow-lg z-10 pointer-events-none">
                <div className="aspect-[341/200] rounded-[16px] overflow-hidden relative mb-2.5 bg-[#F5F5F6]">
                  <img src={course1} alt="Figma Course" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 pointer-events-none">
                    <span className="bg-white/70 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-medium text-[#242528] shadow-xs">
                      17 Lessons
                    </span>
                    <span className="bg-white/70 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-medium text-[#242528] shadow-xs">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>
                <div className="space-y-1 font-satoshi">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-poppins text-[14px] sm:text-[15px] font-semibold text-[#242528] line-clamp-1">
                      Learn Figma from Basic
                    </h4>
                    <span className="text-[12px] text-[#6C7278] shrink-0">4.5 ★</span>
                  </div>
                  <p className="text-[11px] text-[#82868E]">
                    by <span className="text-[#003BE2]">purepearl studio</span>
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="bg-[#F5F5F6] text-[#4B4C53] rounded-full px-2.5 py-0.5 text-[11px]">
                      Beginner
                    </span>
                    <div className="flex items-center -space-x-1.5">
                      <img src={avatar08} alt="" className="w-5 h-5 rounded-full object-cover border border-white" />
                      <img src={avatar03} alt="" className="w-5 h-5 rounded-full object-cover border border-white" />
                      <span className="w-5 h-5 rounded-full bg-[#CBFC01] text-[#242528] text-[8px] font-bold flex items-center justify-center border border-white">
                        26+
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="text-[16px] font-bold text-[#003BE2]">$25</span>
                    <span className="text-[11px] text-[#82868E]">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Back Layer 2: 3D Lime Spring Shape */}
              <img
                src={shapeSpring2Lime}
                alt=""
                className="absolute right-0 sm:right-4 top-8 sm:top-12 w-28 sm:w-36 object-contain pointer-events-none z-10 drop-shadow-md"
              />

              {/* Middle Layer: Student Cutout with Headphones & Laptop */}
              <img
                src={cutoutHeroManLaptop}
                alt="Professional Growth"
                className="w-auto h-[460px] sm:h-[530px] object-contain relative z-20 mx-auto drop-shadow-2xl"
              />

              {/* Front Layer: Floating "Learning Progress 55%" Card */}
              <div className="absolute right-0 sm:right-6 top-[220px] sm:top-[260px] bg-white rounded-[20px] p-5 shadow-xl border border-white/80 z-30 min-w-[210px]">
                <span className="text-[13px] font-normal text-[#6C7278] block mb-1.5">
                  Learning Progress
                </span>
                <span className="text-[36px] sm:text-[40px] font-bold text-[#1D1E20] leading-none mb-3 block">
                  55%
                </span>
                <div className="w-full bg-[#EAEBED] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#CBFC01] h-full rounded-full w-[55%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: "Create & Manage Courses Easily." */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Visual Column (Figma: Total Revenue + Year to Date + 3D Spring + Female Creator + Happy Students) */}
            <div className="lg:col-span-6 relative flex justify-center items-center w-full max-w-[580px] mx-auto min-h-[480px] sm:min-h-[520px]">
              {/* Back Layer 1: Floating Blue Revenue Cards on Left */}
              <div className="absolute left-0 sm:left-4 top-6 sm:top-8 bg-[#003BE2] text-white rounded-[18px] p-4 shadow-lg z-10 w-[160px] sm:w-[175px]">
                <span className="text-[13px] font-semibold text-white leading-tight block">
                  Total Revenue
                </span>
                <span className="text-[11px] text-[#A6C0FF] font-normal block mt-0.5">
                  July 1-28
                </span>
                <span className="text-[20px] sm:text-[22px] font-bold text-white mt-1.5 mb-2.5 block leading-none">
                  $120.29
                </span>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#CBFC01] h-full rounded-full w-[65%]" />
                </div>
              </div>

              <div className="absolute left-0 sm:left-4 top-[175px] sm:top-[190px] bg-[#003BE2] text-white rounded-[18px] p-4 shadow-lg z-10 w-[160px] sm:w-[175px]">
                <span className="text-[13px] font-semibold text-white leading-tight block">
                  Year to Date
                </span>
                <span className="text-[11px] text-[#A6C0FF] font-normal block mt-0.5">
                  2023
                </span>
                <span className="text-[20px] sm:text-[22px] font-bold text-white mt-1.5 mb-2 block leading-none">
                  $1,200.38
                </span>
                <span className="inline-block bg-[#CBFC01] text-[#1D1E20] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  +12$
                </span>
              </div>

              {/* Back Layer 2: 3D Lime Spring Shape */}
              <img
                src={shapeSpring2Lime}
                alt=""
                className="absolute right-4 sm:right-10 top-12 sm:top-16 w-28 sm:w-36 object-contain pointer-events-none z-10 drop-shadow-md"
              />

              {/* Middle Layer: Female Creator Cutout with Headset & Tablet */}
              <img
                src={cutoutWomanTablet}
                alt="Creator Teaching"
                className="w-auto h-[460px] sm:h-[530px] object-contain relative z-20 mx-auto drop-shadow-2xl"
              />

              {/* Front Layer: Floating "Happy Students" Card (Exact Figma Prototype Dimensions & Lime Star) */}
              <div className="absolute -right-2 sm:right-2 lg:-right-4 bottom-10 sm:bottom-14 bg-white rounded-[22px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-[#F0F1F3] z-30 w-[275px]">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[15px] font-bold text-[#1D1E20]">
                    Happy Students
                  </span>
                  <div className="flex items-center gap-1 text-[12px] text-[#4B4C53] font-medium">
                    <span>4.5</span>
                    <span>(240)</span>
                    <svg className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center -space-x-2.5 w-full">
                  <img src={avatar01} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar08} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar03} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar02} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar04} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar06} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <img src={avatar11} alt="Student" className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white shadow-xs shrink-0" />
                  <span className="w-[38px] h-[38px] rounded-full bg-[#CBFC01] text-[#1D1E20] text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                    2K+
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-7">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Create & Manage <br className="hidden sm:inline" />Courses Easily.
              </h2>

              <p className="font-satoshi text-[#4B4C53] text-base sm:text-[18px] leading-[1.6] max-w-[500px] font-normal">
                <strong className="text-[#242528] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* 4 Checklist Points (Blue circle with white checkmark) */}
              <div className="space-y-4 pt-2 font-satoshi">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[18px] font-medium text-[#242528] leading-[1.2]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. CREATOR CTA BANNER ("Unlock Your Potential as a Creator with ByteSpace")
        ========================================================================
      */}
      <section className="relative w-full bg-hero-grid bg-[#003BE2] text-white z-10 overflow-hidden min-h-[488px] h-auto lg:h-[488px]">
        <div className="relative mx-auto w-full max-w-[1440px] min-h-[488px] h-auto lg:h-[488px] flex items-center justify-center py-20 lg:py-0">
          {/* Exact Figma 3D Shapes positioned on 1440px canvas clipped within banner frame */}
          <div className="pointer-events-none hidden md:block">
            {/* 1. Top-Left: shapeSpring1Lime (w=387, h=387, left=-122, top=-162) */}
            <img
              src={shapeSpring1Lime}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '-122px',
                top: '-162px',
                width: '387px',
                height: '387px',
                zIndex: 2,
              }}
            />

            {/* 2. Mid-Left: shapeSpring1White (w=175, h=175, left=178, top=5, rotation=-180deg) */}
            <img
              src={shapeSpring1White}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '178px',
                top: '5px',
                width: '175px',
                height: '175px',
                transform: 'rotate(-180deg)',
                zIndex: 2,
              }}
            />

            {/* 3. Bottom-Left: shapeCone (Pure white cone pointing up, w=189, h=189, left=-50, top=225) */}
            <img
              src={shapeCone}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '-50px',
                top: '225px',
                width: '189px',
                height: '189px',
                zIndex: 2,
              }}
            />

            {/* 4. Bottom-Left: shapeTorusLime (Brand lime torus ring, w=342, h=342, left=20, top=299) */}
            <img
              src={shapeTorusLime}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '20px',
                top: '299px',
                width: '342px',
                height: '342px',
                zIndex: 2,
              }}
            />

            {/* 5. Top-Right: shapeConeLime (Lime cone/pyramid pointing up, w=189, h=189, left=1078, top=0) */}
            <img
              src={shapeConeLime}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '1078px',
                top: '0px',
                width: '189px',
                height: '189px',
                zIndex: 2,
              }}
            />

            {/* 6. Mid-Right: shapeCylinder (White cylinder, w=370, h=370, left=1226, top=6) */}
            <img
              src={shapeCylinder}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '1226px',
                top: '6px',
                width: '370px',
                height: '370px',
                zIndex: 2,
              }}
            />

            {/* 7. Bottom-Right: shapeSpring2Lime (Lime spring pointing right/down, w=332, h=332, left=1107, top=289) */}
            <img
              src={shapeSpring2Lime}
              alt=""
              className="absolute select-none object-contain"
              style={{
                left: '1107px',
                top: '289px',
                width: '332px',
                height: '332px',
                zIndex: 2,
              }}
            />
          </div>

          {/* Central Content Column */}
          <div
            className="relative lg:absolute left-0 right-0 mx-auto text-center flex flex-col items-center px-4 sm:px-6 pointer-events-auto"
            style={{
              top: '83px',
              maxWidth: '964px',
              zIndex: 5,
            }}
          >
            {/* Heading: Exact 2 lines from Figma */}
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.01em] leading-[1.2]">
              Unlock Your Potential as a <br className="hidden sm:inline" />Creator with ByteSpace
            </h2>

            {/* Subtitle - Exact Figma properties: Body L, Satoshi/Poppins, 18px, 160% line-height, #F5F5F6, 964px width */}
            <p className="font-satoshi text-[#F5F5F6] text-base sm:text-[18px] leading-[1.6] max-w-[964px] font-normal mt-5">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            {/* Join as Creator Button - Exact Figma properties: 172x46px, rounded-full, #CBFC01, text #1D1E20 */}
            <div className="mt-8 font-satoshi">
              <Link
                to="/register"
                className="h-[46px] w-[172px] bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-medium text-[18px] leading-[1.2] rounded-full transition-all active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
              >
                Join as Creator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. TESTIMONIALS SECTION ("Discover What Our Community Is Saying")
        ========================================================================
      */}
      <section
        className="relative w-full py-24 lg:py-28 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 750px 750px at 98% 30%, rgba(203, 252, 1, 0.42) 0%, rgba(203, 252, 1, 0) 70%),
            radial-gradient(ellipse 550px 550px at 0% 15%, rgba(203, 252, 1, 0.18) 0%, rgba(203, 252, 1, 0) 70%),
            radial-gradient(ellipse 500px 500px at 2% 85%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0) 70%),
            #FFFFFF
          `,
        }}
      >
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-5 space-y-14 sm:space-y-16 relative z-10">
          {/* Header Row: Left Heading (44px) + Right Description (18px) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[1.2]">
                Discover What Our <br className="hidden sm:inline" />Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-satoshi text-[#4B4C53] text-base sm:text-[18px] leading-[1.6] font-normal">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonial Cards (Exact Figma 1:1 Layout: Avatar on top, Name, Blue Role, Quote, 32px rounded, 374px width) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[32px] p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0F1F3] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-start h-full"
              >
                {/* Large Avatar on its own row */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 shadow-xs"
                />

                {/* Name */}
                <h4 className="font-poppins text-[20px] font-semibold text-[#242528] leading-[1.2]">
                  {t.name}
                </h4>

                {/* Role in Primary Blue */}
                <span className="font-satoshi text-[18px] font-normal text-[#003BE2] mt-1 mb-5 block">
                  {t.role}
                </span>

                {/* Quote: Clean upright font, no italic */}
                <p className="font-satoshi text-[18px] text-[#4B4C53] leading-[1.6] font-normal">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
