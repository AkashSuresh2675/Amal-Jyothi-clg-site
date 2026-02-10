import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">AJCE</div>
                <div className="text-xs text-gray-400">Since 2001</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Amal Jyothi College of Engineering is committed to excellence in education, research, and innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="hover:text-primary-500 transition-colors">Departments</Link></li>
              <li><Link to="/faculty" className="hover:text-primary-500 transition-colors">Faculty</Link></li>
              <li><Link to="/admissions" className="hover:text-primary-500 transition-colors">Admissions</Link></li>
              <li><Link to="/research" className="hover:text-primary-500 transition-colors">Research</Link></li>
              <li><Link to="/placements" className="hover:text-primary-500 transition-colors">Placements</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/departments" className="hover:text-primary-500 transition-colors">Computer Science</Link></li>
              <li><Link to="/departments" className="hover:text-primary-500 transition-colors">Electronics & Communication</Link></li>
              <li><Link to="/departments" className="hover:text-primary-500 transition-colors">Mechanical Engineering</Link></li>
              <li><Link to="/departments" className="hover:text-primary-500 transition-colors">Civil Engineering</Link></li>
              <li><Link to="/campus-life" className="hover:text-primary-500 transition-colors">Campus Life</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Amal Jyothi College of Engineering<br />Koovappally, Kottayam<br />Kerala - 686518</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>+91 4828 20 3000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>info@ajce.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © {currentYear} Amal Jyothi College of Engineering. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-primary-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
