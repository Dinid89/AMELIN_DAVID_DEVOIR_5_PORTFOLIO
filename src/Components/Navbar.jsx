import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/Home">John Doe</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Services">Services</NavLink>
                </li>
                <li className="nav-item"> 
                    <NavLink className="nav-link" aria-current="page" to="/Portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Mentions">Mentions Légales</NavLink>
                </li>
            </ul>
        </div>
   </div>
</nav>
</>
    )
  }

export default Navbar;