import "./services.css";
import Banner from "../images/banner.jpg"

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="banner">
        <img src={Banner} alt="bannière"/>
      </div>
      <div className="servicesTitle d-flex">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>
    </div>
  );
};

export default Services;