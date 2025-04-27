import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../../assets/images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img 
            src={logoImage} 
            alt="Portfolio Logo" 
            className="h-10 w-10 rounded-full mr-3 object-cover border-2 border-blue-400" 
          />
          <span className="text-2xl font-bold"><span className="text-blue-400">Port</span>folio</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
