const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-16 pt-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="footer-col">
            <h3 className="text-xl font-playfair font-semibold mb-5 text-gold">Frolic Exports</h3>
            <p className="mb-5 text-gray-300 leading-relaxed">
              Creating elegant fashion that celebrates femininity and contemporary design. Our pieces are crafted with attention to detail and a commitment to sustainable practices.
            </p>
            <div className="social-links flex gap-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="text-xl font-playfair font-semibold mb-5 text-gold">Quick Links</h3>
            <ul className="footer-links space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold hover:pl-2 transition-all duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="text-xl font-playfair font-semibold mb-5 text-gold">Contact Info</h3>
            <ul className="footer-links space-y-3">
              <li className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt mr-3 text-gold"></i>
                123 Fashion District, New York
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fas fa-phone mr-3 text-gold"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fas fa-envelope mr-3 text-gold"></i>
                info@frolicexports.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="copyright text-center pt-8 border-t border-white border-opacity-10">
          <p className="text-gray-400 text-sm">&copy; 2023 Frolic Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;