import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';




class App extends React.Component {
  render () {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home">John Doe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Mentions">Mentions Légales</Link>
        </li>
      </ul>
    </div>
</div>
</nav>

<Routes>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="./Services" element={<Services/>}></Route>
  <Route path="./Portfolio" element={<Portfolio/>}></Route>
  <Route path="./Contact" element={<Contact/>}></Route>
  <Route path="./Mentions" element={<Mentions/>}></Route>
</Routes>
</>
    )
  }
}

export default App;
