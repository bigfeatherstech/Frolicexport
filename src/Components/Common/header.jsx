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
    if (window.innerWidth > 1260) {
      clearTimeout(dropdownTimeoutRef.current);
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 1260) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
    }
  };

  const handleDropdownMenuMouseEnter = () => {
    if (window.innerWidth > 1260) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMenuMouseLeave = () => {
    if (window.innerWidth > 1260) {
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
      if (window.innerWidth > 1260) {
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
        className={`fixed top-0 left-0 w-full py-3 bg-white bg-opacity-95 backdrop-blur-lg z-[1000] transition-all duration-300 shadow-sm pt-[45px] ${
          scrolled ? 'py-3 shadow-lg' : ''
        }`}
      >
        <div className="container-fluid mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="logo text-2xl font-bold text-gold font-playfair flex-shrink-0" 
            onClick={closeAll}
          >
            <img
              src="\src\assets\logo.png"
              className="w-32 sm:w-36 md:w-40 h-auto"
              alt="Frolic Exports"
            />
          </NavLink>

          {/* Mobile Menu Button - Show on screens less than 1260px */}
          <button
            ref={mobileMenuBtnRef}
            className="mobile-menu-btn xl:hidden text-2xl text-dark z-50 p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Main Navigation - Show on desktop (xl+) and when mobile menu is active */}
          <nav
            ref={navRef}
            className={`main-nav ${
              mobileMenuActive ? 'active' : ''
            } xl:static fixed top-16 right-0 w-80 max-w-[90vw] h-[calc(100vh-64px)] bg-white xl:bg-transparent xl:w-auto xl:h-auto transition-all duration-300 xl:translate-x-0 shadow-2xl xl:shadow-none border-l border-gray-100 xl:border-none ${
              mobileMenuActive ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'
            } overflow-y-auto xl:overflow-visible ${
              mobileMenuActive ? 'block' : 'hidden xl:block'
            }`}
          >
            <ul className="flex flex-col xl:flex-row xl:items-center p-4 xl:p-0 space-y-1 xl:space-y-0 xl:space-x-6 2xl:space-x-8">
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Home
                </NavLink>
              </li>
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
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
                className={`dropdown relative w-full xl:w-auto ${
                  activeDropdown === 'products' ? 'active' : ''
                }`}
                onMouseEnter={() => handleDropdownMouseEnter('products')}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <NavLink
                  to="/product"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center justify-between xl:justify-start py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive || activeDropdown === 'products' 
                        ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' 
                        : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={(e) => {
                    if (window.innerWidth <= 1260) {
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
                  className={`dropdown-menu xl:absolute xl:top-full xl:left-0 bg-white xl:min-w-48 2xl:min-w-56 xl:shadow-xl xl:rounded-lg xl:py-2 transition-all duration-300 border border-gray-200 ${
                    activeDropdown === 'products'
                      ? 'max-h-96 opacity-100 visible translate-y-0 xl:translate-y-0'
                      : 'max-h-0 opacity-0 invisible xl:translate-y-2 overflow-hidden'
                  } xl:overflow-visible pl-6 xl:pl-0 mt-1 xl:mt-0 xl:bg-white w-full xl:w-auto`}
                  onMouseEnter={handleDropdownMenuMouseEnter}
                  onMouseLeave={handleDropdownMenuMouseLeave}
                >
                  <NavLink
                    to="/cord-set"
                    className={({ isActive }) => 
                      `block py-3 px-4 xl:px-4 2xl:px-5 transition-all duration-300 hover:pl-6 xl:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg xl:rounded-none mx-2 xl:mx-0 text-sm 2xl:text-base ${
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
                      `block py-3 px-4 xl:px-4 2xl:px-5 transition-all duration-300 hover:pl-6 xl:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg xl:rounded-none mx-2 xl:mx-0 text-sm 2xl:text-base ${
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
                      `block py-3 px-4 xl:px-4 2xl:px-5 transition-all duration-300 hover:pl-6 xl:hover:pl-5 border-b border-gray-100 last:border-b-0 rounded-lg xl:rounded-none mx-2 xl:mx-0 text-sm 2xl:text-base ${
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
              
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/ourteam"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Our Team
                </NavLink>
              </li>

              <li className="w-full xl:w-auto">
                <NavLink
                  to="/brand-showcases"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Infrastructure
                </NavLink>
              </li>
              
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/design-foundation"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Trade Events
                </NavLink>
              </li>
              
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/career"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Career
                </NavLink>
              </li>
              
              <li className="w-full xl:w-auto">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    `font-medium transition-colors duration-300 flex items-center py-3 xl:py-2 px-4 xl:px-0 rounded-lg xl:rounded-none text-base xl:text-sm 2xl:text-base ${
                      isActive ? 'text-gold bg-gold bg-opacity-10 xl:bg-transparent' : 'text-dark hover:text-gold hover:bg-gray-50 xl:hover:bg-transparent'
                    }`
                  }
                  onClick={closeAll}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Section: Glamstra Button - Hide on screens less than 1260px */}
          <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
            <button className="btn bg-gradient-to-br from-gold to-gold-light text-white py-2 px-4 2xl:py-3 2xl:px-6 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 text-sm 2xl:text-base">
              Glamstra
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {mobileMenuActive && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={closeAll}
        ></div>
      )}
    </>
  );
};

export default Header;