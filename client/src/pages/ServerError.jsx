import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const ServerError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Server Error</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">We're having trouble on our end. Try again later or contact support.</p>
        <Link to="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServerError;
