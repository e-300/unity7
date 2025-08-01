import Logo from './Logo'; // Adjust the import path based on your file structure

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-0.9">
            {/* Use the Logo component instead of the div with gradient */}
            <Logo 
              width={100} 
              height={100} 
              className="hover:opacity-80 transition-opacity duration-200" 
            />
            <span className="text-4xl font-bold text-white">Unity7</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-white hover:text-green-400 transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Process
          </a>
          <a 
            href="#industries" 
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Industries
          </a>
          <a 
            href="#support" 
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Support
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
          Book Consultation
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}