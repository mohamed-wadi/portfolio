import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2"><span className="text-blue-400">LK</span>Technologie</h3>
            <p className="text-gray-400">Building innovative solutions for the web</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} LKTechnologie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
