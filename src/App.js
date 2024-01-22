import './App.css';
import { Routes, Route } from "react-router-dom";
import MyFooter from './components/footer/MyFooter';
import Home from './components/home/Home';
import MyNavbar from './components/navbar/MyNavbar';
import About from './components/about/About';
import Citycabsfuture from './pages/citycabsfuture/Citycabsfuture';
import Partners from './pages/partners/Partners';
import Blog from './pages/blog/Blog';


function App() {
  return (
     <>
      <MyNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={< About/>} />
      <Route path="/our-partners" element={< Partners/>} />
      <Route path="/city-cabs-future" element={< Citycabsfuture/>} />
      <Route path="/blog" element={< Blog/>} />
      </Routes>
      <MyFooter/>
     </>
  );
}

export default App;
