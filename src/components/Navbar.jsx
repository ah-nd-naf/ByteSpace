import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../hooks/useAuth';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="w-full bg-hero-grid relative z-50">
      {/* 
        Container geometry measured from Figma / PDF:
        Outer container: 1200px wide on 1440px desktop frame (120px left & right padding)
        Header height: 120px (y=0 to y=120)
        Seamless 120px hero grid pattern starts from y=0
      */}
      <div className="max-w-[1440px] mx-auto h-[120px] px-6 sm:px-10 lg:px-[120px] flex items-center justify-between relative">
        {/* Left: ByteSpace Logo (starts at x = 120px) */}
        <Link to="/" className="flex items-center group transition-transform active:scale-95" aria-label="ByteSpace Home">
          <Logo variant="light" />
        </Link>

        {/* 
          Center: Header_Nav_Menu (Home, Courses, Creators)
          Exact Figma measurements:
          - Width: ~210px
          - Height: 26px
          - Position: Left 614.5px, Top 47px (centered vertically in 120px bar, centered horizontally at 720px in 1440px frame)
          - Gap between links: 24px
          - Font: Poppins 16px (text-body), clean white text (#FFFFFF), subtle opacity on hover
        */}
        <nav
          className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2 h-[26px] w-[210px]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-white hover:opacity-80 text-base font-poppins font-normal tracking-tight transition-opacity duration-150"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* 
          Right: CTA buttons + Cart Icon
          Exact Figma measurements:
          - "Sign In": 16px Poppins white, link to /login
          - "Join Us": 16px Poppins white, link to /register
          - Shopping Bag Icon: 16px x 20px, ends at x = 1316px..1320px
          When logged in: replace Sign In / Join Us with user name (or avatar) and Logout button
        */}
        <div className="flex items-center gap-6 sm:gap-7">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#CBFC01] text-[#242528] flex items-center justify-center font-poppins font-semibold text-sm select-none shadow-xs">
                  {initial}
                </div>
                <span className="text-white text-base font-poppins font-normal max-w-[130px] truncate" title={displayName}>
                  {displayName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => logout()}
                className="text-white hover:opacity-80 text-base font-poppins font-normal transition-opacity cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:opacity-80 text-base font-poppins font-normal transition-opacity"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="text-white hover:opacity-80 text-base font-poppins font-normal transition-opacity"
              >
                Join Us
              </Link>
            </>
          )}

          {/* Cart / Shopping Bag Icon extracted directly from PDF vector paths */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:opacity-80 transition-opacity p-1 flex items-center justify-center cursor-pointer"
          >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-5 stroke-current"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 5H15L14 19H2L1 5Z" />
              <path d="M5 5V3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3V5" />
            </svg>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:opacity-80 p-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003BE2] border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:opacity-80 text-base py-1.5 transition-opacity font-poppins font-normal"
            >
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#CBFC01] text-[#242528] flex items-center justify-center font-poppins font-semibold text-sm select-none">
                  {initial}
                </div>
                <span className="text-white text-sm font-poppins font-medium truncate max-w-[180px]">
                  {displayName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-white hover:opacity-80 text-sm font-poppins cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-white/10 flex items-center gap-4">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:opacity-80 text-sm font-poppins"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#CBFC01] text-[#242528] px-4 py-1.5 rounded-[12px] text-sm font-poppins font-semibold"
              >
                Join Us
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
