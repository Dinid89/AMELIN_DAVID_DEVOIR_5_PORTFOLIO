import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';  
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';




class App extends React.Component {
  render () {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>

        <Footer />

      </>
    )
  }
}

export default App;
