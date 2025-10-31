import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    if (!mobileMenuActive) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setMobileMenuActive(false);
    setActiveDropdown(null);
  };

  // Hover handlers for desktop
  const handleDropdownMouseEnter = (dropdown) => {
    if (window.innerWidth > 768) {
      clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 768) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
    }
  };

  const handleDropdownMenuMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMenuMouseLeave = () => {
    if (window.innerWidth > 768) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown, mobile menu button, and nav
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        mobileMenuBtnRef.current &&
        !mobileMenuBtnRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuActive(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuActive]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-5 bg-white bg-opacity-95 backdrop-blur-lg z-50 transition-all duration-300 shadow-sm ${
          scrolled ? 'py-4 shadow-lg' : ''
        }`}
      >
        <div className="container-fluid mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 flex justify-between items-center">
          {/* Left: Logo - Moved more inside with increased padding */}
          <NavLink 
            to="/" 
            className="logo text-2xl font-bold text-gold font-playfair ml-4 lg:ml-8 xl:ml-12" 
            onClick={closeAll}
          >
            <img
              src="\src\assets\logo.png"
              className="w-40 h-auto"
              alt="Frolic Exports"
            />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn md:hidden text-2xl text-dark z-50 p-2 rounded-md hover:bg-gray-100 transition-colors mr-4"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Main Navigation */}
          <nav
            ref={navRef}
            className={`main-nav ${
              mobileMenuActive ? 'active' : ''
            } md:static fixed top-20 right-0 w-80 max-w-[85vw] h-[calc(100vh-80px)] bg-white md:bg-transparent md:w-auto md:h-auto transition-all duration-300 md:translate-x-0 shadow-2xl md:shadow-none border-l border-gray-100 md:border-none ${
              mobileMenuActive ? 'translate-x-0' : 'translate-x-full'
            } overflow-y-auto md:overflow-visible`}
          >
            <ul className="flex flex-col md:flex-row md:items-center p-6 md:p-0 md:space-x-6 lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  About
                </NavLink>
              </li>
              {/* Products Dropdown */}
              <li 
                ref={dropdownRef}
                className={`dropdown relative ${
                  activeDropdown === 'products' ? 'active' : ''
                }`}
                onMouseEnter={() => handleDropdownMouseEnter('products')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <NavLink
                  to="/product"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive || activeDropdown === 'products' 
                        ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' 
                        : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      toggleDropdown('products', e);
                    } else {
                      closeAll();
                    }
                  }}
                >
                  <span>Products</span>
                  <i 
                    className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${
                      activeDropdown === 'products' ? 'rotate-180' : ''
                    }`}
                  ></i>
                </NavLink>
                
                {/* Dropdown Menu */}
                <div
                  className={`dropdown-menu md:absolute md:top-full md:left-0 bg-white md:min-w-56 md:shadow-xl md:rounded-lg md:py-2 transition-all duration-300 border border-gray-200 ${
                    activeDropdown === 'products'
                      ? 'max-h-96 opacity-100 visible translate-y-0 md:translate-y-0'
                      : 'max-h-0 opacity-0 invisible md:translate-y-2 overflow-hidden'
                  } md:overflow-visible pl-4 md:pl-0 mt-1 md:mt-0 md:bg-white`}
                  onMouseEnter={handleDropdownMenuMouseEnter}
                  onMouseLeave={handleDropdownMenuMouseLeave}
                >
                  <NavLink
                    to="/cord-set"
                    className={({ isActive }) => 
                      `block py-3 px-4 md:px-5 transition-all duration-300 hover:pl-6 md:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg md:rounded-none mx-2 md:mx-0 ${
                        isActive 
                          ? 'bg-gold bg-opacity-10 text-gold font-medium' 
                          : 'text-dark hover:bg-gray-50 hover:text-gold'
                      }`
                    }
                    onClick={closeAll}
                  >
                    Cord Set
                  </NavLink>
                  <NavLink
                    to="/tops-blouses"
                    className={({ isActive }) => 
                      `block py-3 px-4 md:px-5 transition-all duration-300 hover:pl-6 md:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg md:rounded-none mx-2 md:mx-0 ${
                        isActive 
                          ? 'bg-gold bg-opacity-10 text-gold font-medium' 
                          : 'text-dark hover:bg-gray-50 hover:text-gold'
                      }`
                    }
                    onClick={closeAll}
                  >
                    Tops/Blouses
                  </NavLink>
                  <NavLink
                    to="/dresses"
                    className={({ isActive }) => 
                      `block py-3 px-4 md:px-5 transition-all duration-300 hover:pl-6 md:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg md:rounded-none mx-2 md:mx-0 ${
                        isActive 
                          ? 'bg-gold bg-opacity-10 text-gold font-medium' 
                          : 'text-dark hover:bg-gray-50 hover:text-gold'
                      }`
                    }
                    onClick={closeAll}
                  >
                    Dresses
                  </NavLink>
                </div>
              </li>
              <li>
                <NavLink
                  to="/ourteam"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Our Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/brand-showcases"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Infrastructure
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/design-foundation"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Trade Events
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Carrer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 md:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 md:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Section: Glamstra Button - Moved more inside with increased padding */}
          <div className="hidden md:flex items-center space-x-4 mr-4 lg:mr-8 xl:mr-12">
            {/* <button className="bg-[#d4af37] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#c5a028] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-opacity-50">
              Glamstra
            </button> */}
            <button className="btn bg-gradient-to-br from-gold to-gold-light text-white py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40">
              Glamstra
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {mobileMenuActive && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeAll}
        ></div>
      )}
    </>
  );
};

export default Header;