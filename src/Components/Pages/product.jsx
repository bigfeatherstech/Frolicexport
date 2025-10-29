import { useEffect, useState } from 'react';
import { featuredCollections } from '../DATA/data';
import ProductDetailModal from '../PoductDetailModal/ProductDetailModal';

// Import AOS styles
import 'aos/dist/aos.css';

// Import AOS
import AOS from 'aos';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Filter products based on category
  const filteredProducts = featuredCollections.filter(product => {
    if (activeFilter === 'all') return true;
    
    // Map your products to categories based on some logic
    // For now, I'll use a simple mapping based on product titles
    const categoryMap = {
      'garments': ['Silk Evening Gown', 'Floral Summer Dress'],
      'bags': ['Leather Tote Bag', 'Evening Clutch'],
      'accessories': ['Cashmere Blend Scarf'],
      'jewelry': ['Gold Plated Necklace']
    };

    return categoryMap[activeFilter]?.includes(product.title);
  });

  // Add additional products to match the HTML structure
  const allProducts = [
    ...filteredProducts,
    // Additional products to match the HTML
    {
      id: 5,
      title: "Floral Summer Dress",
      subtitle: "Light and Airy Summer Essential",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      ],
      alt: "Floral Summer Dress",
      shortDescription: "Light and airy floral summer dress with a flattering A-line silhouette.",
      description: "Light and airy floral summer dress with a flattering A-line silhouette. Made from breathable cotton blend fabric. Perfect for warm weather and casual occasions.",
      specifications: {
        Material: "Cotton Blend",
        Style: "A-Line",
        Length: "Knee-Length",
        SleeveType: "Short Sleeves",
        CareInstructions: "Machine Wash Cold",
        Occasion: "Casual / Summer"
      },
      availability: "In Stock",
      category: "garments"
    },
    {
      id: 6,
      title: "Evening Clutch",
      subtitle: "Elegant Evening Essential",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      ],
      alt: "Evening Clutch",
      shortDescription: "Elegant evening clutch with metallic finish and secure clasp.",
      description: "Elegant evening clutch with metallic finish and secure clasp. Compact yet spacious enough for essentials. The perfect accessory for formal events and nights out.",
      specifications: {
        Material: "Synthetic Leather",
        Closure: "Magnetic Snap",
        Size: "Small",
        Compartments: "1 Main",
        CareInstructions: "Wipe Clean",
        Occasion: "Formal / Evening"
      },
      availability: "In Stock",
      category: "bags"
    }
  ];

  if (loading) {
    return (
      <div id="loading-screen" className="fixed inset-0 bg-ivory flex items-center justify-center z-50 transition-opacity duration-500">
        <div className="loader w-20 h-20 border-4 border-pink-light border-t-pink rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        activeImageIndex={activeImageIndex}
        onImageChange={handleImageChange}
      />

      {/* Page Header */}
      <section className="page-header pt-32 pb-20 text-center bg-gradient-to-br from-beige to-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" preserveAspectRatio=\"none\"><path d=\"M0,0 V100 Q500,50 1000,100 V0 Z\" fill=\"white\" opacity=\"0.2\"/></svg>")',
          backgroundSize: 'cover'
        }}></div>
        
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-5 text-dark" data-aos="fade-up">
            Our Collections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover our carefully curated selection of premium fashion pieces
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products py-16 bg-ivory">
        <div className="container mx-auto px-5">
          {/* Filter Tabs */}
          <div className="filter-tabs flex justify-center flex-wrap gap-3 mb-12" data-aos="fade-up">
            {['all', 'garments', 'accessories', 'bags', 'jewelry'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-btn px-6 py-3 bg-white border-2 rounded-full font-medium cursor-pointer transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? 'bg-pink border-pink text-white shadow-lg'
                    : 'border-pink-light text-gray-700 hover:bg-pink-light hover:border-pink'
                }`}
              >
                {filter === 'all' ? 'All Products' : filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group"
                data-aos="fade-up" 
                data-aos-delay={(index % 3) * 100}
              >
                <div className="product-img h-80 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="quick-view bg-white text-gray-900 py-3 px-6 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white shadow-lg"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-info p-6">
                  <h3 className="text-lg font-semibold mb-2 text-dark">{product.title}</h3>
                  <p className="text-gold font-medium text-lg mb-3">{product.price}</p>
                  <div className="product-meta flex justify-between items-center">
                    <span className="product-category bg-pink-light text-dark text-xs px-3 py-1 rounded-full">
                      {product.category || 'Fashion'}
                    </span>
                    <button className="text-gray-400 hover:text-pink transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;