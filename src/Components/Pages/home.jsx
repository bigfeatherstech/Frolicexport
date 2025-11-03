import { useEffect, useState } from 'react';
import { featuredCollections, testimonials, partners } from '../DATA/data';
import ProductDetailModal from '../PoductDetailModal/ProductDetailModal';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import AOS styles
import 'aos/dist/aos.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import AOS
import AOS from 'aos';
import image1 from "../../assets/image1.JPG"
import image2 from "../../assets/image2.JPG"
import image3 from "../../assets/image3.JPG"
import image9 from "../../assets/image9.jpg"
import banner2 from "../../assets/banner2.png"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Refresh AOS after load
    setTimeout(() => {
      AOS.refresh();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Duplicate testimonials and partners for loop mode
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const duplicatedPartners = [...partners, ...partners];

  
  // In your Home component, update the handleQuickView function
const handleQuickView = (product) => {
  // Navigate to specific category page based on product category
  if (product.category) {
    navigate(`/${product.category}`);
  } else {
    // Fallback to general product page
    navigate('/product');
  }
};

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  if (loading) {
    return (
      <div id="loading-screen" className="fixed inset-0 bg-ivory flex items-center justify-center z-50 transition-opacity duration-500">
        <div className="loader w-20 h-20 border-4 border-pink-light border-t-pink rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
  
    <div className="min-h-screen">
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        activeImageIndex={activeImageIndex}
        onImageChange={handleImageChange}
      />

   {/* Hero Section */}
<section className="hero mt-20 h-[70vh] relative overflow-hidden flex items-center bg-gradient-to-br from-beige to-ivory">
  {/* 
    Hero Swiper Container 
    Contains the image slider with responsive image handling
  */}
  <div className="hero-swiper w-full h-full absolute inset-0 z-0">
  

    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
      }}
      pagination={{ 
        clickable: true, 
        el: '.hero-pagination',
        bulletClass: 'hero-bullet',
        bulletActiveClass: 'hero-bullet-active'
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="h-full w-full"
    >
      {/* 
        SLIDE 1: Desktop and Mobile Optimized Images
        Uses different images for desktop and mobile to ensure perfect fit
      */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {/* 
            Desktop Image (Large, detailed, landscape oriented)
            Hidden on mobile devices
          */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${banner2})`
            }}
          />
          
          {/* 
            Mobile Optimized Image (Portrait oriented, faster loading)
            Only shown on mobile devices - better aspect ratio for phones
          */}
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(src/assets/productsimages/cordset1.jpg)`
            }}
          />
        </div>
      </SwiperSlide>

      {/* 
        SLIDE 2: Second slide with responsive image handling
      */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {/* Desktop version of banner1 */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${banner1})`
            }}
          />
          
          {/* Mobile optimized version of banner1 */}
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(src/assets/productsimages/maxidress1.jpg)`
            }}
          />
        </div>
      </SwiperSlide>

      {/* 
        SLIDE 3: Third slide with responsive image handling
      */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {/* Desktop version of image1 */}
          <div
            className="hidden md:block w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${image1})`
            }}
          />
          
          {/* Mobile optimized version of image1 */}
          <div
            className="md:hidden w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(src/assets/productsimages/yellowmaxi1.jpg)`
            }}
          />
        </div>
      </SwiperSlide>
    </Swiper>

    {/* 
      NAVIGATION BUTTONS 
      Hidden on mobile for better touch experience and more screen space
    */}
    <button 
      className="hero-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
      aria-label="Previous slide"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      className="hero-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
      aria-label="Next slide"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* 
      OVERLAY 
      Adds consistent dark overlay for better text readability across all images
    */}
    <div className="absolute inset-0 bg-black/25 z-5 pointer-events-none" />
    
    {/* 
      CUSTOM PAGINATION DOTS 
      Positioned at bottom with custom styling
    */}
    <div className="hero-pagination swiper-pagination !bottom-4 flex justify-center gap-2" />
  </div>

  {/* 
    HERO CONTENT SECTION
    Contains the main headline, description, and call-to-action buttons
    Positioned with z-10 to appear above the background images
  */}
  <div className="container mx-auto px-5 relative z-10">
    <div className="hero-content max-w-2xl" data-aos="fade-up" data-aos-delay="200">
      
      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-5 text-white leading-tight drop-shadow-lg">
        Elegance in Every Thread
      </h1>

      {/* Supporting Description */}
      <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow max-w-lg">
        Discover the Craft of Frolic Exports. Where tradition meets contemporary design in fashion that inspires confidence and grace.
      </p>

      {/* 
        CALL-TO-ACTION BUTTONS
        Responsive layout: stacked on mobile, horizontal on larger screens
      */}
      <div className="hero-btns flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Primary CTA Button */}
        <a
          href="/products"
          className="btn bg-gradient-to-br from-gold to-gold-light text-white py-3 px-6 sm:py-3 sm:px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 text-sm sm:text-base text-center"
        >
          Explore Collections
        </a>
        
        {/* Secondary CTA Button */}
        <a
          href="#contact"
          className="btn btn-outline bg-transparent border-2 border-gold text-gold py-3 px-6 sm:py-3 sm:px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 hover:bg-gold hover:text-white text-sm sm:text-base text-center"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>

  {/* 
    CUSTOM STYLES
    Enhanced pagination dots and mobile optimizations
  */}
  <style jsx="true">{`
    /* Custom pagination dots styling */
    .hero-bullet {
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      margin: 0 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .hero-bullet-active {
      background: linear-gradient(135deg, #D4AF37, #FFD700);
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }
    
    /* Enhanced mobile responsiveness */
    @media (max-width: 768px) {
      .hero {
        height: 60vh; /* Slightly shorter on mobile for better proportions */
      }
      
      .hero-content {
        text-align: center; /* Center align on mobile */
        padding: 0 1rem; /* Add side padding */
      }
      
      .hero-content h1 {
        font-size: 2.5rem; /* Larger text on mobile for better readability */
        line-height: 1.2;
      }
      
      .hero-content p {
        font-size: 1.1rem; /* Slightly larger text on mobile */
        margin-bottom: 2rem;
      }
      
      .hero-btns .btn {
        padding: 14px 28px; /* Larger touch targets on mobile */
        font-size: 16px;
        width: 100%; /* Full width buttons on mobile */
        max-width: 280px; /* But not too wide */
        margin: 0 auto; /* Center buttons */
      }
      
      .hero-btns {
        gap: 12px; /* More space between stacked buttons */
      }
    }
    
    /* Extra small mobile devices */
    @media (max-width: 480px) {
      .hero {
        height: 70vh; /* Taller on very small screens */
      }
      
      .hero-content h1 {
        font-size: 2rem;
      }
      
      .hero-content p {
        font-size: 1rem;
      }
    }
    
    /* Tablet optimizations */
    @media (min-width: 769px) and (max-width: 1024px) {
      .hero-content h1 {
        font-size: 3.5rem;
      }
    }
  `}</style>
