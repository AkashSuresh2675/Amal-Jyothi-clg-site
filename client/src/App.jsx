import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-primary-600 mb-4">
                  Welcome to AJCE
                </h1>
                <p className="text-gray-600 text-lg">
                  Amal Jyothi College of Engineering
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Frontend setup complete! Start building your components.
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
