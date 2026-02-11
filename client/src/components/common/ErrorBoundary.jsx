import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // TODO: send to logging service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-2">Something went wrong</h1>
            <p className="text-lg text-gray-700 mb-6">An unexpected error occurred. You can try reloading the page or go back home.</p>
            <div className="flex items-center justify-center space-x-4">
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary-600 text-white rounded-md">Reload</button>
              <Link to="/">
                <button className="px-4 py-2 border rounded-md">Home</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
