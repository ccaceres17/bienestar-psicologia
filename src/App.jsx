import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';  
import Footer from './components/Footer';        
import Home from './pages/Home';                 
import Citas from './pages/Citas';               
import Contacto from './pages/Contacto';         
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

//AOS imports
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // 🔄 Inicializa AOS al cargar la app
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <NavigationBar />
      <main className="container my-4">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </Router>
  );
}

export default App;
