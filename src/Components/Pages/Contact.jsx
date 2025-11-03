import { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const mapRef = useRef(null);

const location = useLocation();

// useEffect(() => {
//   const params = new URLSearchParams(location.search);
//   const prefillMessage = params.get("message");
//   if (prefillMessage) {
//     setFormData((prev) => ({
//       ...prev,
//       message: decodeURIComponent(prefillMessage),
//       subject: `Job Application – ${decodeURIComponent(prefillMessage.match(/"(.*?)"/)?.[1] || "")}`,
//     }));
//   }
// }, [location.search]);



useEffect(() => {
  const params = new URLSearchParams(location.search);
  const prefillMessage = params.get("message");

  if (prefillMessage) {
    // Prefill message & subject automatically
    setFormData((prev) => ({
      ...prev,
      message: decodeURIComponent(prefillMessage),
      subject: `Job Application – ${decodeURIComponent(
        prefillMessage.match(/"(.*?)"/)?.[1] || prefillMessage
      )}`,
    }));

    // Smooth scroll to contact form
    setTimeout(() => {
      const formSection = document.querySelector("form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 600);
  }
}, [location.search]);



const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await ('https://formsubmit.co/ajax/43189e22c68124815ee9f188d7c6e0d9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
          _autoresponse: 'Thank you for contacting us! We will get back to you soon.',
          _next: window.location.href
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('FormSubmit error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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

    // Initialize map (simulated)
    if (mapRef.current) {
      // This would be where you initialize your actual map
      console.log('Map container ready');
    }

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
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-[#3C3C3C] drop-shadow-lg" data-aos="fade-up">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 font-medium" data-aos="fade-up" data-aos-delay="200">
            We'd love to hear from you. Let's start a conversation about how we can help you.
          </p>
          
          {/* Decorative dots */}
          <div className="flex justify-center items-center space-x-4 mt-8" data-aos="fade-up" data-aos-delay="400">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E8B4B8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#E8D9A0] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CARDS SECTION ===== */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard 
              icon="fas fa-map-marker-alt"
              title="Visit Our Office"
              details={["123 Fashion Avenue", "New York, NY 10001", "United States"]}
              linkText="Get Directions"
              linkUrl="#"
              delay="100"
              color="from-[#D4AF37] to-[#E8B4B8]"
            />
            <ContactCard 
              icon="fas fa-phone-alt"
              title="Call Us"
              details={["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri: 9AM-6PM EST"]}
              linkText="Call Now"
              linkUrl="tel:+15551234567"
              delay="200"
              color="from-[#E8B4B8] to-[#D4AF37]"
            />
            <ContactCard 
              icon="fas fa-envelope"
              title="Email Us"
              details={["hello@frolic.com", "support@frolic.com", "We reply within 24 hours"]}
              linkText="Send Email"
              linkUrl="mailto:hello@frolic.com"
              delay="300"
              color="from-[#D4AF37] to-[#E8D9A0]"
            />
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#F9F6F0] relative overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl" data-aos="fade-right">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-2 text-[#3C3C3C]">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center">
                  <i className="fas fa-exclamation-circle text-red-500 mr-3"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    icon="fas fa-user"
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    icon="fas fa-envelope"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    icon="fas fa-phone"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                  <FormField
                    label="Subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    icon="fas fa-tag"
                    placeholder="What is this regarding?"
                    disabled={isSubmitting}
                  />
                </div>
                
                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  icon="fas fa-comment"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  disabled={isSubmitting}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-3"></i>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <i className="fas fa-paper-plane ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information & Map */}
            <div className="space-y-8" data-aos="fade-left">
              
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-[#3C3C3C] flex items-center">
                  <i className="fas fa-clock text-[#D4AF37] mr-3"></i>
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', time: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-[#D4AF37] font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="font-playfair text-2xl font-semibold mb-6 flex items-center">
                  <i className="fas fa-bolt mr-3"></i>
                  Quick Connect
                </h3>
                <p className="mb-6 opacity-90">Prefer to reach out directly? Here are our instant contact options.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-[#3C3C3C] py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <i className="fab fa-whatsapp text-green-500 mr-2"></i>
                    WhatsApp
                  </a>
                  <a href="https://t.me/frolic_exports" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-[#3C3C3C] py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <i className="fab fa-telegram text-blue-500 mr-2"></i>
                    Telegram
                  </a>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div ref={mapRef} className="h-64 bg-gradient-to-br from-[#E8D9A0] to-[#F5E1E2] relative flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-[#D4AF37] mb-4"></i>
                    <p className="text-[#3C3C3C] font-semibold">Interactive Map</p>
                    <p className="text-gray-600 text-sm mt-2">123 Fashion Avenue, New York</p>
                  </div>
                  <div className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24">

        <div className="container mx-auto px-5">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Quick answers to common questions about our products and services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FAQItem 
                question="What is your typical response time?"
                answer="We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
                delay="100"
              />
              <FAQItem 
                question="Do you offer international shipping?"
                answer="Yes, we ship worldwide. Shipping costs and delivery times vary by location. Contact us for specific rates."
                delay="200"
              />
              <FAQItem 
                question="Can I visit your showroom?"
                answer="Absolutely! Our showroom is open Monday through Friday from 9 AM to 6 PM. We recommend scheduling an appointment."
                delay="300"
              />
              <FAQItem 
                question="What are your payment methods?"
                answer="We accept all major credit cards, bank transfers, and offer flexible payment plans for bulk orders."
                delay="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="container mx-auto px-5 text-center relative z-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-white" data-aos="fade-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Let's discuss how we can bring your vision to life with our premium fashion solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button className="bg-white text-[#3C3C3C] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#3C3C3C] transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== CONTACT CARD COMPONENT =====
const ContactCard = ({ icon, title, details, linkText, linkUrl, delay, color }) => {
  return (
    <div 
      className="text-center group cursor-pointer" 
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-[#F5F1E8] h-full flex flex-col">
        {/* Icon with gradient background */}
        <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <i className={icon}></i>
        </div>
        
        {/* Title */}
        <h3 className="font-playfair text-xl font-semibold mb-4 text-[#3C3C3C]">{title}</h3>
        
        {/* Details */}
        <div className="flex-1 space-y-2 mb-6">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">{detail}</p>
          ))}
        </div>
        
        {/* Action Link */}
        <a 
          href={linkUrl} 
          className={`inline-flex items-center justify-center text-[#D4AF37] font-semibold group-hover:text-[#E8B4B8] transition-colors duration-300`}
        >
          {linkText}
          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>
        
        {/* Hover effect line */}
        <div className={`w-0 h-1 bg-gradient-to-r ${color} mx-auto mt-4 group-hover:w-16 transition-all duration-500`}></div>
      </div>
    </div>
  );
};



// ===== FORM FIELD COMPONENT =====
const FormField = ({ label, name, type, value, onChange, required, icon, placeholder, rows, disabled }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-[#E8B4B8]">*</span>}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 resize-none bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
          />
        )}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <i className={icon}></i>
        </div>
      </div>
    </div>
  );
};

// ===== FAQ ITEM COMPONENT =====
const FAQItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={delay}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-playfair text-lg font-semibold text-[#3C3C3C] pr-4">{question}</h3>
        <div className={`w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] rounded-full flex items-center justify-center text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fas fa-chevron-down text-sm"></i>
        </div>
      </div>
      <div className={`mt-4 text-gray-600 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

export default Contact;