import { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import Container from '../components/Container';

export default function CourseDetails() {
  const { id = '1' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'lessons', label: 'Lessons (17)' },
    { id: 'reviews', label: 'Reviews (59)' },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen py-10">
      <Container className="space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#82868E] flex items-center gap-2">
          <Link to="/" className="hover:text-[#003BE2]">Home</Link>
          <span>/</span>
          <Link to="/search" className="hover:text-[#003BE2]">Courses</Link>
          <span>/</span>
          <span className="text-[#242528] font-medium">Course #{id}</span>
        </nav>

        {/* Hero Preview Card */}
        <div className="bg-white rounded-[24px] border border-[#E5E6E8] p-8 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs bg-[#CBFC01] text-[#242528] px-3 py-1 rounded-full font-semibold uppercase">
                Design & Prototyping
              </span>
              <span className="text-xs text-[#82868E]">Beginner Level</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242528] leading-tight">
              Learn Figma from Basic by PurePearl
            </h1>

            <p className="text-sm text-[#4B4C53] leading-relaxed">
              Master the essentials of Figma: create design systems, interactive prototypes, and collaborate effectively with design teams.
            </p>

            <div className="flex items-center gap-6 pt-2 text-xs text-[#82868E]">
              <span>17 Lessons</span>
              <span>•</span>
              <span>2 hours 16 mins</span>
              <span>•</span>
              <span>59 Reviews</span>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-[#003BE2]">$49.00</span>
              <button
                type="button"
                className="bg-[#003BE2] hover:bg-[#0030B8] text-white text-sm font-semibold px-8 py-3 rounded-[12px] transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-64 bg-[#003BE2]/10 rounded-[20px] border-2 border-dashed border-[#003BE2]/30 flex flex-col items-center justify-center text-center p-6 text-[#003BE2]">
              <span className="text-sm font-semibold">Course Video Preview Shell</span>
              <span className="text-xs text-[#4B4C53] mt-1">Video player with CSS play button</span>
            </div>
          </div>
        </div>

        {/* Interactive Tabs: Overview, Lessons, Reviews */}
        <div className="bg-white rounded-[24px] border border-[#E5E6E8] shadow-card overflow-hidden">
          <div className="border-b border-[#E5E6E8] px-8 flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSearchParams({ tab: tab.id })}
                className={`py-5 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#003BE2] text-[#003BE2]'
                    : 'border-transparent text-[#82868E] hover:text-[#242528]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-lg font-semibold text-[#242528]">Course Overview & Learning Outcomes</h3>
                <p className="text-sm text-[#4B4C53] leading-relaxed">
                  In this course, you will learn the foundational concepts of modern Figma UI/UX design. We will cover wireframing, layout grids, components, auto-layout, design tokens, and exporting assets for production engineering.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-[16px] bg-[#FAFAFA] border border-[#E5E6E8]">
                    <h4 className="text-xs font-semibold text-[#242528] uppercase mb-1">What You'll Learn</h4>
                    <ul className="text-xs text-[#4B4C53] space-y-1 list-disc list-inside">
                      <li>Complete Figma toolbar walkthrough</li>
                      <li>Components, variants, and interactive states</li>
                      <li>Auto-layout 5.0 masterclass</li>
                      <li>Prototyping realistic user journeys</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-[16px] bg-[#FAFAFA] border border-[#E5E6E8]">
                    <h4 className="text-xs font-semibold text-[#242528] uppercase mb-1">Prerequisites</h4>
                    <p className="text-xs text-[#4B4C53]">
                      No previous design experience required. A free Figma account is all you need to follow along.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lessons' && (
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#242528]">Syllabus & Lessons (17 total)</h3>
                  <span className="text-xs text-[#82868E]">Total duration: 2h 16m</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: '1. Introduction to the Figma Canvas', dur: '08:24', status: 'Free Preview' },
                    { title: '2. Working with Vector Shapes & Pen Tool', dur: '12:10', status: 'Free Preview' },
                    { title: '3. Typography & Color Styles in Figma', dur: '15:40', status: 'Locked' },
                    { title: '4. Mastering Auto-Layout like a Pro', dur: '22:15', status: 'Locked' },
                    { title: '5. Building Reusable Components & Variants', dur: '18:50', status: 'Locked' },
                  ].map((lesson, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-[12px] bg-[#FAFAFA] border border-[#E5E6E8] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#003BE2]/10 text-[#003BE2] text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-medium text-[#242528]">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-[#82868E]">{lesson.dur}</span>
                        <span
                          className={`px-2.5 py-1 rounded-full font-semibold ${
                            lesson.status === 'Free Preview'
                              ? 'bg-[#CBFC01] text-[#242528]'
                              : 'bg-[#E5E6E8] text-[#82868E]'
                          }`}
                        >
                          {lesson.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#242528]">Student Reviews (59)</h3>
                    <p className="text-xs text-[#82868E] mt-1">Average rating: 4.8 / 5.0</p>
                  </div>
                  <button
                    type="button"
                    className="text-xs bg-[#242528] text-white px-4 py-2 rounded-[8px] font-semibold hover:bg-[#003BE2]"
                  >
                    Write a Review
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { author: 'Sarah Jenkins', role: 'Product Designer', rating: '5.0', comment: 'Hands down the most practical Figma course I have ever taken. Clear, concise, and straight to the point!' },
                    { author: 'David Chen', role: 'Frontend Engineer', rating: '5.0', comment: 'As a developer trying to learn design tokens and component structures, this made Figma finally click for me.' },
                  ].map((rev, idx) => (
                    <div key={idx} className="p-4 rounded-[16px] bg-[#FAFAFA] border border-[#E5E6E8] space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-semibold text-[#242528]">{rev.author}</span>
                          <span className="text-xs text-[#82868E] ml-2">• {rev.role}</span>
                        </div>
                        <span className="text-xs bg-[#CBFC01] text-[#242528] px-2 py-0.5 rounded font-bold">
                          ★ {rev.rating}
                        </span>
                      </div>
                      <p className="text-xs text-[#4B4C53] leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
