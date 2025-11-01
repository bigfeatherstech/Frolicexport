// import React from "react";
// import image3 from "../../assets/image3.png";
// import image5 from "../../assets/image5.JPG";
// import image8 from "../../assets/image8.jpg";
// import image9 from "../../assets/image9.jpg";

// const TradeShows = () => {
//   const shows = [
//     {
//       title: "International Garment Expo",
//       location: "Dubai, UAE",
//       year: "2025",
//       image: image3,
//       description:
//         "Showcased our latest garment innovations and established key partnerships across the Middle East market.",
//     },
//     {
//       title: "India International Trade Fair",
//       location: "New Delhi, India",
//       year: "2024",
//       image: image5,
//       description:
//         "Presented premium quality collections and sustainable fabrics to global fashion distributors and buyers.",
//     },
//     {
//       title: "Paris Fashion Connect",
//       location: "Paris, France",
//       year: "2023",
//       image: image8,
//       description:
//         "Introduced high-fashion export lines and expanded presence across European retail networks.",
//     },
//     {
//       title: "Global Apparel Business Meet",
//       location: "Singapore",
//       year: "2022",
//       image: image9,
//       description:
//         "Engaged with international partners to strengthen B2B trade collaborations and supply chain expansion.",
//     },
//      {
//       title: "Global Apparel Business Meet",
//       location: "Singapore",
//       year: "2022",
//       image: image9,
//       description:
//         "Engaged with international partners to strengthen B2B trade collaborations and supply chain expansion.",
//     },
//      {
//       title: "Global Apparel Business Meet",
//       location: "Singapore",
//       year: "2022",
//       image: image9,
//       description:
//         "Engaged with international partners to strengthen B2B trade collaborations and supply chain expansion.",
//     },
//   ];

//   return (
//     <section className="trade-shows bg-gradient-to-b from-[#fff8f0] via-[#fffdfb] to-[#fff8f0] mt-20 relative overflow-hidden font-poppins">
      
//       {/* === Banner Image === */}
//       <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
//         <img
//           src={image9}
//           alt="Trade Shows Banner"
//           className="w-full h-full object-cover brightness-[0.75] scale-105"
//         />
//         <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-3 animate-slideDown">
//             Global Trade Shows
//           </h1>
//           <p className="text-sm md:text-lg max-w-2xl animate-fadeIn">
//             Showcasing craftsmanship, innovation, and global presence in every exhibition.
//           </p>
//         </div>
//       </div>

//       {/* === Cards Section === */}
//       <div className="container mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {shows.map((show, index) => (
//           <div
//             key={index}
//             className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-[#f5deb3]/50 mt-6 mb-6 transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#d4af37]/60 animate-fadeInUp"
//             style={{ animationDelay: `${index * 0.2}s` }}
//           >
//             <div className="h-56 overflow-hidden">
//               <img
//                 src={show.image}
//                 alt={show.title}
//                 className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
//               />
//             </div>
//             <div className="p-6 text-center">
//               <h2 className="text-xl font-playfair text-[#d4af37] mb-1">
//                 {show.title}
//               </h2>
//               <p className="text-sm text-[#ffcc33] font-medium">
//                 {show.location} • {show.year}
//               </p>
//               <p className="text-gray-700 text-sm leading-relaxed mt-3">
//                 {show.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Decorative Line */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

//       {/* Inline Animations */}
//       <style>
//         {`
//           @keyframes slideDown {
//             0% { opacity: 0; transform: translateY(-30px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-slideDown {
//             animation: slideDown 1.2s ease-out forwards;
//           }

//           @keyframes fadeIn {
//             0% { opacity: 0; transform: scale(0.95); }
//             100% { opacity: 1; transform: scale(1); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 1.4s ease-out forwards;
//           }

//           @keyframes fadeInUp {
//             0% { opacity: 0; transform: translateY(40px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeInUp {
//             animation: fadeInUp 1s ease-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default TradeShows;





import React from "react";
import image3 from "../../assets/image3.png";
import image5 from "../../assets/image5.JPG";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image7 from "../../assets/image7.jpg";
// import banner from "../../assets/banner3.jpg";
import banner from "../../assets/banner4.jpg";

