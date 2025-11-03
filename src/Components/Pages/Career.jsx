import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 added import

const Career = () => {
  const navigate = useNavigate();

  // Function to handle "Apply Now" clicks
  const handleApplyClick = (position) => {
    const prefillMessage = encodeURIComponent(
      `Hello Team Frolic Exports Ltd,\n\nI would like to apply for the "${position}" position. Please find my details below:\n\n- Name:\n- Experience:\n- Portfolio/Resume link:\n\nRegards,`
    );

    navigate(`/contact?message=${prefillMessage}`);
  };

  useEffect(() => {
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
      }
    };
    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F6F0] font-poppins text-[#3C3C3C] pt-16 overflow-hidden">
      {/* ===== PAGE HEADER SECTION ===== */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#E8D9A0] to-[#F5E1E2] opacity-20"></div>

        <div className="absolute top-10 left-20 w-20 h-20 bg-[#D4AF37] rounded-full blur-2xl opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#E8B4B8] rounded-full blur-2xl opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#E8D9A0] rounded-full blur-lg opacity-20 animate-ping"></div>

        <div className="container mx-auto px-5 relative z-10">
          <h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-[#3C3C3C]"
            data-aos="fade-up"
          >
            Join Our Team
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At{" "}
            <span className="text-[#D4AF37] font-semibold">Frolic Exports</span>
            , we don’t just create products — we craft opportunities for
            creativity, growth, and innovation.
          </p>
        </div>
      </section>

      {/* ===== WHY WORK WITH US ===== */}
      <section className="py-24 bg-gradient-to-br from-[#F5F1E8] to-[#F9F6F0] relative">
        <div className="container mx-auto px-5 text-center">
          <h2
            className="font-playfair text-3xl md:text-4xl font-semibold mb-6"
            data-aos="fade-up"
          >
            Why Work With Us?
          </h2>
          <p
            className="max-w-2xl mx-auto text-gray-600 mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We believe that great work thrives in an inspiring environment. Join
            a global team that values creativity, excellence, and purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "fas fa-rocket",
                title: "Career Growth",
                desc: "We nurture talent and help you evolve through continuous learning and mentorship.",
                delay: "100",
              },
              {
                icon: "fas fa-hand-holding-heart",
                title: "Inclusive Culture",
                desc: "Diversity and collaboration are at the heart of everything we do.",
                delay: "200",
              },
              {
                icon: "fas fa-leaf",
                title: "Sustainable Mission",
                desc: "Be part of a company committed to ethical fashion and responsible sourcing.",
                delay: "300",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border border-[#E8D9A0]/60"
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#E8D9A0] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                  <i className={item.icon}></i>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-[#3C3C3C]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS SECTION ===== */}
      <section className="py-24 bg-[#fff] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E1E2]/30 to-[#E8D9A0]/30 opacity-40"></div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">
              Current Opportunities
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore roles that inspire and challenge you to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Merchandising",
                desc: "Manage international buyers, handle orders, and ensure smooth communication between clients and production teams.",
              },
              {
                title: "Design & Product Development",
                desc: "Create innovative fashion collections that combine global trends with expert craftsmanship.",
              },
              {
                title: "Quality Control",
                desc: "Inspect products at every stage to maintain our high standards of quality and perfection.",
              },
              {
                title: "Production Management",
                desc: "Plan and oversee production schedules to ensure timely delivery and flawless execution.",
              },
              {
                title: "Sales & Marketing",
                desc: "Promote brand visibility through creative campaigns and build strong client relationships worldwide.",
              },
              {
                title: "Logistics & Supply Chain",
                desc: "Coordinate shipping, inventory, and documentation for seamless international deliveries.",
              },
              {
                title: "Graphic Designer / Photographer",
                desc: "Create stunning visuals and product imagery that capture the brand’s essence and appeal.",
              },
              {
                title: "Product Modelling",
                desc: "Showcase garments through professional modeling to highlight fit, fabric, and design appeal.",
              },
              {
                title: "Supervisor",
                desc: "Oversee production teams, maintain workflow efficiency, and ensure adherence to quality standards.",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg border border-[#F5E1E2]/40 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="font-playfair text-xl font-semibold mb-3 text-[#3C3C3C]">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-6">{job.desc}</p>
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E8D9A0] text-white font-medium rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN US CTA ===== */}
      <section className="py-24 bg-gradient-to-br from-[#E8D9A0] via-[#F5E1E2] to-[#D4AF37] relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="container mx-auto px-5 relative z-10">
          <h2
            className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-[#3C3C3C]"
            data-aos="fade-up"
          >
            Be Part of Something Bigger
          </h2>
          <p
            className="max-w-2xl mx-auto text-gray-700 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Whether you’re a designer, marketer, or visionary — there’s a place
            for you in our global story.
          </p>
          <button
            className="px-8 py-3 bg-[#3C3C3C] text-white font-medium rounded-full shadow-md hover:bg-[#D4AF37] transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Join the Frolic Family
          </button>
        </div>

        <div className="absolute -top-10 left-1/4 w-32 h-32 bg-[#D4AF37] rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#E8B4B8] rounded-full blur-2xl opacity-25 animate-bounce"></div>
      </section>
    </div>
  );
};

export default Career;








// import { useEffect } from "react";

// const Career = () => {
//   useEffect(() => {
//     const initAOS = async () => {
//       if (typeof window !== "undefined") {
//         const AOS = (await import("aos")).default;
//         AOS.init({
//           duration: 1000,
//           once: true,
//           offset: 100,
//         });
//       }
//     };
//     initAOS();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F9F6F0] font-poppins text-[#3C3C3C] pt-16 overflow-hidden">
      
//       {/* ===== PAGE HEADER SECTION ===== */}
//       <section className="pt-32 pb-20 text-center relative overflow-hidden">
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#E8D9A0] to-[#F5E1E2] opacity-20"></div>

//         {/* Floating Decorative Elements */}
//         <div className="absolute top-10 left-20 w-20 h-20 bg-[#D4AF37] rounded-full blur-2xl opacity-20 animate-bounce"></div>
//         <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#E8B4B8] rounded-full blur-2xl opacity-25 animate-pulse"></div>
//         <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#E8D9A0] rounded-full blur-lg opacity-20 animate-ping"></div>

//         <div className="container mx-auto px-5 relative z-10">
//           <h1
//             className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-[#3C3C3C]"
//             data-aos="fade-up"
//           >
//             Join Our Team
//           </h1>
//           <p
//             className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 font-medium"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             At <span className="text-[#D4AF37] font-semibold">Frolic Exports</span>, we don’t just create products — we craft opportunities for creativity, growth, and innovation.
//           </p>
//         </div>
//       </section>

//       {/* ===== WHY WORK WITH US ===== */}
//       <section className="py-24 bg-gradient-to-br from-[#F5F1E8] to-[#F9F6F0] relative">
//         <div className="container mx-auto px-5 text-center">
//           <h2
//             className="font-playfair text-3xl md:text-4xl font-semibold mb-6"
//             data-aos="fade-up"
//           >
//             Why Work With Us?
//           </h2>
//           <p
//             className="max-w-2xl mx-auto text-gray-600 mb-16"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             We believe that great work thrives in an inspiring environment. Join a global team that values creativity, excellence, and purpose.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               {
//                 icon: "fas fa-rocket",
//                 title: "Career Growth",
//                 desc: "We nurture talent and help you evolve through continuous learning and mentorship.",
//                 delay: "100",
//               },
//               {
//                 icon: "fas fa-hand-holding-heart",
//                 title: "Inclusive Culture",
//                 desc: "Diversity and collaboration are at the heart of everything we do.",
//                 delay: "200",
//               },
//               {
//                 icon: "fas fa-leaf",
//                 title: "Sustainable Mission",
//                 desc: "Be part of a company committed to ethical fashion and responsible sourcing.",
//                 delay: "300",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border border-[#E8D9A0]/60"
//                 data-aos="zoom-in"
//                 data-aos-delay={item.delay}
//               >
//                 <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#E8D9A0] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
//                   <i className={item.icon}></i>
//                 </div>
//                 <h3 className="font-playfair text-xl font-semibold mb-4 text-[#3C3C3C]">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== OPEN POSITIONS SECTION ===== */}
//       <section className="py-24 bg-[#fff] relative overflow-hidden">
//         {/* Decorative shapes */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#F5E1E2]/30 to-[#E8D9A0]/30 opacity-40"></div>

//         <div className="container mx-auto px-5 relative z-10">
//           <div className="text-center mb-16" data-aos="fade-up">
//             <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-[#3C3C3C]">
//               Current Opportunities
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600">
//               Explore roles that inspire and challenge you to make an impact.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {[
//   {
//     title: "Merchandising",
//     desc: "Manage international buyers, handle orders, and ensure smooth communication between clients and production teams.",
//   },
//   {
//     title: "Design & Product Development",
//     desc: "Create innovative fashion collections that combine global trends with expert craftsmanship.",
//   },
//   {
//     title: "Quality Control",
//     desc: "Inspect products at every stage to maintain our high standards of quality and perfection.",
//   },
//   {
//     title: "Production Management",
//     desc: "Plan and oversee production schedules to ensure timely delivery and flawless execution.",
//   },
//   {
//     title: "Sales & Marketing",
//     desc: "Promote brand visibility through creative campaigns and build strong client relationships worldwide.",
//   },
//   {
//     title: "Logistics & Supply Chain",
//     desc: "Coordinate shipping, inventory, and documentation for seamless international deliveries.",
//   },
//   {
//     title: "Graphic Designer / Photographer",
//     desc: "Create stunning visuals and product imagery that capture the brand’s essence and appeal.",
//   },
//   {
//     title: "Product Modelling",
//     desc: "Showcase garments through professional modeling to highlight fit, fabric, and design appeal.",
//   },
//   {
//     title: "Supervisor",
//     desc: "Oversee production teams, maintain workflow efficiency, and ensure adherence to quality standards.",
//   },
// ]
// .map((job, i) => (
//               <div
//                 key={i}
//                 className="p-8 bg-white rounded-2xl shadow-lg border border-[#F5E1E2]/40 hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2"
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//               >
//                 <h3 className="font-playfair text-xl font-semibold mb-3 text-[#3C3C3C]">
//                   {job.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{job.desc}</p>
//                 <button className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E8D9A0] text-white font-medium rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== JOIN US CTA ===== */}
//       <section className="py-24 bg-gradient-to-br from-[#E8D9A0] via-[#F5E1E2] to-[#D4AF37] relative text-center overflow-hidden">
//         <div className="absolute inset-0 bg-white/10"></div>

//         <div className="container mx-auto px-5 relative z-10">
//           <h2
//             className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-[#3C3C3C]"
//             data-aos="fade-up"
//           >
//             Be Part of Something Bigger
//           </h2>
//           <p
//             className="max-w-2xl mx-auto text-gray-700 mb-10"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Whether you’re a designer, marketer, or visionary — there’s a place
//             for you in our global story.
//           </p>
//           <button
//             className="px-8 py-3 bg-[#3C3C3C] text-white font-medium rounded-full shadow-md hover:bg-[#D4AF37] transition-all duration-300"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             Join the Frolic Family
//           </button>
//         </div>

//         {/* Floating gradient orbs */}
//         <div className="absolute -top-10 left-1/4 w-32 h-32 bg-[#D4AF37] rounded-full blur-2xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#E8B4B8] rounded-full blur-2xl opacity-25 animate-bounce"></div>
//       </section>
//     </div>
//   );
// };

// export default Career;