</section>


      {/* About Preview Section */}
      <section className="about-preview py-20 bg-gradient-to-br from-ivory to-beige relative overflow-hidden" id="about">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-pink-light to-transparent opacity-70 z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-transparent to-gold-light opacity-70 z-0"></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="about-content flex flex-col lg:flex-row items-center gap-12">
            <div className="about-text flex-1" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-5 text-dark">Our Story</h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                At Frolic Exports, we blend tradition with modern design, crafting fashion that inspires confidence and grace. Our journey began with a simple vision: to create clothing that celebrates femininity while embracing contemporary aesthetics.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Each piece in our collection is thoughtfully designed and meticulously crafted, reflecting our commitment to quality, sustainability, and timeless elegance.
              </p>
              <a href="/about" className="btn bg-gradient-to-br from-gold to-gold-light text-white py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40 inline-block">
                Learn More
              </a>
            </div>
            <div className="about-image flex-1 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-left" data-aos-delay="200">
              <img
              src={image9} 
                alt="Frolic Exports Craftsmanship"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

    {/* Fashion Vision Section */}
    <section className="fashion-vision py-20 bg-gradient-to-br from-ivory to-beige relative overflow-hidden">
      <div className="absolute -top-24 w-72 h-72 rounded-full bg-gradient-to-br from-pink-light to-transparent opacity-70 z-0" style={{left:"-50px"}}></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="section-header text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-dark">
            How can I transform my fashion vision into wearable art?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our step-by-step process ensures your vision becomes a reality with precision and creativity
          </p>
        </div>
        
        <div className="steps-container">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-auto mb-12">
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="step-card bg-white cursor-pointer rounded-2xl p-10 text-center shadow-lg transition-all duration-300 w-full max-w-sm hover:-translate-y-2 hover:shadow-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-pink"></div>
                <div className="step-icon w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-light to-gold-light rounded-full flex items-center justify-center relative transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div className="step-number absolute -top-2 -right-2 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-gold/40">
                    {step}
                  </div>
                </div>
                <div className="step-content">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-dark">
                    {[
                      "Concept & Design",
                      "Material Selection",
                      "Pattern Making"
                    ][index]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {[
                      "We begin by understanding your vision, inspiration, and requirements. Our designers create initial sketches and mood boards to bring your ideas to life.",
                      "We help you choose the perfect fabrics and materials that align with your design vision, ensuring quality, sustainability, and the right texture and drape.",
                      "Our skilled pattern makers translate designs into precise patterns, ensuring perfect fit and silhouette while maintaining the integrity of your original vision."
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - 2 Cards Centered with Equal Size */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mx-auto max-w-4xl">
            {[4, 5].map((step, index) => (
              <div key={step} className="step-card bg-white cursor-pointer rounded-2xl p-10 text-center shadow-lg transition-all duration-300 w-full lg:w-1/2 max-w-sm lg:max-w-none hover:-translate-y-2 hover:shadow-xl relative overflow-hidden flex flex-col" data-aos="fade-up" data-aos-delay={(index + 3) * 100}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-pink"></div>
                <div className="step-icon w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-light to-gold-light rounded-full flex items-center justify-center relative transition-all duration-300 hover:scale-110 hover:rotate-6 flex-shrink-0">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div className="step-number absolute -top-2 -right-2 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-gold/40">
                    {step}
                  </div>
                </div>
                <div className="step-content flex-1 flex flex-col">
                  <h3 className="text-xl font-playfair font-semibold mb-4 text-dark">
                    {[
                      "Prototyping & Fitting",
                      "Production & Quality Control"
                    ][index]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {[
                      "We create initial prototypes and conduct fitting sessions to refine the design, making adjustments to ensure the final product exceeds expectations.",
                      "Our artisans bring your design to life with meticulous attention to detail. Each piece undergoes rigorous quality checks before delivery."
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Products Section */}
      <section className="products py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="section-header text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-dark">Featured Collections</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover our carefully curated selection of premium fashion pieces designed for the modern woman.
            </p>
          </div>
          
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.slice(0,3).map((product, index) => (
              <div 
                key={product.id} 
                className="product-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group"
                data-aos="fade-up" 
                data-aos-delay={(index % 4) * 100}
              >
                <div className="product-img h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Quick View Button - Appears on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="bg-white text-gray-900 py-3 px-6 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100 shadow-lg"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-info p-5 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-dark">{product.title}</h3>
                  <p className="text-gold font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-20 bg-gradient-to-br from-ivory to-beige relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-transparent to-gold-light opacity-70 z-0"></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="section-header text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-dark">What Services We Offer</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Comprehensive fashion solutions from concept to creation</p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom Design",
              "Manufacturing",
              "Quality Assurance",
              "Sourcing",
              "Consulting",
              "Logistics"
            ].map((service, index) => (
              <div key={index} className="service-card cursor-pointer bg-white rounded-2xl p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay={(index % 6) * 100}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-pink"></div>
                <div className="service-icon w-20 h-20 mx-auto mb-5 bg-pink-light cursor-pointer rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-dark">{service}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {[
                    "Transform your unique vision into wearable art with our bespoke design service. We work closely with you to create one-of-a-kind pieces.",
                    "From small batches to large-scale production, our state-of-the-art facilities ensure quality and precision in every garment we create.",
                    "Rigorous quality control processes ensure that every piece meets our high standards for craftsmanship, materials, and finish.",
                    "We source the finest materials from around the world, ensuring sustainable and ethical practices throughout our supply chain.",
                    "Expert fashion consulting services to help brands and designers navigate the complexities of production, trends, and market positioning.",
                    "Seamless global logistics and distribution services to ensure your products reach their destination efficiently and on time."
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Testimonials Section */}
<section className="testimonials py-20 bg-gradient-to-br from-pink-light to-gold-light relative overflow-hidden">
  <div className="absolute inset-0 bg-white bg-opacity-10" style={{
    backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" preserveAspectRatio=\"none\"><path d=\"M0,0 V100 Q500,50 1000,100 V0 Z\" fill=\"white\" opacity=\"0.1\"/></svg>")',
    backgroundSize: 'cover'
  }}></div>
  
  <div className="container mx-auto px-5 relative z-10">
    <div className="section-header text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-dark">What Our Clients Say</h2>
      <p className="max-w-2xl mx-auto text-gray-600">Hear from designers and brands who have transformed their vision with us</p>
    </div>
    
    <div className="testimonials-slider-container w-full h-full py-8 pb-16 relative z-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={duplicatedTestimonials.length > 3} // Only enable loop if enough slides
        pagination={{ 
          clickable: true,
          el: '.testimonials-pagination'
        }}
        navigation={{
          nextEl: '.testimonials-navigation .swiper-button-next',
          prevEl: '.testimonials-navigation .swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="testimonials-swiper"
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <SwiperSlide key={`${testimonial.id}-${index}`}>
            <div className="testimonial-card bg-ivory rounded-2xl shadow-lg p-8 max-w-sm mx-auto transition-all cursor-pointer duration-300 hover:- hover:shadow-xl relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-pink"></div> */}
              <div className="quote-icon text-4xl text-gold-light mb-4"></div>
              <p className="testimonial-text text-dark leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>
              <div className="client-info flex items-center">
                <div className="client-avatar w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gold-light">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="client-details">
                  <h4 className="text-lg font-semibold text-dark mb-1">{testimonial.name}</h4>
                  <p className="text-gold font-medium text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Pagination Dots */}
      <div className="testimonials-pagination swiper-pagination !bottom-0 mt-8"></div>
      
      {/* Navigation Buttons */}
      <div className="testimonials-navigation flex items-center justify-center gap-4 mt-8">
        <div className="swiper-button-prev !static !relative !transform-none !mt-0 !w-12 !h-12 !bg-gradient-to-br from-gold to-gold-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 after:!text-white after:!text-lg after:!font-bold flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next !static !relative !transform-none !mt-0 !w-12 !h-12 !bg-gradient-to-br from-gold to-gold-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 after:!text-white after:!text-lg after:!font-bold flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  {/* Custom CSS for Swiper Navigation */}
  {/* <style jsx>{`
    .testimonials-navigation .swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: scale(1) !important;
    }
    
    .testimonials-pagination .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: rgba(212, 175, 55, 0.3);
      opacity: 1;
      margin: 0 6px;
    }
    
    .testimonials-pagination .swiper-pagination-bullet-active {
      background: linear-gradient(135deg, #D4AF37, #FFD700);
      transform: scale(1.2);
    }
  `}</style> */}
</section>

      {/* Partners Section */}
      <section className="partners py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="section-header text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-dark">Our Trusted Partners</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Collaborating with leading brands and designers worldwide</p>
          </div>
          
          <div className="partners-slider mt-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={duplicatedPartners.length > 5} // Only enable loop if enough slides
              autoplay={{ 
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 40 },
              }}
              className="partnersSwiper"
            >
              {duplicatedPartners.map((partner, index) => (
                <SwiperSlide key={`${partner.id}-${index}`}>
                  <div className="partner-logo flex items-center justify-center h-24 px-8">
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="max-w-full max-h-16 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-20 bg-gradient-to-br from-pink-light to-gold-light text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" preserveAspectRatio=\"none\"><path d=\"M0,0 V100 Q500,50 1000,100 V0 Z\" fill=\"white\" opacity=\"0.1\"/></svg>")',
          backgroundSize: 'cover'
        }}></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-5 text-dark">Ready to Elevate Your Style?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Explore our complete collection of premium fashion pieces or get in touch with our style consultants for personalized recommendations.
            </p>
            <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="btn bg-gradient-to-br from-gold to-gold-light text-white py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40">
                Explore Collections
              </a>
              <a href="#contact" className="btn btn-outline bg-transparent border-2 border-gold text-gold py-3 px-8 rounded-full font-medium no-underline cursor-pointer transition-all duration-300 hover:bg-gold hover:text-white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;