const TradeShows = () => {
  const shows = [
    {
      title: "International Garment Expo",
      location: "Dubai, UAE",
      year: "2025",
      image: image3,
      description:
        "Showcased our latest garment innovations and established key partnerships across the Middle East market.",
    },
    {
      title: "India International Trade Fair",
      location: "New Delhi, India",
      year: "2024",
      image: image5,
      description:
        "Presented premium quality collections and sustainable fabrics to global fashion distributors and buyers.",
    },
    {
      title: "Paris Fashion Connect",
      location: "Paris, France",
      year: "2023",
      image: image8,
      description:
        "Introduced high-fashion export lines and expanded presence across European retail networks.",
    },
    {
      title: "Global Apparel Business Meet",
      location: "Singapore",
      year: "2022",
      image: image9,
      description:
        "Engaged with international partners to strengthen B2B trade collaborations and supply chain expansion.",
    },
    {
      title: "World Textile Expo",
      location: "Istanbul, Turkey",
      year: "2021",
      image: image3,
      description:
        "Exhibited innovative textile solutions and sustainable fashion fabrics for international markets.",
    },
    {
      title: "Asian Fashion Week",
      location: "Tokyo, Japan",
      year: "2020",
      image: image8,
      description:
        "Showcased luxury fashion wear blending modern technology with traditional craftsmanship.",
    },
  ];

  return (
    <section className="trade-shows bg-gradient-to-b from-[#fff8f0] via-[#fffdfb] to-[#fff8f0] mt-20 relative overflow-hidden font-poppins">
      
      {/* === Banner Image === */}
      <div className="relative w-full h-[40vh] md:h-[40vh] overflow-hidden">
        <img
          src={banner}
          alt="Trade Shows Banner"
          className="w-full h-full object-cover brightness-[0.75] scale-105"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white text-px-4">
          <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-3 animate-slideDown">
            Global Trade Shows
          </h1>
          <p className="text-sm md:text-lg max-w-2xl animate-fadeIn text-[#ffcc33]  ">
            Showcasing craftsmanship, innovation, and global presence in every exhibition.
          </p>
        </div>
      </div>

      {/* === Cards Section === */}
      <div className="container mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {shows.map((show, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-[#f5deb3]/50 mt-20 mb-6 transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#d4af37]/60 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="h-56 overflow-hidden">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-playfair text-[#d4af37] mb-1">
                {show.title}
              </h2>
              <p className="text-sm text-[#ffcc33] font-medium">
                {show.location} • {show.year}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                {show.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* === New Section: Global Presence === */}
      <div className="bg-[#fffaf3] py-20 mt-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-playfair text-[#d4af37] mb-4">
              Our Global Presence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              From Asia to Europe, our journey in global exhibitions has helped us 
              connect cultures and build strong relationships in the garment and textile 
              industry. Every trade show marks a new milestone in innovation and collaboration.
            </p>
            <button className="px-6 py-3 bg-[#d4af37] text-white font-semibold rounded-full shadow-md hover:bg-[#b8962d] transition">
              Discover More
            </button>
          </div>
          <div>
            <img
              src={image8}
              alt="Global Presence"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* === New Section: Achievements Counters === */}
      <div className="bg-[#f9f4e8] py-16 text-center">
        <h3 className="text-2xl font-playfair text-[#d4af37] mb-10">
          Achievements & Highlights
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
          {[
            { label: "Years of Experience", value: "15+" },
            { label: "Global Exhibitions", value: "40+" },
            { label: "Countries Reached", value: "25+" },
            { label: "International Partners", value: "120+" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-[#e0c36e]/50 shadow hover:shadow-lg transition"
            >
              <p className="text-3xl font-bold text-[#d4af37] mb-2">{item.value}</p>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === New Section: Upcoming Trade Shows === */}
      <div className="bg-gradient-to-r from-[#fffdf5] to-[#fff8f0] py-20 text-center">
        <h3 className="text-2xl font-playfair text-[#d4af37] mb-10">
          Upcoming Trade Shows
        </h3>
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              title: "Asia Apparel Expo 2026",
              date: "March 2026",
              location: "Bangkok, Thailand",
              image: image5,
            },
            {
              title: "Textile World Summit",
              date: "June 2026",
              location: "London, UK",
              image: image3,
            },
          ].map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-500 border border-[#f5deb3]/50"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6">
                <h4 className="text-xl font-playfair text-[#d4af37] mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-[#ffcc33] font-medium mb-2">
                  {event.date} • {event.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Join us to explore new opportunities and the future of fashion innovation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

      {/* Inline Animations */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown { animation: slideDown 1.2s ease-out forwards; }

          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn { animation: fadeIn 1.4s ease-out forwards; }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        `}
      </style>
    </section>
  );
};

export default TradeShows;
