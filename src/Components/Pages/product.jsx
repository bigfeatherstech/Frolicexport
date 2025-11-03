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

  // Filter products based on category - FIXED VERSION
  const filteredProducts = featuredCollections.filter(product => {
    if (activeFilter === 'all') return true;
    
    // Directly use the category field from data.js
    return product.category === activeFilter;
  });

  // Use only filtered products - REMOVED duplicate products
  const allProducts = filteredProducts;

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
            {['all', 'cord-set', 'tops-blouses', 'dresses'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-btn px-6 py-3 bg-white border-2 rounded-full font-medium cursor-pointer transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? 'bg-pink border-pink text-dark shadow-lg'
                    : 'border-pink-light text-gray-700 hover:bg-pink-light hover:border-pink'
                }`}
              >
                {filter === 'all' ? 'All Products' : filter.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.length > 0 ? (
              allProducts.map((product, index) => (
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
                      className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-contain" 
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
                  <div className="product-info p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-dark">{product.title}</h3>
                    {/* <p className="text-gold font-medium text-lg mb-3">{product.price}</p> */}
                    <div className="product-meta flex justify-between items-center">
                      <span className="product-category bg-pink-light text-dark text-xs px-3 py-1 rounded-full capitalize">
                        {product.category?.replace('-', ' ') || 'Fashion'}
                      </span>
                      <button className="text-gray-400 hover:text-pink transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12" data-aos="fade-up">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-dark">No products found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any products in this category.</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="btn bg-gradient-to-br from-gold to-gold-light text-white py-3 px-8 rounded-full font-medium cursor-pointer transition-all duration-300 shadow-lg shadow-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/40"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;