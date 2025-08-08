import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [showSolutions, setShowSolutions] = useState(false);
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex space-x-6 items-center">
        <Link to="/" className="font-bold text-xl text-blue-600">MyApp</Link>
        <Link to="/about" className="hover:text-blue-600">About us</Link>

        <div className="relative">
          <button
            onClick={() => setShowSolutions(!showSolutions)}
            className="hover:text-blue-600"
          >
            Solutions
          </button>
          {showSolutions && (
            <div className="absolute top-8 left-0 bg-white border rounded shadow-md py-2 w-40">
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
            </div>
          )}
        </div>

        <Link to="/resources" className="hover:text-blue-600">Resources</Link>
        <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
        <Link to="/contacts" className="hover:text-blue-600">Contacts</Link>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Try for free
      </button>
    </nav>
  );
}

export default Navbar;