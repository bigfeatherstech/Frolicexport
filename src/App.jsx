import { useEffect } from 'react';
import Header from './Components/Common/header';
import Footer from './Components/Common/footer';
import Home from './Components/Pages/home';
import { Route, Router, Routes } from 'react-router-dom';
import Product from './Components/Pages/product';
import About from './Components/Pages/about';
import Ourteam from './Components/Pages/ourteam';
import BottomToTop from './Components/Common/bottomtotop';
import Career from './Components/Pages/Career';
import Contact from './Components/Pages/Contact';
import Infrastructure from './Components/Pages/Infrastructure';
import TradeEvents from './Components/Pages/TradeEvents';

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
         <Route path='/about' element={<About/>} />
       <Route path='/career' element={<Career/>} />
         <Route path='/contact' element={<Contact/>} />
           <Route path='/ourteam' element={<Ourteam/>} />
             <Route path='/brand-showcases' element={<Infrastructure/>} />
               <Route path='/design-foundation' element={<TradeEvents/>} />

                              <Route path='/design-foundation' element={<TradeEvents/>} />

      </Routes>
      <Footer />
      <BottomToTop />
    </div>
  );
}

export default App;