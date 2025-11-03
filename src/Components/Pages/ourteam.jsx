import { useEffect, useState, useRef } from 'react';
import image1 from "../../assets/image1.JPG"
const Ourteam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: "Isabella Rodriguez",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Visionary leader with 15+ years in fashion industry. Passionate about sustainable fashion and empowering women through design.",
      email: "isabella@frolic.com",
      linkedin: "https://linkedin.com/in/isabella",
      experience: "15 years"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Award-winning designer with expertise in contemporary fashion and textile innovation.",
      email: "michael@frolic.com",
      linkedin: "https://linkedin.com/in/michael",
      experience: "12 years"
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Ensures seamless production processes and maintains our high quality standards across all collections.",
      email: "sophia@frolic.com",
      linkedin: "https://linkedin.com/in/sophia",
      experience: "10 years"
    },
    {
      id: 4,
      name: "David Johnson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Creative marketing strategist building global brand presence and connecting with our community.",
      email: "david@frolic.com",
      linkedin: "https://linkedin.com/in/david",
      experience: "11 years"
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Senior Fashion Designer",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Specializes in evening wear and bridal collections with exceptional attention to detail.",
      email: "emma@frolic.com",
      linkedin: "https://linkedin.com/in/emma",
      experience: "8 years"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Oversees global operations and ensures efficient supply chain management.",
      email: "james@frolic.com",
      linkedin: "https://linkedin.com/in/james",
      experience: "14 years"
    },
    {
      id: 7,
      name: "Olivia Martinez",
      role: "Digital Marketing Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Drives digital growth strategies and social media engagement across platforms.",
      email: "olivia@frolic.com",
      linkedin: "https://linkedin.com/in/olivia",
      experience: "7 years"
    },
    {
      id: 8,
      name: "Alexander Brown",
      role: "Quality Control Manager",
      image: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      description: "Maintains our uncompromising quality standards through rigorous testing and inspection.",
      email: "alex@frolic.com",
      linkedin: "https://linkedin.com/in/alexander",
      experience: "9 years"
    }
  ];

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
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F6F0] font-poppins text-[#3C3C3C] pt-16">

      {/* ===== PAGE HEADER SECTION ===== */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#E8D9A0] to-[#F5E1E2] opacity-15"></div>

        {/* Animated gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        {/* SVG pattern background */}
        <div className="absolute inset-0">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          ></div>

          {/* Black overlay with rgba */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          ></div>
        </div>


        {/* Decorative floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#E8B4B8] rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#E8D9A0] rounded-full blur-lg opacity-30 animate-ping"></div>

        {/* Main header content */}
        <div className="container mx-auto px-5 relative z-10 text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 drop-shadow-lg" data-aos="fade-up">Our Team</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium" data-aos="fade-up" data-aos-delay="200">
            Meet the passionate team behind Frolic Exports - where creativity meets craftsmanship
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center items-center space-x-4 mt-8" data-aos="fade-up" data-aos-delay="400">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E8B4B8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#E8D9A0] rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F6F0]">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            At <span className="text-[#D4AF37] font-semibold">Frolic Exports</span>, our team is the heart of everything we create.
            Each member brings unique expertise, creativity, and dedication to transform ideas into world-class designs.
            Together, we strive to set new benchmarks in quality, innovation, and global craftsmanship.
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer ">
            <TeamMember
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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

      {/* ===== CULTURE SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'><path d='M0,0 V100 Q500,50 1000,100 V0 Z' fill='white' opacity='0.1'/></svg>")`,
            backgroundSize: 'cover'
          }}>
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">Our Culture</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The values and environment that make Frolic Exports special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CultureCard
              icon="fas fa-handshake"
              title="Collaboration"
              description="We believe in the power of teamwork and cross-functional collaboration to create exceptional results."
              delay="100"
            />
            <CultureCard
              icon="fas fa-lightbulb"
              title="Innovation"
              description="Continuous learning and creative thinking drive our designs and business strategies forward."
              delay="200"
            />
            <CultureCard
              icon="fas fa-heart"
              title="Passion"
              description="Every team member brings genuine passion and dedication to their craft and our shared vision."
              delay="300"
            />
          </div>
        </div>
      </section>

      {/* ===== JOIN OUR TEAM SECTION ===== */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-[#3C3C3C]">Join Our Growing Team</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for fashion and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-[#D4AF37] text-[#3C3C3C] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                Send Your CV
              </button>
            </div>
          </div>
        </div>
      </section>
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

// ===== SIMPLE TEAM MEMBER COMPONENT (Like About Page) =====
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

// ===== CULTURE CARD COMPONENT =====
const CultureCard = ({ icon, title, description, delay }) => {
  return (
    <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#F5E1E2] to-[#E8D9A0] rounded-full flex items-center justify-center text-2xl text-[#3C3C3C]">
        <i className={icon}></i>
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Ourteam;