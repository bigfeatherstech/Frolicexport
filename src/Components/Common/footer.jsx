import { useEffect, useState } from 'react';
import LOGO from "../../assets/logo.png"



const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update year automatically
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top Wave Curve */}
      <div className="absolute top-0 left-0 w-full transform translate-y-1 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-[#1a1a1a]"
        >
          
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#3C3C3C]"></div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-[#E8B4B8]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#E8D9A0]/5"></div>

      {/* Animated Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#E8B4B8]/8 to-[#E8D9A0]/12 animate-pulse"></div>

      {/* Enhanced Decorative Elements with Curves */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full opacity-10 -translate-x-20 -translate-y-20 blur-xl"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-gradient-to-bl from-[#E8B4B8] to-[#D4AF37] rounded-full opacity-10 translate-x-24 translate-y-24 blur-xl"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-tr from-[#E8D9A0] to-[#D4AF37] rounded-full opacity-8 blur-lg"></div>

      {/* Floating Curved Elements */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-[#D4AF37]/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-[#E8B4B8]/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-20 h-20 border-2 border-[#E8D9A0]/20 rounded-full animate-float animation-delay-2000"></div>

      {/* Curved Gradient Bars */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] via-[#E8B4B8] to-[#E8D9A0]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8D9A0] via-[#E8B4B8] to-[#D4AF37] opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 py-8">
        <div className="container mx-auto px-5">
          {/* Logo and Main Section with Curved Background */}
          <div className="relative mb-16" data-aos="fade-up">
            {/* Curved Background for Logo Section */}
            {/* <div className="absolute inset-0 -top-8 -mx-5 bg-gradient-to-r from-[#D4AF37]/5 to-[#E8B4B8]/5 rounded-3xl transform -skew-y-1"></div> */}

            <div className="relative text-center py-4">
              <div className="flex justify-center mb-6">
                <div className="relative group cursor-pointer ">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                    src={LOGO}
                    alt="Frolic Exports"
                    className="relative h-16 md:h-20 w-auto filter brightness-0 invert opacity-90 hover:scale-110 transition-transform duration-300 z-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text logo */}
                  <div className="hidden relative font-playfair text-3xl md:text-4xl font-bold text-white z-10">
                    Frolic <span className="text-gold">Exports</span>
                  </div>
                </div>
              </div>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed relative z-10" data-aos="fade-up" data-aos-delay="200">
                Creating elegant fashion that celebrates femininity and contemporary design.
              </p>
            </div>
          </div>

          {/* Footer Grid with Curved Dividers */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mb-5 relative">
            {/* Curved Divider Lines */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-[#E8B4B8]/20 to-transparent"></div>
            <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-[#E8D9A0]/20 to-transparent"></div>

            {/* Company Info */}
            <div className="footer-col lg:col-span-2" data-aos="fade-right">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gold bg-gradient-to-r from-[#D4AF37] via-[#E8B4B8] to-[#E8D9A0] bg-clip-text text-transparent">
                Frolic Exports
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                Established in 1994, Frolic Exports has been at the forefront of fashion manufacturing,
                blending traditional craftsmanship with modern innovation to create timeless pieces that empower women worldwide.
              </p>
            <div className="social-links flex gap-4">
                {[
                  // { icon: 'fab fa-facebook-f', label: 'Facebook', color: 'from-[#D4AF37] to-[#E8B4B8]' },
                  { icon: 'fab fa-instagram', label: 'Instagram', color: 'from-[#E8B4B8] to-[#D4AF37]',url:'https://www.instagram.com/' },
                  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', color: 'from-[#E8B4B8] to-[#E8D9A0]',url:'https://in.linkedin.com/' },
                  {
                    icon: 'fas fa-store',
                    label: 'Google Business',
                    color: 'from-[#E8B4B8] to-[#E8D9A0]',url:'https://www.google.com/maps/place/Frolic+Exports+Private+Limited/@28.5348926,77.4128891,17z/data=!4m15!1m8!3m7!1s0x390ce4594ea1c535:0x7b3b15f4ec20491a!2sFrolic+Exports+Private+Limited!8m2!3d28.5348926!4d77.4128891!10e1!16s%2Fg%2F1ptz2pv9m!3m5!1s0x390ce4594ea1c535:0x7b3b15f4ec20491a!8m2!3d28.5348926!4d77.4128891!16s%2Fg%2F1ptz2pv9m?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
                  }
                  // { icon: 'fab fa-pinterest-p', label: 'Pinterest', color: 'from-[#D4AF37] to-[#E8D9A0]' },
                  // { icon: 'fab fa-twitter', label: 'Twitter', color: 'from-[#E8D9A0] to-[#D4AF37]' },
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className={`group relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-black transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <i className={social.icon}></i>
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#D4AF37]/20">
                      {social.label}
                    </span>
                    {/* Hover Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  </a>
                ))}
              </div>

            </div>

            {/* Quick Links */}
            <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gold bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="footer-links">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Products', path: '/products' },
                  { name: ' Our Team', path: '/ourteam' },
                  { name: 'Trade Events', path: '/tradeEvents' },
                  { name: 'Infrastructure', path: '/infrastructure' },
                  { name: 'Career', path: '/career' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="group flex items-center text-gray-300 hover:text-gold transition-all duration-300 py-1"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] rounded-full opacity-0 group-hover:opacity-100 mr-3 transition-all duration-300 transform group-hover:scale-125"></span>
                      <span className="hover:pl-2 transition-all duration-300 relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gold bg-gradient-to-r from-[#E8B4B8] to-[#D4AF37] bg-clip-text text-transparent">
                Contact Info
              </h3>
              <ul className="footer-links space-y-4">
                <li className="flex items-start group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-map-marker-alt mr-4 text-gold mt-1 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="text-gray-300 group-hover:text-gold transition-colors duration-300">
                    {/* 123 Fashion District<br />
                    New York, NY 10001<br />
                    United States */}

                    C-129, Hosiery Complex<br />
                    Phase-2, Noida-201305
                  </span>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-phone mr-4 text-gold group-hover:scale-110 transition-transform duration-300"></i>
                  <a href="tel:+91-9818620740" className="text-gray-300 hover:text-gold transition-colors duration-300">
                    +91-9818620740
                  </a>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-envelope mr-4 text-gold group-hover:scale-110 transition-transform duration-300"></i>
                  <a href="mailto:supriyas@frolicexport.com" className="text-gray-300 hover:text-gold transition-colors duration-300">
                    supriyas@frolicexport.com
                  </a>
                </li>
                <li className="flex items-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-clock mr-4 text-gold group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="text-gray-300 group-hover:text-gold transition-colors duration-300">
                    Mon - Fri: 9AM - 6PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info Section with Curved Background */}
          <div className="relative mb-12">
            <div className="absolute inset-0 -mx-5 bg-gradient-to-r from-[#D4AF37]/10 to-[#E8B4B8]/10 rounded-2xl transform"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-">
              <div className="text-center" data-aos="fade-up">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-2xl flex items-center cursor-pointer justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-award"></i>
                </div>
                <h4 className="text-gold font-semibold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] bg-clip-text text-transparent">Quality Certified</h4>
                <p className="text-gray-400 text-sm">SEDEX & Intertek Approved</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 mx-auto cursor-pointer mb-4 bg-gradient-to-br from-[#E8B4B8] to-[#D4AF37] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4 className="text-gold font-semibold mb-2 bg-gradient-to-r from-[#E8B4B8] to-[#D4AF37] bg-clip-text text-transparent">Eco Friendly</h4>
                <p className="text-gray-400 text-sm">Sustainable Practices</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 mx-auto cursor-pointer mb-4 bg-gradient-to-br from-[#D4AF37] to-[#E8D9A0] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-globe"></i>
                </div>
                <h4 className="text-gold font-semibold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#E8D9A0] bg-clip-text text-transparent">Worldwide</h4>
                <p className="text-gray-400 text-sm">Global Shipping</p>
              </div>
            </div>
          </div>

          {/* Copyright Section with Curved Top */}
          <div className="copyright relative pt-5 border-t border-white border-opacity-10">
            {/* Curved Top Border */}
            <div className="absolute top-0 left-0 w-full transform -translate-y-1">
              <svg viewBox="0 0 1200 20" className="w-full h-4 text-[#D4AF37]/10">
                {/* <path d="M0,0 Q600,20 1200,0 L1200,20 L0,20 Z" className="fill-current"></path> */}
              </svg>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Frolic Exports. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="/privacy" className="hover:text-gold transition-colors duration-300 hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:text-gold transition-colors duration-300 hover:underline">Terms of Service</a>
                <a href="/sitemap" className="hover:text-gold transition-colors duration-300 hover:underline">Sitemap</a>
              </div>
            </div>

            {/* Enhanced Back to Top Button */}
            {/* <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 w-14 h-14 bg-gradient-to-br from-[#D4AF37] via-[#E8B4B8] to-[#E8D9A0] rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 mx-auto group relative overflow-hidden"
              aria-label="Back to top"
            >
              <i className="fas fa-chevron-up group-hover:-translate-y-1 transition-transform duration-300"></i>
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8D9A0] via-[#E8B4B8] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve */}
      <div className="absolute bottom-0 left-0 w-full transform -translate-y-1 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-[#1a1a1a] rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;