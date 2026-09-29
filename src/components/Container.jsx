export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1132px] mx-auto px-4 sm:px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
