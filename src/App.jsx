import { useEffect } from 'react';
import Header from './Components/Common/header';
import Footer from './Components/Common/footer';
import Home from './Components/Pages/home';
import { Route, Router, Routes } from 'react-router-dom';
import Product from './Components/Pages/product';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">

      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
      {/* <Home /> */}
      
      <Footer />
    </div>
  );
}

export default App;