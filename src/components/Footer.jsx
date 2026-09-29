import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const browseLinks = [
    { label: 'Featured Courses', to: '/search' },
    { label: 'Featured Categories', to: '/search' },
    { label: 'Business', to: '/search?category=business' },
    { label: 'IT', to: '/search?category=it' },
    { label: 'Design', to: '/search?category=design' },
  ];

  const categoryLinks = [
    { label: 'Development', to: '/search?category=development' },
    { label: 'Marketing', to: '/search?category=marketing' },
    { label: 'Photography', to: '/search?category=photography' },
    { label: 'Finance', to: '/search?category=finance' },
    { label: 'Sport', to: '/search?category=sport' },
  ];

  const platformLinks = [
    { label: 'Become a Creator', to: '/register' },
    { label: 'Affiliate Program', to: '/search' },
    { label: 'Contact', to: '/' },
    { label: 'Help', to: '/' },
    { label: 'About', to: '/' },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#E5E6E8] text-[#242528] pt-16 pb-12">
      {/* 
        Outer container measured from PDF:
        Width: 1200px on 1440px desktop (120px left & right padding)
      */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[120px]">
        {/* Main Footer Row: Left Newsletter / Branding + Right 3-Column Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* 
            Left Section (5 cols): Logo, description, subscription input & button
            Measured: Input 378px x 52px, Button 104px x 52px lime #CBFC01
          */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Link to="/" className="inline-block mb-4">
              <Logo variant="dark" />
            </Link>

            <p className="text-sm text-[#4B4C53] max-w-md leading-relaxed mb-6 font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-[490px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-[52px] px-4 rounded-[12px] border border-[#CED0D3] bg-white text-[#242528] placeholder-[#82868E] text-base focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="h-[52px] px-6 bg-[#CBFC01] hover:bg-[#b8e400] active:scale-95 text-[#242528] text-base font-semibold rounded-[12px] transition-all cursor-pointer whitespace-nowrap shadow-sm"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-600 mt-2 font-medium">
                Thank you for subscribing to ByteSpace updates!
              </p>
            )}

            <p className="text-xs text-[#82868E] mt-3 max-w-md leading-normal">
              By subscribing, you agree to our{' '}
              <Link to="/#" className="underline hover:text-[#003BE2]">
                Privacy Policy
              </Link>{' '}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* 
            Right Section (7 cols): 3 Link columns
            Measured from PDF:
            Column 1 (x=740): Browse
            Column 2 (x=947): Categories
            Column 3 (x=1154): Platform
          */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Browse */}
            <div>
              <h4 className="text-base font-semibold text-[#242528] mb-4">Browse</h4>
              <ul className="space-y-3">
                {browseLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Categories (Aligned with Browse) */}
            <div>
              <h4 className="text-base font-semibold text-transparent select-none mb-4 hidden sm:block">
                Categories
              </h4>
              <ul className="space-y-3">
                {categoryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div>
              <h4 className="text-base font-semibold text-[#242528] mb-4">Platform</h4>
              <ul className="space-y-3">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 
          Bottom Copyright & Legal Links Bar
          Measured from PDF:
          - Divider line: 1200px wide, y=6286
          - Left: © 2023 ByteSpace. All rights reserved. (12px)
          - Right: Privacy Policy, Terms of Service, Cookies Settings (12px, x=1025 to 1320)
        */}
        <div className="mt-16 pt-8 border-t border-[#E5E6E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link to="/#" className="hover:text-[#242528] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/#" className="hover:text-[#242528] transition-colors">
              Terms of Service
            </Link>
            <Link to="/#" className="hover:text-[#242528] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
