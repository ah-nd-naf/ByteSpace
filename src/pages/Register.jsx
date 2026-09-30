import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { mapAuthError } from '../context/AuthContext';
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

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user, loading, register } = useAuth();

  // Redirect away from /register if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  const validateForm = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return false;
    }
    if (!email.trim()) {
      setError('Please enter your email.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!password) {
      setError('Please enter your password.');
      return false;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await register(fullName.trim(), email.trim(), password);
      navigate('/');
    } catch (err) {
      setError(mapAuthError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] bg-hero-grid text-[#242528] relative overflow-x-hidden font-satoshi flex flex-col justify-start items-center">
      
      {/* 
        ========================================================================
        EXACT 1440 x 1024 FIGMA DESKTOP ARTBOARD
        Matches nodes 49:63, 49:32, 49:132, 49:138, 49:190, 47:363, 47:367
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

        {/* Heading & Subtitle (Left: 122px, Top: 130px - matching Login Heading XS / Body L) */}
        <div className="absolute left-[122px] top-[130px] w-[475px] z-10">
          <h1 className="font-poppins font-semibold text-[20px] text-[#F5F5F6] leading-[1.2] tracking-[-0.01em]">
            Sign up and come in
          </h1>
          <p className="mt-3 font-satoshi font-normal text-[18px] leading-[1.6] text-[#F5F5F6] w-[475px]">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
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

          {/* Beginner & Avatars: In Figma, the avatars sit directly adjacent to Beginner pill (gap-2), not pushed to the far right */}
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

        {/* RIGHT WHITE CARD (Left: 753px, Top: 110px, 565px x 780px, radius 40px) */}
        <div className="absolute left-[753px] top-[110px] w-[565px] h-[780px] bg-white rounded-[40px] px-[56px] py-[52px] shadow-2xl z-30">
          {/* Inner Content (Figma node 47:363: 453px x 672px, Gap 122px) */}
          <div className="w-[453px] h-[672px] flex flex-col justify-between">
            
            {/* Top Form Block */}
            <div>
              {/* Create an Account */}
              <p className="text-[#003BE2] font-satoshi font-medium text-[16px] mb-2">
                Create an Account
              </p>

              {/* Heading M (Figma node 47:367: Poppins 600 SemiBold, 44px, 120%, -1%, #242528, 453px x 106px) */}
              <h2 className="font-poppins font-semibold text-[44px] text-[#242528] leading-[1.2] tracking-[-0.01em] w-[453px] mb-8">
                Welcome to<br />ByteSpace
              </h2>

              {/* Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inline Error Message */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-[12px] bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 text-sm font-satoshi flex items-start gap-2"
                  >
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-snug">{error}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block font-satoshi font-medium text-[15px] text-[#242528] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Jamie Davis"
                    className="w-[453px] h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] transition-all disabled:opacity-70"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-satoshi font-medium text-[15px] text-[#242528] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="designer@example.com"
                    className="w-[453px] h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] transition-all disabled:opacity-70"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-satoshi font-medium text-[15px] text-[#242528] mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="********"
                    className="w-[453px] h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-[15px] font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] transition-all disabled:opacity-70"
                  />
                </div>

                {/* Continue Button (Right-aligned Lime Pill Button, Label L) */}
                <div className="flex justify-end pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-9 py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-satoshi font-medium text-[18px] leading-[1.2] transition-all duration-200 active:scale-95 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>

            {/* Gap: 122px to Footer (Figma node 47:363) */}
            <div className="text-center text-[15px] font-satoshi text-[#242528]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#003BE2] font-medium hover:underline">
                Login
              </Link>
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
        <div className="w-full max-w-[500px] flex justify-start">
          <Link to="/" aria-label="ByteSpace Home">
            <svg width="34" height="34" viewBox="0 0 29 32" fill="none">
              <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" fill="#CBFC01" />
              <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" fill="#CBFC01" />
              <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" fill="#CBFC01" />
            </svg>
          </Link>
        </div>

        {/* Text */}
        <div className="w-full max-w-[500px]">
          <h1 className="font-poppins font-semibold text-xl text-[#F5F5F6] leading-[1.2]">
            Sign up and come in
          </h1>
          <p className="mt-2 font-satoshi font-normal text-base leading-[1.6] text-[#F5F5F6]">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* White Form Card */}
        <div className="w-full max-w-[500px] bg-white rounded-[32px] p-6 sm:p-10 shadow-2xl">
          <p className="text-[#003BE2] font-satoshi font-medium text-sm mb-1.5">
            Create an Account
          </p>
          <h2 className="font-poppins font-semibold text-3xl text-[#242528] leading-[1.2] mb-6">
            Welcome to<br />ByteSpace
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inline Error Message */}
            {error && (
              <div
                role="alert"
                className="rounded-[12px] bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 text-sm font-satoshi flex items-start gap-2"
              >
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="leading-snug">{error}</span>
              </div>
            )}

            <div>
              <label className="block font-satoshi font-medium text-sm text-[#242528] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                disabled={isSubmitting}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Jamie Davis"
                className="w-full h-[50px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] disabled:opacity-70"
              />
            </div>

            <div>
              <label className="block font-satoshi font-medium text-sm text-[#242528] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                disabled={isSubmitting}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="designer@example.com"
                className="w-full h-[50px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] disabled:opacity-70"
              />
            </div>

            <div>
              <label className="block font-satoshi font-medium text-sm text-[#242528] mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                disabled={isSubmitting}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="********"
                className="w-full h-[50px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-sm font-satoshi focus:outline-none focus:ring-2 focus:ring-[#003BE2] disabled:opacity-70"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-satoshi font-medium text-base transition-all duration-200 active:scale-95 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Account...' : 'Continue'}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-sm font-satoshi text-[#242528]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#003BE2] font-medium hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
