const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Loader size="xl" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
