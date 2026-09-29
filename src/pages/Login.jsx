import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-['Poppins']">
      {/* Top Bar with Logo back to Home */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-8 flex items-center justify-between">
        <Link to="/" className="inline-block" title="Back to ByteSpace Home">
          <Logo variant="dark" />
        </Link>
        <Link
          to="/register"
          className="text-sm font-medium text-[#4B4C53] hover:text-[#003BE2] transition-colors"
        >
          Don't have an account? <span className="font-semibold text-[#003BE2] underline">Sign Up</span>
        </Link>
      </div>

      {/* Main Split Content Shell */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-[520px] bg-white p-8 sm:p-12 rounded-[24px] border border-[#E5E6E8] shadow-card">
          <span className="text-xs bg-[#CBFC01] text-[#242528] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Welcome Back
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold text-[#242528] mt-3">
            Sign in with ease
          </h1>

          <p className="text-sm text-[#4B4C53] mt-3 leading-relaxed">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-[#242528] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-[#242528] uppercase tracking-wider">
                  Password
                </label>
                <a href="#forgot" className="text-xs text-[#003BE2] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-[52px] px-4 rounded-[12px] border border-[#CED0D3] text-sm focus:outline-none focus:ring-2 focus:ring-[#003BE2]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[52px] bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-base rounded-[12px] transition-all cursor-pointer shadow-sm mt-2"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#E5E6E8] text-center">
            <Link to="/" className="text-xs text-[#82868E] hover:text-[#242528]">
              &larr; Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
