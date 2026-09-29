import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full bg-[#003BE2] bg-hero-grid text-white min-h-[calc(100vh-240px)] flex flex-col items-center justify-center relative overflow-hidden py-20 px-6 text-center">
      <div className="relative z-10 flex flex-col items-center">
        {/* 480px Gradient Number */}
        <div className="text-404-gradient select-none leading-none -mb-20 sm:-mb-28 lg:-mb-32">
          404
        </div>

        {/* Overlapping Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-xl relative z-20">
          The page you are looking for doesn't exist
        </h1>

        <p className="mt-4 text-white/80 text-sm sm:text-base max-w-md relative z-20">
          We couldn't find the page you were looking for. It may have been moved or removed.
        </p>

        {/* Back to Home CTA */}
        <div className="mt-8 relative z-20">
          <Link
            to="/"
            className="bg-[#CBFC01] hover:bg-[#b8e400] text-[#242528] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-[12px] inline-block transition-transform active:scale-95 shadow-md"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
