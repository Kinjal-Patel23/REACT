import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from "./Home/Home"
import About from "./About/About"
import Pages from "./Pages/Pages"
import Cart from "./Cart/Cart"
import Blog from "./Blog/Blog";
import Exploreall from "./Explore/Exploreall";

function App() {
  
  
  useEffect(() => {
    AOS.init({duration : 1000});
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Pages" element={<Pages/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Exploreall" element={<Exploreall/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
