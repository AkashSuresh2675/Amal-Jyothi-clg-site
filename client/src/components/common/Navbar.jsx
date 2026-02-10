import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'About AJCE', path: '/about' },
        { name: 'Vision & Mission', path: '/about#vision' },
        { name: 'Campus Life', path: '/campus-life' },
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics',
      submenu: [
        { name: 'Departments', path: '/departments' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Programs', path: '/academics' },
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Research', path: '/research' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-900">AJCE</div>
              <div className="text-xs text-gray-600">Amal Jyothi College</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
