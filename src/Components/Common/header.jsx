import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    if (!mobileMenuActive) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setMobileMenuActive(false);
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && !event.target.closest('.mobile-menu-btn')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full py-5 bg-white bg-opacity-95 backdrop-blur-lg z-50 transition-all duration-300 shadow-sm ${
      scrolled ? 'py-4 shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        <a href="/" className="logo text-2xl font-bold text-gold font-playfair">
          <img 
            src="https://frolicexport.com/assets/img/logo.png" 
            className="w-20 h-auto" 
            alt="Frolic Exports" 
          />
        </a>
        
        <button 
          className="mobile-menu-btn md:hidden text-2xl text-dark z-50"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${mobileMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <nav className={`${mobileMenuActive ? 'active' : ''} md:static fixed top-20 right-0 w-4/5 h-[calc(100vh-80px)] bg-white md:bg-transparent md:w-auto md:h-auto transition-all duration-300 md:translate-x-0 shadow-lg md:shadow-none ${
          mobileMenuActive ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col md:flex-row md:items-center p-8 md:p-0">
            <li className="mb-5 md:mb-0 md:ml-8">
              <a 
                href="/" 
                className="text-dark font-medium hover:text-gold transition-colors duration-300 relative flex items-center py-2"
                onClick={closeAll}
              >
                Home
              </a>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <a 
                href="/about" 
                className="text-dark font-medium hover:text-gold transition-colors duration-300 relative flex items-center py-2"
                onClick={closeAll}
              >
                About
              </a>
            </li>
            <li className={`dropdown mb-5 md:mb-0 md:ml-8 relative ${activeDropdown === 'products' ? 'active' : ''}`}>
              <a 
                href="/products" 
                className="text-dark font-medium hover:text-gold transition-colors duration-300 relative flex items-center py-2"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('products');
                  }
                }}
              >
                Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
              <ul className={`dropdown-menu md:absolute md:top-full md:left-0 bg-white md:min-w-48 md:shadow-xl md:rounded-lg md:py-3 md:opacity-0 md:invisible md:translate-y-2 transition-all duration-300 ${
                activeDropdown === 'products' ? 'max-h-96 md:max-h-none md:opacity-100 md:visible md:translate-y-0' : 'max-h-0 md:max-h-none md:opacity-0 md:invisible'
              } overflow-hidden pl-6 md:pl-0 bg-gray-50 md:bg-white mt-2 md:mt-0`}>
                <li className="w-full block">
                  <a 
                    href="/cord-set" 
                    className="block px-5 py-3 text-dark hover:bg-pink-light hover:text-gold transition-all duration-300 hover:pl-7 w-full text-left"
                    onClick={closeAll}
                  >
                    Cord Set
                  </a>
                </li>
                <li className="w-full block">
                  <a 
                    href="/tops-blouses" 
                    className="block px-5 py-3 text-dark hover:bg-pink-light hover:text-gold transition-all duration-300 hover:pl-7 w-full text-left"
                    onClick={closeAll}
                  >
                    Tops/Blouses
                  </a>
                </li>
                <li className="w-full block">
                  <a 
                    href="/dresses" 
                    className="block px-5 py-3 text-dark hover:bg-pink-light hover:text-gold transition-all duration-300 hover:pl-7 w-full text-left"
                    onClick={closeAll}
                  >
                    Dresses
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-5 md:mb-0 md:ml-8">
              <a 
                href="#contact" 
                className="text-dark font-medium hover:text-gold transition-colors duration-300 relative flex items-center py-2"
                onClick={closeAll}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;