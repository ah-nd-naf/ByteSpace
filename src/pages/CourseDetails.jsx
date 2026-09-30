import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import {
  courseDetailHeroWoman,
  courseDetailAuthorMan,
  courseDetailGallery1,
  courseDetailGallery2,
  courseDetailGallery3,
  courseDetailGallery4,
  avatar06,
  avatar11,
  avatar13,
  avatar14,
} from '../assets/images';
import privateConsultationIcon from '../assets/icon-private-consultation.png';

// Exact standard 5-point vector star matching Figma prototype icon system
function FigmaStarIcon({ className = 'w-4 h-4 fill-current' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function CourseDetails() {
  useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTabParam = searchParams.get('tab') || 'about';
  const [activeTab, setActiveTab] = useState(currentTabParam);

  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [activeReviewFilter, setActiveReviewFilter] = useState('all');

  const videoCardRef = useRef(null);
  const pageContainerRef = useRef(null);
  const [heroBgHeight, setHeroBgHeight] = useState(948);

  // Sync tab with URL search parameter if changed externally
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  // Deterministically calculate hero background height relative to the page container
  // In Figma, the blue hero background extends 52px below the video card
  useEffect(() => {
    const updateHeroHeight = () => {
      if (videoCardRef.current && pageContainerRef.current) {
        let offsetTop = 0;
        let el = videoCardRef.current;
        while (el && el !== pageContainerRef.current) {
          offsetTop += el.offsetTop;
          el = el.offsetParent;
        }
        const videoHeight = videoCardRef.current.offsetHeight;
        // In Figma, the blue hero background extends 52px below the video card
        const calculatedHeight = offsetTop + videoHeight + 52;
        if (calculatedHeight > 0) {
          setHeroBgHeight(calculatedHeight);
        }
      }
    };

    updateHeroHeight();

    let ro;
    if (typeof ResizeObserver !== 'undefined' && videoCardRef.current) {
      ro = new ResizeObserver(() => {
        updateHeroHeight();
      });
      ro.observe(videoCardRef.current);
      if (pageContainerRef.current) {
        ro.observe(pageContainerRef.current);
      }
    }

    window.addEventListener('resize', updateHeroHeight);
    return () => {
      window.removeEventListener('resize', updateHeroHeight);
      if (ro) ro.disconnect();
    };
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Gallery items for "Sneak Peak" strictly matching Figma Screenshot 3 order
  const sneakPeakImages = [
    { src: courseDetailGallery4, alt: 'Wireframing & sketching digital products on paper' },
    { src: courseDetailGallery2, alt: 'Designing modern desktop interfaces on laptop' },
    { src: courseDetailGallery3, alt: 'Design system workspace setup on iMac' },
    { src: courseDetailGallery1, alt: 'Mobile app layout and prototyping on phones' },
  ];

  // 8 Key Points strictly matching Figma Frame 5
  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ];

  // Modules for "Lessons" tab strictly matching Figma Frame 6 & screenshots
  const lessonModules = [
    {
      id: 'm1',
      title: 'Module 1: Introduction to Digital Assets',
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: 'm2',
      title: 'Module 2: Design Principles for Impact',
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: 'm4',
      title: 'Module 4: User-Centric Design Strategies',
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: 'm5',
      title: 'Module 5: Interactive Media and Engagement',
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: 'm6',
      title: 'Module 6: Project Showcase and Critique',
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: 'm7',
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  // Reviews strictly matching Figma Frame 7
  const studentReviews = [
    {
      author: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: avatar14,
      hasQuotes: true,
      content:
        'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
    },
    {
      author: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: avatar13,
      hasQuotes: false,
      content:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      author: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: avatar11,
      hasQuotes: false,
      content:
        'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
    },
    {
      author: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: avatar06,
      hasQuotes: false,
      content:
        'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
    },
  ];

  return (
    <div ref={pageContainerRef} className="course-details-page w-full bg-white relative">
      {/* 
        Top Blue Hero Background:
        Spans from page top down to the bottom edge of the video card, exactly matching Figma Screenshots 1 & 2!
      */}
      <div
        className="absolute top-0 left-0 right-0 bg-[#003BE2] bg-hero-grid pointer-events-none z-0"
        style={{ height: `${heroBgHeight}px` }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px] pt-8 lg:pt-10 pb-24">
        {/* ================= HERO HEADER ================= */}
        <div className="mb-8 lg:mb-10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-semibold text-3xl sm:text-[36px] text-white tracking-[-0.01em] leading-[1.2]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[1.2] text-white mt-2.5 tracking-[-0.01em]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="font-satoshi text-white/80 text-sm sm:text-base mt-3 font-normal leading-[1.6]">
                by{' '}
                <Link
                  to="/creator/1"
                  className="text-white hover:underline font-normal cursor-pointer"
                >
                  purepearl studio
                </Link>
              </p>
            </div>

            {/* Share Button (Figma Frame 5: Lime rounded-full button on the right) */}
            <button
              type="button"
              onClick={handleShare}
              className="self-start lg:self-center flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#1D1E20] font-satoshi font-medium text-sm transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
            >
              <svg
                className="w-4 h-4 stroke-[2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>
          </div>

          {/* Badges Row: Intermediate | 4.8 (172 reviews) | 199 Students */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {/* Badge 1: Intermediate (Signal Icon) */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1D1E20] font-satoshi text-sm font-medium shadow-sm">
              <svg
                className="w-4 h-4 text-[#003BE2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="4" y="14" width="3" height="7" rx="0.8" />
                <rect x="10.5" y="9" width="3" height="12" rx="0.8" />
                <rect x="17" y="4" width="3" height="17" rx="0.8" />
              </svg>
              <span>Intermediate</span>
            </div>

            {/* Badge 2: 4.8 (172 reviews) (Blue Star) */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1D1E20] font-satoshi text-sm font-medium shadow-sm">
              <FigmaStarIcon className="w-4 h-4 text-[#003BE2] fill-current" />
              <span>4.8 (172 reviews)</span>
            </div>

            {/* Badge 3: 199 Students (Two people icon) */}
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1D1E20] font-satoshi text-sm font-medium shadow-sm">
              <svg
                className="w-4 h-4 text-[#003BE2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>199 Students</span>
            </div>
          </div>
        </div>

        {/* ================= 2-COLUMN MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT COLUMN (~65% / 8 cols) ================= */}
          <div className="lg:col-span-8 space-y-0">
            {/* Video Preview Card (Sits flush on the blue hero background, 720x479 aspect ratio matching Figma Frame 5/7) */}
            <div
              ref={videoCardRef}
              className="w-full rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)] relative aspect-[720/479] lg:h-[479px] bg-[#E5E6E8] group"
            >
              <img
                src={courseDetailHeroWoman}
                alt="Build Digital Asset Preview - Woman with glasses in purple sweater"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Centered Frosted Glass Play Button (Matching Figma Screenshot 1) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Course Video Preview"
                  className="w-18 h-18 sm:w-22 sm:h-22 rounded-[22px] sm:rounded-[26px] bg-white/40 hover:bg-white/55 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5 drop-shadow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Under Video Card (On pure white background, starts 92px below video card matching Figma) */}
            <div className="pt-10 lg:pt-[92px]">
              {/* Interactive Tabs: About | Lesson | Reviews */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleTabChange('about')}
                  className={`px-6 py-2.5 rounded-full font-satoshi text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'about'
                      ? 'bg-[#CBFC01] text-[#1D1E20] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#6C707A] hover:bg-[#EBEBEF] hover:text-[#1D1E20]'
                  }`}
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange('lessons')}
                  className={`px-6 py-2.5 rounded-full font-satoshi text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'lessons'
                      ? 'bg-[#CBFC01] text-[#1D1E20] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#6C707A] hover:bg-[#EBEBEF] hover:text-[#1D1E20]'
                  }`}
                >
                  Lesson
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange('reviews')}
                  className={`px-6 py-2.5 rounded-full font-satoshi text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'bg-[#CBFC01] text-[#1D1E20] shadow-sm'
                      : 'bg-[#F5F5F6] text-[#6C707A] hover:bg-[#EBEBEF] hover:text-[#1D1E20]'
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* ================= TAB 1: ABOUT (Figma Frame 5) ================= */}
              {activeTab === 'about' && (
                <div className="mt-8">
                  {/* Description Section */}
                  <div>
                    <h2 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-4">
                      Description
                    </h2>
                    <div className="font-satoshi text-[#54575C] text-base leading-[1.6] space-y-5 font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Section */}
                  <div className="mt-12">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-5">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                      {sneakPeakImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="w-full aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-sm border border-[#E5E6E8]/60 group"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Section (8 Blue Checkmark Items) */}
                  <div className="mt-12">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-6">
                      Key Points
                    </h3>
                    <div className="space-y-4">
                      {keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-3.5">
                          <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                            <svg
                              className="w-3 h-3 text-white stroke-[2.8]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="font-satoshi text-[#1D1E20] font-medium text-sm sm:text-[15px] leading-[1.6]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 2: LESSONS (Figma Frame 6 & Screenshots 1-3) ================= */}
              {activeTab === 'lessons' && (
                <div className="mt-8">
                  {/* Explore the Modules Section */}
                  <div>
                    <h2 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-3">
                      Explore the Modules
                    </h2>
                    <p className="font-satoshi text-[#54575C] text-[15px] sm:text-base leading-[1.6] max-w-2xl mb-8 font-normal">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List Section */}
                  <div>
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-6">
                      Lesson List
                    </h3>
                    <div className="space-y-6 sm:space-y-7">
                      {lessonModules.map((mod) => (
                        <div key={mod.id} className="flex items-start gap-4 sm:gap-5">
                          {/* Lime Camcorder Icon (Exact Figma Frame 6) */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[18px] bg-[#CBFC01] flex items-center justify-center shrink-0 shadow-xs">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1E20]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="2.5" y="6" width="13" height="12" rx="2" />
                              <polygon
                                points="15.5 10 21.5 6.5 21.5 17.5 15.5 14"
                                fill="#1D1E20"
                                stroke="none"
                              />
                            </svg>
                          </div>

                          {/* Content: Title & Description */}
                          <div className="flex-1 min-w-0 pt-0.5">
                            <h4 className="font-poppins font-semibold text-base sm:text-[17px] text-[#1D1E20] leading-[1.2] tracking-tight">
                              {mod.title}
                            </h4>
                            <p className="font-satoshi text-sm sm:text-[15px] text-[#54575C] leading-[1.6] mt-1 font-normal">
                              {mod.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content Section */}
                  <div className="mt-12 sm:mt-14">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-3">
                      Lesson Content
                    </h3>
                    <p className="font-satoshi text-[#54575C] text-[15px] sm:text-base leading-[1.6] font-normal">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking Section */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-3">
                      Lesson Progress Tracking
                    </h3>
                    <p className="font-satoshi text-[#54575C] text-[15px] sm:text-base leading-[1.6] mb-6 font-normal">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card (Exact Figma Screenshots 2 & 3) */}
                    <div className="p-6 sm:p-8 rounded-[20px] bg-white border border-[#CED0D3]">
                      <span className="font-satoshi text-sm font-medium text-[#54575C] block">
                        Learning Progress
                      </span>
                      <div className="font-poppins font-semibold text-3xl sm:text-[38px] text-[#1D1E20] leading-[1.2] mt-2 mb-6">
                        55%
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-[#E5E6E8] overflow-hidden">
                        <div
                          className="h-full bg-[#CBFC01] rounded-full transition-all duration-700 ease-out"
                          style={{ width: '55%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 3: REVIEWS (Figma Frame 7) ================= */}
              {activeTab === 'reviews' && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h2 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-2">
                      What Learners Are Saying
                    </h2>
                    <p className="font-satoshi text-[#54575C] text-sm sm:text-base leading-[1.6] font-normal">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  {/* Ratings Breakdown Summary (Exact Figma Screenshot 2) */}
                  <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-[#E5E6E8] flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                    {/* Left: Electric Lime Ratings Box */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-[20px] bg-[#CBFC01] flex flex-col items-center justify-center p-4 shrink-0 shadow-xs">
                      <span className="font-satoshi text-xs sm:text-sm font-medium text-[#1D1E20] mb-1">
                        Ratings
                      </span>
                      <span className="font-poppins font-semibold text-4xl sm:text-[44px] text-[#1D1E20] leading-[1.2] tracking-tight">
                        4.7
                      </span>
                    </div>

                    {/* Right: 5 Rows of Bars, Charcoal Stars, and Counts */}
                    <div className="flex-1 w-full space-y-3.5">
                      {[
                        { width: 'w-[82%]', count: 720 },
                        { width: 'w-[24%]', count: 120 },
                        { width: 'w-[6%]', count: 21 },
                        { width: 'w-[3.5%]', count: 12 },
                        { width: 'w-[4.5%]', count: 16 },
                      ].map((row, idx) => (
                        <div key={idx} className="flex items-center gap-4 sm:gap-6 text-sm">
                          {/* Lime filled Progress Bar */}
                          <div className="flex-1 h-2 sm:h-2.5 rounded-full bg-[#E5E6E8] overflow-hidden">
                            <div className={`h-full bg-[#CBFC01] rounded-full ${row.width}`} />
                          </div>

                          {/* 5 Charcoal Stars (Exact Figma Star) */}
                          <div className="flex items-center gap-1 text-[#242528] shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <FigmaStarIcon
                                key={i}
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#242528] fill-current"
                              />
                            ))}
                          </div>

                          {/* Count */}
                          <span className="w-9 text-right text-xs sm:text-sm font-normal text-[#54575C] shrink-0 font-satoshi">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Section */}
                  <div className="space-y-6">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] leading-[1.2]">
                      Individual Reviews:
                    </h3>

                    {/* Filter Pills: All rating | ★ 5 | ★ 4 | ★ 3 | ★ 2 | ★ 1 */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {[
                        { id: 'all', label: 'All rating' },
                        { id: '5', label: '5' },
                        { id: '4', label: '4' },
                        { id: '3', label: '3' },
                        { id: '2', label: '2' },
                        { id: '1', label: '1' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveReviewFilter(tab.id)}
                          className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-satoshi text-xs sm:text-sm transition-all cursor-pointer ${
                            activeReviewFilter === tab.id
                              ? 'bg-[#CBFC01] text-[#1D1E20] font-semibold shadow-xs'
                              : 'bg-[#EDEDEE] text-[#242528] font-medium hover:bg-[#E2E3E5]'
                          }`}
                        >
                          {tab.id !== 'all' && (
                            <FigmaStarIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                          )}
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Review Cards (Matching Figma Screenshot 3, 4, 5) */}
                    <div className="space-y-5">
                      {studentReviews
                        .filter(
                          (rev) =>
                            activeReviewFilter === 'all' ||
                            rev.rating.toString() === activeReviewFilter
                        )
                        .map((rev, idx) => (
                          <div
                            key={idx}
                            className="p-6 sm:p-7 rounded-[24px] bg-white border border-[#E5E6E8] shadow-xs space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3.5">
                                <img
                                  src={rev.avatar}
                                  alt={rev.author}
                                  className="w-12 h-12 rounded-full object-cover border border-[#E5E6E8] shrink-0"
                                />
                                <div>
                                  <h4 className="font-poppins font-semibold text-base sm:text-[18px] text-[#1D1E20] leading-[1.2]">
                                    {rev.author}
                                  </h4>
                                  <p className="font-satoshi text-xs sm:text-sm text-[#82868E] mt-0.5 font-normal">
                                    {rev.role}
                                  </p>
                                </div>
                              </div>

                              <span className="font-satoshi text-xs sm:text-sm text-[#82868E] font-normal">
                                {rev.time}
                              </span>
                            </div>

                            {/* 5 Dark Charcoal Stars (Exact Figma Star) */}
                            <div className="flex items-center gap-1 text-[#242528] pt-1">
                              {[...Array(rev.rating)].map((_, i) => (
                                <FigmaStarIcon
                                  key={i}
                                  className="w-4 h-4 text-[#242528] fill-current"
                                />
                              ))}
                            </div>

                            <p className="font-satoshi text-sm sm:text-[15px] text-[#4B4C53] leading-[1.6] font-normal pt-1">
                              {rev.hasQuotes ? `"${rev.content}"` : rev.content}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= RIGHT COLUMN (~35% / 4 cols) ================= */}
          {/* Static Sidebar Card (Anchored at top in document flow, does not stick on scroll) */}
          <div className="lg:col-span-4">
            <div className="w-full max-w-[412px] bg-white rounded-[24px] border border-[#CED0D3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-[40px]">
              {/* Header: 112 Lessons (24 hours) */}
              <h3 className="font-poppins font-semibold text-xl sm:text-[20px] text-[#1D1E20] tracking-[-0.01em] leading-[1.2] mb-6">
                112 Lessons (24 hours)
              </h3>

              {/* Lesson Previews List */}
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="font-poppins font-semibold text-[#1D1E20] w-6 shrink-0">01</span>
                    <span className="font-satoshi font-normal text-[#1D1E20] max-w-[210px] leading-snug">
                      Introduction to Digital Assets
                    </span>
                  </div>
                  <span className="font-satoshi font-medium text-[#003BE2] shrink-0">12 mins</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="font-poppins font-semibold text-[#1D1E20] w-6 shrink-0">02</span>
                    <span className="font-satoshi font-normal text-[#1D1E20] max-w-[210px] leading-snug">
                      Design Principles for Impacts
                    </span>
                  </div>
                  <span className="font-satoshi font-medium text-[#003BE2] shrink-0">21 mins</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="font-poppins font-semibold text-[#1D1E20] w-6 shrink-0">03</span>
                    <span className="font-satoshi font-normal text-[#1D1E20] max-w-[210px] leading-snug">
                      Advanced Techniques in Digital Creation
                    </span>
                  </div>
                  <span className="font-satoshi font-medium text-[#003BE2] shrink-0">16 mins</span>
                </div>

                <p className="font-satoshi text-sm sm:text-[15px] text-[#82868E] font-normal pt-2 pb-1">
                  99 more videos
                </p>
              </div>

              {/* Prompt Text */}
              <p className="font-satoshi text-sm sm:text-[15px] text-[#54575C] leading-[1.6] my-6 font-normal">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              {/* Pricing Row: $25 /lifetime */}
              <div className="flex items-baseline mb-5">
                <span className="font-poppins font-semibold text-3xl sm:text-[36px] text-[#003BE2] leading-[1.2] tracking-tight">
                  $25
                </span>
                <span className="font-satoshi text-sm sm:text-base text-[#82868E] font-normal ml-1.5">
                  /lifetime
                </span>
              </div>

              {/* Enroll Now Button (Figma Frame 5: Lime rounded-full button) */}
              <button
                type="button"
                onClick={() => setEnrolled(true)}
                className="w-full h-14 bg-[#CBFC01] hover:bg-[#b8e400] text-[#1D1E20] font-satoshi font-medium text-lg leading-[1.2] rounded-full shadow-sm flex items-center justify-center transition-all active:scale-[0.98] cursor-pointer mb-8"
              >
                {enrolled ? 'Enrolled Successfully!' : 'Enroll Now'}
              </button>

              {/* "This course include" Section */}
              <div>
                <h4 className="font-poppins font-semibold text-[18px] sm:text-[20px] text-[#1D1E20] mb-5 tracking-[-0.01em] leading-[1.2]">
                  This course include
                </h4>
                <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px]">
                  {/* 1. Learning Resources Icon (Exact Figma outline folder with document lines) */}
                  <div className="flex items-center gap-3.5 text-[#4B4C53]">
                    <svg
                      className="w-5 h-5 text-[#003BE2] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7v10.5a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-7.5l-2-2H5a2 2 0 00-2 2z" />
                      <line x1="7.5" y1="12" x2="16.5" y2="12" strokeWidth="2.2" />
                      <line x1="7.5" y1="15.5" x2="12.5" y2="15.5" strokeWidth="2.2" />
                    </svg>
                    <span className="font-satoshi font-normal leading-[1.6]">Learning Resources</span>
                  </div>

                  {/* 2. Quality Lesson Videos Icon (Exact Figma camcorder outline with solid triangle lens) */}
                  <div className="flex items-center gap-3.5 text-[#4B4C53]">
                    <svg
                      className="w-5 h-5 text-[#003BE2] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2.5" y="6" width="13" height="12" rx="2" />
                      <polygon
                        points="15.5 10 21.5 6.5 21.5 17.5 15.5 14"
                        fill="#003BE2"
                        stroke="none"
                      />
                    </svg>
                    <span className="font-satoshi font-normal leading-[1.6]">Quality Lesson Videos</span>
                  </div>

                  {/* 3. Certificate of Completion Icon (Exact Figma ID badge with top clip, person silhouette & lines) */}
                  <div className="flex items-center gap-3.5 text-[#4B4C53]">
                    <svg
                      className="w-5 h-5 text-[#003BE2] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2.5" y="6.5" width="19" height="14" rx="2" />
                      <path d="M10 6.5V3.8c0-.7.6-1.3 1.3-1.3h1.4c.7 0 1.3.6 1.3 1.3v2.7" strokeWidth="2" />
                      <circle cx="7.2" cy="11.5" r="1.5" fill="#003BE2" stroke="none" />
                      <path d="M5 16.5c0-1.4 1-2.2 2.2-2.2s2.2.8 2.2 2.2H5z" fill="#003BE2" stroke="none" />
                      <line x1="12" y1="11.5" x2="17.5" y2="11.5" strokeWidth="2.2" />
                      <line x1="12" y1="15" x2="17.5" y2="15" strokeWidth="2.2" />
                    </svg>
                    <span className="font-satoshi font-normal leading-[1.6]">Certificate of Completion</span>
                  </div>

                  {/* 4. Private Consultation Icon (Exact vector asset exported directly from Figma) */}
                  <div className="flex items-center gap-3.5 text-[#4B4C53]">
                    <img
                      src={privateConsultationIcon}
                      alt=""
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <span className="font-satoshi font-normal leading-[1.6]">Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-8 pt-7 border-t border-[#F0F1F3]">
                <div className="flex items-center gap-3.5">
                  <img
                    src={courseDetailAuthorMan}
                    alt="PurePearl Studio Instructor"
                    className="w-14 h-14 rounded-full object-cover border border-[#E5E6E8] shrink-0"
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-base sm:text-[18px] text-[#1D1E20] leading-[1.2]">
                      PurePearl Studio
                    </h4>
                    <p className="font-satoshi text-xs sm:text-sm text-[#82868E] mt-0.5 font-normal">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="font-satoshi text-sm sm:text-[15px] text-[#54575C] leading-[1.6] my-5 font-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <Link
                  to="/creator/1"
                  className="inline-block px-7 py-2.5 rounded-full border border-[#CED0D3] text-[#242528] font-satoshi text-sm font-medium hover:border-[#242528] hover:bg-[#F9FAFB] transition-all cursor-pointer"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player (Opens on clicking the preview play button) */}
      {isPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="bg-black rounded-[24px] overflow-hidden max-w-4xl w-full aspect-video shadow-2xl relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer font-satoshi"
              aria-label="Close video preview"
            >
              ✕
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-white text-center p-8 bg-linear-to-b from-[#003BE2]/30 to-black">
              <div className="w-20 h-20 rounded-full bg-[#CBFC01] text-[#1D1E20] flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-9 h-9 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-2xl mb-2 text-white leading-[1.2]">
                Build Digital Asset: Video Preview
              </h3>
              <p className="font-satoshi text-sm text-white/80 max-w-md leading-[1.6]">
                Course video trailer and sample lesson 01: Introduction to Digital Assets (12 mins).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
