import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  course2,
  course3,
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar08,
  shapeTorusLime,
  shapePyramidLime,
  shapeSpring2White,
} from '../assets/images';

export default function Login() {
  const [email, setEmail] = useState('designer@example.com');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] bg-hero-grid text-[#242528] relative overflow-x-hidden font-satoshi flex flex-col justify-start items-center">
      
      {/* 
        ========================================================================
        EXACT 1440 x 1024 FIGMA DESKTOP ARTBOARD
        Matches nodes 49:195, 49:2208, 49:245, 49:246
        ========================================================================
      */}
      <div className="w-[1440px] h-[1024px] relative shrink-0 overflow-hidden hidden lg:block">
        
        {/* Top-Left Brandmark Logo (Left: 122px, Top: 48px) */}
        <Link 
          to="/" 
          className="absolute left-[122px] top-[48px] inline-block transition-transform active:scale-95 z-30" 
          aria-label="ByteSpace Home"
        >
          <svg width="34" height="34" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
              fill="#CBFC01"
            />
            <path
              d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
              fill="#CBFC01"
            />
            <path
              d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
              fill="#CBFC01"
            />
          </svg>
        </Link>

        {/* Heading & Subtitle (Figma nodes 49:245 & 49:246 - Left: 122px, Top: 130px) */}
        <div className="absolute left-[122px] top-[130px] w-[475px] z-10">
          <h1 className="font-poppins font-semibold text-[20px] text-[#F5F5F6] leading-[1.2] tracking-[-0.01em]">
            Sign in with ease
          </h1>
          <p className="mt-3 font-satoshi font-normal text-[18px] leading-[1.6] text-[#F5F5F6] w-[475px]">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* 3D Shape: Lime Torus (Left: 145px, Top: 335px) */}
        <img
          src={shapeTorusLime}
          alt="3D Lime Torus"
          className="absolute left-[145px] top-[335px] w-[130px] h-[130px] object-contain z-20 pointer-events-none drop-shadow-xl"
        />

        {/* BACK CARD: Course_Card_1 (Figma node 49:32 - Left: 122px, Top: 394px, 373px x 384px) */}
        <div 
          className="absolute left-[122px] top-[394px] w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-4 shadow-xl z-5"
        >
          {/* Thumbnail */}
          <div className="relative rounded-[16px] overflow-hidden w-full h-[194px] bg-[#FAFAFA] mb-3">
            <img
              src={course2}
              alt="Build Digital Asset"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                17 Lessons
              </span>
            </div>
          </div>

          {/* Title & Author */}
          <h3 className="font-poppins font-bold text-[18px] text-[#242528] leading-tight truncate">
            Build Digital Asset
          </h3>
          <p className="text-xs mt-1">
            <span className="text-[#82868E]">by </span>
            <span className="text-[#003BE2]">purepearl studio</span>
          </p>

          {/* Beginner & Avatars */}
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs bg-[#F5F5F6] text-[#4B4C53] px-3 py-1 rounded-full font-medium">
              <svg className="w-3 h-3 text-[#4B4C53]" viewBox="0 0 12 12" fill="currentColor">
                <rect x="1" y="8" width="2" height="4" rx="0.5" />
                <rect x="5" y="5" width="2" height="7" rx="0.5" />
                <rect x="9" y="2" width="2" height="10" rx="0.5" />
              </svg>
              Beginner
            </span>

            <div className="flex items-center -space-x-1.5">
              <img src={avatar03} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar06} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar05} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar01} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <span className="w-6 h-6 rounded-full bg-[#18191B] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                26+
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3 pt-2.5 border-t border-[#F0F1F3] flex items-center">
            <span className="font-bold text-[#003BE2] text-[18px]">$25</span>
            <span className="text-[#82868E] text-xs ml-1 font-normal">/lifetime</span>
          </div>
        </div>

        {/* FRONT CARD: Course_Card_1 (Figma node 49:63 - Left: 233px, Top: 305px, 373px x 384px) */}
        <div 
          className="absolute left-[233px] top-[305px] w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-4 shadow-2xl z-15"
        >
          {/* Thumbnail with overlay badges */}
          <div className="relative rounded-[16px] overflow-hidden w-full h-[194px] bg-[#18191B] mb-3">
            <img
              src={course3}
              alt="the Power of Big Data"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <span className="bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                17 Lessons
              </span>
              <span className="bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                2 hours 16 mins
              </span>
              <span className="bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                59 Comments
              </span>
            </div>
          </div>

          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-poppins font-bold text-[18px] text-[#242528] leading-tight">
                the Power of Big Data
              </h3>
              <p className="text-xs mt-1">
                <span className="text-[#82868E]">by </span>
                <span className="text-[#003BE2]">purepearl studio</span>
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0 pt-0.5 text-sm font-bold text-[#242528]">
              <span>4.5</span>
              <svg className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Beginner & Avatars */}
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs bg-[#F5F5F6] text-[#4B4C53] px-3 py-1 rounded-full font-medium">
              <svg className="w-3 h-3 text-[#4B4C53]" viewBox="0 0 12 12" fill="currentColor">
                <rect x="1" y="8" width="2" height="4" rx="0.5" />
                <rect x="5" y="5" width="2" height="7" rx="0.5" />
                <rect x="9" y="2" width="2" height="10" rx="0.5" />
              </svg>
              Beginner
            </span>

            <div className="flex items-center -space-x-1.5">
              <img src={avatar03} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar06} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar05} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src={avatar01} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <span className="w-6 h-6 rounded-full bg-[#18191B] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                26+
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3 pt-2.5 border-t border-[#F0F1F3] flex items-center">
            <span className="font-bold text-[#003BE2] text-[18px]">$25</span>
            <span className="text-[#82868E] text-xs ml-1 font-normal">/lifetime</span>
          </div>
        </div>

        {/* 3D Shape: White Spring (Left: 380px, Top: 660px, behind Happy Students) */}
        <img
          src={shapeSpring2White}
          alt="3D White Spring"
          className="absolute left-[380px] top-[660px] w-[135px] h-[135px] object-contain z-18 pointer-events-none drop-shadow-xl"
        />

        {/* 3D Shape: Lime Cone / Pyramid (Figma node 49:190 - Left: 97px, Top: 702px, 188px x 188px) */}
        <img
          src={shapePyramidLime}
          alt="3D Lime Cone"
          className="absolute left-[97px] top-[702px] w-[188px] h-[188px] object-contain z-25 pointer-events-none drop-shadow-2xl"
        />

        {/* FLOATING CARD: Happy Students (Figma node 49:132 - Left: 348px, Top: 740px, 258px x 123px, #D4FB20, radius 16px, blur 20) */}
        <div 
          className="absolute left-[348px] top-[740px] w-[258px] bg-[#D4FB20] rounded-[16px] p-4 shadow-xl z-25 backdrop-blur-[20px] flex flex-col justify-between"
          style={{ height: '123px' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="font-poppins font-semibold text-[14px] text-[#242528]">
              Happy Students
            </span>
            <div className="flex items-center gap-1 text-[12px] font-medium text-[#242528]">
              <span>4.5</span>
              <span>(240)</span>
              <svg className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Avatars row (Figma node 49:138: 232px x 43px) */}
          <div className="flex items-center -space-x-2.5 w-[232px] h-[43px]">
            <img src={avatar01} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <img src={avatar08} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <img src={avatar03} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <img src={avatar02} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <img src={avatar04} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <img src={avatar06} alt="Student" className="w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] object-cover" />
            <span className="w-[38px] h-[38px] rounded-full bg-[#18191B] text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#D4FB20]">
              2K+
            </span>
          </div>
        </div>

        {/* 
          RIGHT WHITE CARD: Register_Frame (Figma node 49:2208)
          Left: 741px, Top: 120px, Width: 579px, Height: 784px, Radius: 24px
        */}
        <div className="absolute left-[741px] top-[120px] w-[579px] h-[784px] bg-white rounded-[24px] px-[60px] py-[52px] shadow-2xl z-30">
          <div className="w-[459px] h-full flex flex-col justify-between">
            
            {/* Top Form Block */}
            <div>
              {/* Sign In */}
              <p className="text-[#003BE2] font-satoshi font-medium text-[16px] mb-2">
                Sign In
              </p>

              {/* Heading: Welcome Back */}
              <h2 className="font-poppins font-semibold text-[44px] text-[#242528] leading-[1.2] tracking-[-0.01em] w-[459px] mb-8">
                Welcome Back
              </h2>

              {/* Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block font-satoshi font-medium text-[15px] text-[#242528] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-[459px] h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-satoshi font-medium text-[15px] text-[#242528] mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-[459px] h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] transition-all"
                  />
                </div>

                {/* Sign In Button (Right-aligned Lime Pill Button, Label L) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-9 py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-satoshi font-medium text-[18px] leading-[1.2] transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            {/* Divider 'or' & Social Logins & Footer */}
            <div className="space-y-6">
              {/* Divider 'or' */}
              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-[#CED0D3]"></div>
                <span className="absolute bg-white px-3 font-satoshi text-sm text-[#82868E]">
                  or
                </span>
              </div>

              {/* Social Login Buttons (Facebook & Google) */}
              <div className="flex justify-center items-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  className="w-[64px] h-[64px] rounded-[16px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-[#F5F5F6] active:scale-95 transition-all shadow-xs cursor-pointer"
                  aria-label="Sign in with Facebook"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  className="w-[64px] h-[64px] rounded-[16px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-[#F5F5F6] active:scale-95 transition-all shadow-xs cursor-pointer"
                  aria-label="Sign in with Google"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#000000">
                    <path d="M12 20.4c-4.64 0-8.4-3.76-8.4-8.4S7.36 3.6 12 3.6c2.27 0 4.33.91 5.83 2.38l-2.4 2.4C14.54 7.5 13.35 7.0 12 7.0c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.14 0 3.73-1.22 4.3-2.9h-4.3v-3.2h7.68c.08.43.12.87.12 1.35 0 4.6-3.1 8.15-7.8 8.15z"/>
                  </svg>
                </button>
              </div>

              {/* Footer: New user? Create an account */}
              <div className="text-center text-[15px] font-satoshi text-[#242528] pt-2">
                New user?{' '}
                <Link to="/register" className="text-[#003BE2] font-medium hover:underline">
                  Create an account
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 
        ========================================================================
        RESPONSIVE TABLET / MOBILE VIEW (< 1024px)
        ========================================================================
      */}
      <div className="lg:hidden w-full px-6 py-10 flex flex-col items-center gap-10">
        {/* Brandmark */}
        <div className="w-full max-w-[520px] flex justify-start">
          <Link to="/" aria-label="ByteSpace Home">
            <svg width="34" height="34" viewBox="0 0 29 32" fill="none">
              <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" fill="#CBFC01" />
              <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" fill="#CBFC01" />
              <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" fill="#CBFC01" />
            </svg>
          </Link>
        </div>

        {/* Text */}
        <div className="w-full max-w-[520px]">
          <h1 className="font-poppins font-semibold text-xl text-[#F5F5F6] leading-[1.2]">
            Sign in with ease
          </h1>
          <p className="mt-2 font-satoshi font-normal text-base leading-[1.6] text-[#F5F5F6]">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* White Form Card */}
        <div className="w-full max-w-[520px] bg-white rounded-[24px] p-6 sm:p-10 shadow-2xl">
          <p className="text-[#003BE2] font-satoshi font-medium text-sm mb-1.5">
            Sign In
          </p>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-[#242528] leading-[1.2] mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-satoshi font-medium text-sm text-[#242528] mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="designer@example.com"
                className="w-full h-[50px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <div>
              <label className="block font-satoshi font-medium text-sm text-[#242528] mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full h-[50px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-satoshi font-medium text-base transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Social Logins */}
          <div className="mt-8 space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-[#CED0D3]"></div>
              <span className="absolute bg-white px-3 font-satoshi text-xs text-[#82868E]">
                or
              </span>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                type="button"
                className="w-[56px] h-[56px] rounded-[14px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-[#F5F5F6] active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Sign in with Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-[56px] h-[56px] rounded-[14px] border border-[#CED0D3] bg-white flex items-center justify-center hover:bg-[#F5F5F6] active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Sign in with Google"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12 20.4c-4.64 0-8.4-3.76-8.4-8.4S7.36 3.6 12 3.6c2.27 0 4.33.91 5.83 2.38l-2.4 2.4C14.54 7.5 13.35 7.0 12 7.0c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.14 0 3.73-1.22 4.3-2.9h-4.3v-3.2h7.68c.08.43.12.87.12 1.35 0 4.6-3.1 8.15-7.8 8.15z"/>
                </svg>
              </button>
            </div>

            <div className="text-center text-sm font-satoshi text-[#242528]">
              New user?{' '}
              <Link to="/register" className="text-[#003BE2] font-medium hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
