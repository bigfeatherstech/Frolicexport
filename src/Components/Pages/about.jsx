import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    factoryArea: 0,
    employees: 0,
    production: 0
  });

  const [countersStarted, setCountersStarted] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    // Initialize AOS animation library
    const initializeAOS = async () => {
      if (typeof window !== 'undefined') {
        try {
          const AOS = (await import('aos')).default;
          AOS.init({
            duration: 1000,
            once: true,
            offset: 100
          });
        } catch (error) {
          console.log('AOS initialization error:', error);
        }
      }
    };

    initializeAOS();

    // Intersection Observer for counter section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.3, // Start when 30% of section is visible
        rootMargin: '0px 0px -100px 0px' // Adjust trigger point
      }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    // Counter animation function
    const animateCounters = () => {
      const finalValues = {
        factoryArea: 10000,
        employees: 100,
        production: 5000
      };

      // ===== COUNTER SPEED CONFIGURATION =====
      // Adjust these values to change the counter speed:
      const duration = 2000; // Total animation duration in milliseconds (2000ms = 2 seconds)
      const steps = 60; // Number of animation steps (higher = smoother but more resource intensive)
      const stepDuration = duration / steps; // Time between each step

      let currentStep = 0;

      const counterInterval = setInterval(() => {
        currentStep++;
        
        // Calculate progress with easing for smoother animation
        const progress = currentStep / steps;
        
        setCounters({
          factoryArea: Math.floor(finalValues.factoryArea * progress),
          employees: Math.floor(finalValues.employees * progress),
          production: Math.floor(finalValues.production * progress)
        });

        if (currentStep >= steps) {
          setCounters(finalValues);
          clearInterval(counterInterval);
        }
      }, stepDuration);
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, [countersStarted]);

  return (
    <div className="min-h-screen bg-[#F9F6F0] font-poppins text-[#3C3C3C] pt-16">
      
      {/* ===== PAGE HEADER SECTION ===== */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#E8D9A0] to-[#F5E1E2] opacity-15"></div>
        
        {/* Animated gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        {/* SVG pattern background */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'><path d='M0,0 V100 Q500,50 1000,100 V0 Z' fill='white' opacity='0.3'/></svg>")`,
               backgroundSize: 'cover'
             }}>
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#E8B4B8] rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#E8D9A0] rounded-full blur-lg opacity-30 animate-ping"></div>

        {/* Main header content */}
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-[#3C3C3C] drop-shadow-lg" data-aos="fade-up">Our Story</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 font-medium" data-aos="fade-up" data-aos-delay="200">
            Discover the journey, values, and passion behind Frolic Exports
          </p>
          
          {/* Decorative dots */}
          <div className="flex justify-center items-center space-x-4 mt-8" data-aos="fade-up" data-aos-delay="400">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E8B4B8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#E8D9A0] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT CONTENT SECTION ===== */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          
          {/* History Section */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1" data-aos="fade-right">
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-5 text-[#3C3C3C]">Our Humble Beginnings</h2>
                <p className="mb-5 text-gray-600 leading-relaxed">
                  Frolic Exports was founded in 2010 with a vision to create fashion that celebrates the modern woman. What started as a small boutique in New York has grown into an internationally recognized brand known for its elegant designs and impeccable craftsmanship.
                </p>
                <p className="mb-5 text-gray-600 leading-relaxed">
                  Our founder, Isabella Rodriguez, believed that clothing should not only make women look beautiful but also feel confident and empowered. This philosophy remains at the core of everything we create.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, we've expanded our collections while staying true to our commitment to quality, sustainability, and timeless design.
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-left" data-aos-delay="200">
                <img 
                  src="https://frolicexport.com/assets/img/ab1.jpg" 
                  alt="Frolic Exports History" 
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1" data-aos="fade-left">
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-5 text-[#3C3C3C]">Our Mission & Vision</h2>
                <p className="mb-5 text-gray-600 leading-relaxed">
                  At Frolic Exports, our mission is to create fashion that empowers women to express their individuality with confidence and grace. We believe that clothing should be both beautiful and meaningful.
                </p>
                <p className="mb-5 text-gray-600 leading-relaxed">
                  Our vision is to become a global leader in sustainable luxury fashion, setting new standards for quality, ethical production, and innovative design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to creating pieces that transcend trends and become cherished additions to your wardrobe for years to come.
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-right" data-aos-delay="200">
                <img 
                  src="https://frolicexport.com/assets/img/frolic-about2.jpg" 
                  alt="Frolic Exports Mission" 
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COUNTERS SECTION ===== */}
      {/* This ref is used to detect when user scrolls to this section */}
      <section 
        ref={counterSectionRef}
        className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#F9F6F0] relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://frolicexport.com/assets/img/frolic-about3.JPG')`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat:'no-repeat'
  }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Factory Area Counter */}
            <CounterCard 
              icon="fas fa-industry"
              value={counters.factoryArea}
              suffix="sqft"
              label="Factory Area"
              delay="100"
              color="from-[#D4AF37] to-[#E8B4B8]"
            />
            
            {/* Employees Counter */}
            <CounterCard 
              icon="fas fa-users"
              value={counters.employees}
              suffix="+"
              label="Employees"
              delay="200"
              color="from-[#E8B4B8] to-[#D4AF37]"
            />
            
            {/* Production Counter */}
            <CounterCard 
              icon="fas fa-tshirt"
              value={counters.production}
              suffix="+"
              label="Unit Production/month"
              delay="300"
              color="from-[#D4AF37] to-[#E8D9A0]"
            />
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37] rounded-full opacity-5 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E8B4B8] rounded-full opacity-5 translate-x-20 translate-y-20"></div>
      </section>

      {/* ===== FROM SKETCH TO STITCH SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-[#F5F1E8] to-[#F9F6F0] relative overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">From Sketch to Stitch</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our meticulous 8-step process of creating timeless fashion pieces
            </p>
          </div>

          {/* Main infographic container */}
          <div className="relative max-w-6xl mx-auto" data-aos="zoom-in">
            
            {/* Central illustration circle */}
            <div className="relative z-10 flex justify-center items-center mb-16">
              <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-[#E8D9A0] to-[#F5E1E2] rounded-full shadow-2xl flex items-center justify-center p-8 border-8 border-white">
                <div className="text-center" style={{textAlign:"-webkit-center"}}>
                  <img src="/src/assets/title-logo.png" alt="Frolic Exports Logo" className='animate-bounce [animation-duration:2.5s]' />
                  <p className="font-playfair text-xl lg:text-2xl font-semibold text-[#3C3C3C]">Design & Creation</p>
                </div>
              </div>
            </div>

            {/* Process steps grid layout - COMPLETELY FIXED */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-20">
              
              {/* Row 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-lightbulb text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    1
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Concept Planning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Defining the idea and theme with creative vision and market research
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-pencil-alt text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    2
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Creative Sketching</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Making initial fashion sketches and design illustrations
                </p>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-cut text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    3
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Prototype Sampling</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creating first garment samples and testing patterns
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fa-solid fa-ruler-combined text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    4
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Tailoring & Stitching</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Precision sewing and construction with expert craftsmanship
                </p>
              </div>

              {/* Additional steps for 8-step process */}
              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-search text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    5
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Quality Inspection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough quality checks and fabric validation
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-palette text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    6
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Color & Finishing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Applying colors and final touches to the garment
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-tags text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    7
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Branding & Packaging</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Adding brand elements and premium packaging
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-2 border-[#F5F1E8] group" data-aos="fade-up" data-aos-delay="800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-shipping-fast text-xl text-[#D4AF37]"></i>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    8
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3 text-[#3C3C3C]">Delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Final quality check and shipping to customers
                </p>
              </div>
            </div>

            {/* Connecting lines for desktop view */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border-t-2 border-l-2 border-[#E8D9A0] border-dashed rounded-tl-lg"></div>
              <div className="absolute top-1/4 right-1/4 w-24 h-24 border-t-2 border-r-2 border-[#E8D9A0] border-dashed rounded-tr-lg"></div>
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-b-2 border-l-2 border-[#E8D9A0] border-dashed rounded-bl-lg"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-b-2 border-r-2 border-[#E8D9A0] border-dashed rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-gradient-to-br relative overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard 
              icon="fas fa-users"
              value="100+"
              label="Team Members"
              delay="100"
              color="from-[#D4AF37] to-[#E8B4B8]"
            />
            <StatCard 
              icon="fas fa-globe-americas"
              value="15+"
              label="Countries"
              delay="200"
              color="from-[#E8B4B8] to-[#D4AF37]"
            />
            <StatCard 
              icon="fas fa-award"
              value="50+"
              label="Awards Won"
              delay="300"
              color="from-[#D4AF37] to-[#E8D9A0]"
            />
            <StatCard 
              icon="fas fa-heart"
              value="30+"
              label="Years Experience"
              delay="400"
              color="from-[#E8D9A0] to-[#E8B4B8]"
            />
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full opacity-5 translate-x-16 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E8B4B8] rounded-full opacity-5 translate-x-20 translate-y-20"></div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-white opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'><path d='M0,0 V100 Q500,50 1000,100 V0 Z' fill='white' opacity='0.1'/></svg>")`,
               backgroundSize: 'cover'
             }}>
        </div>
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we do at Frolic Exports
            </p>
          </div>
          
          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
            <ValueCard 
              icon="fas fa-heart"
              title="Quality Craftsmanship"
              description="Every piece is meticulously crafted with attention to detail, using the finest materials and traditional techniques combined with modern innovation."
              delay="100"
            />
            <ValueCard 
              icon="fas fa-leaf"
              title="Sustainability"
              description="We are committed to ethical and sustainable practices, from sourcing materials to production, ensuring minimal environmental impact."
              delay="200"
            />
            <ValueCard 
              icon="fas fa-users"
              title="Empowerment"
              description="We believe in empowering women through fashion, creating pieces that celebrate individuality and inspire confidence."
              delay="300"
            />
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The passionate individuals behind Frolic Exports
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
            <TeamMember 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              name="Isabella Rodriguez"
              role="Founder & Creative Director"
              delay="100"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              name="Michael Chen"
              role="Head of Design"
              delay="200"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              name="Sophia Williams"
              role="Production Manager"
              delay="300"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              name="David Johnson"
              role="Marketing Director"
              delay="400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== COUNTER CARD COMPONENT =====
// Interactive counter card with animated numbers
const CounterCard = ({ icon, value, suffix, label, delay, color }) => {
  return (
    <div 
      className="text-center group cursor-pointer" 
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-[#F5F1E8]">
        {/* Icon with gradient background */}
        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <i className={icon}></i>
        </div>
        
        {/* Animated counter value */}
        <div className="mb-2">
          <span className="font-playfair text-4xl md:text-5xl font-bold text-[#3C3C3C]">
            {value.toLocaleString()}
          </span>
          <span className="font-playfair text-2xl md:text-3xl font-bold text-[#D4AF37] ml-1">
            {suffix}
          </span>
        </div>
        
        {/* Label */}
        <p className="text-gray-600 font-medium text-lg">{label}</p>
        
        {/* Hover effect line */}
        <div className={`w-0 h-1 bg-gradient-to-r ${color} mx-auto mt-4 group-hover:w-16 transition-all duration-500`}></div>
      </div>
    </div>
  );
};

// ===== STAT CARD COMPONENT =====
const StatCard = ({ icon, value, label, delay, color }) => {
  return (
    <div 
      className="text-center group cursor-pointer" 
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-[#F5F1E8]">
        <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <i className={icon}></i>
        </div>
        
        <div className="mb-2">
          <span className="font-playfair text-3xl md:text-4xl font-bold text-[#3C3C3C]">
            {value}
          </span>
        </div>
        
        <p className="text-gray-600 font-medium">{label}</p>
        
        <div className={`w-0 h-1 bg-gradient-to-r ${color} mx-auto mt-4 group-hover:w-12 transition-all duration-500`}></div>
      </div>
    </div>
  );
};

// ===== PROCESS STEP COMPONENT =====
// Individual step card for the "From Sketch to Stitch" section
const ProcessStep = ({ number, icon, title, description, delay, position }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-[#F5F1E8] group relative overflow-hidden ${
        position === 'top-left' ? 'lg:-mt-9' :
        position === 'top-right' ? 'lg:-mt-9' :
        position === 'bottom-left' ? 'lg:-mb-9' :
        position === 'bottom-right' ? 'lg:-mb-9' :
        ''
      }`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      
      {/* Top section with icon and number */}
      <div className="flex items-start justify-between mb-6">
        {/* Icon container - Top left */}
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <i className={`${icon} text-2xl text-[#D4AF37]`}></i>
        </div>
        
        {/* Number badge - Top right */}
        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
      </div>
      
      {/* Content section */}
      <div className="space-y-4">
        <h3 className="font-playfair text-xl font-semibold text-[#3C3C3C] group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
      
      {/* Hover gradient background effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

// ===== VALUE CARD COMPONENT =====
// Card component for displaying company values
const ValueCard = ({ icon, title, description, delay }) => {
  return (
    <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-full flex items-center justify-center text-3xl text-[#3C3C3C]">
        <i className={icon}></i>
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// ===== TEAM MEMBER COMPONENT =====
// Component for displaying team member information
const TeamMember = ({ image, name, role, delay }) => {
  return (
    <div className="text-center" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="team-info">
        <h3 className="font-playfair text-xl font-semibold mb-1">{name}</h3>
        <p className="text-[#D4AF37] font-medium">{role}</p>
      </div>
    </div>
  );
};

export default About;