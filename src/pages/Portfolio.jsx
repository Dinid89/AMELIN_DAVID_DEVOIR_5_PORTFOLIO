import "./portfolio.css";
import Banner from "../images/banner.jpg";
import freshFood from "../images/fresh-food.jpg";
import Akira from "../images/restaurant-japonais.jpg";
import Salon from "../images/espace-bien-etre.jpg";
import SEO from "../images/seo.jpg";
import API from "../images/coder.jpg";
import Screen from "../images/screens.jpg";
import { NavLink } from "react-router-dom";
const Portfolio = () => {
  return (
    <>
       <div className="portfolioContainer col-md-12">
          <div className="banner">
            <img src={Banner} alt="bannière"/>
          </div>
          <div className="portfolioTitle col-md-12">
            <h1>Portfolio</h1>
            <p>Voici quelques unes de mes réalisations</p>
            <hr className="mx-auto border border-primary border-2 opacity-75" />
          </div>
       
        
        <div className="d-flex justify-content-center">
        <div className="cardsContainer row row-cols-1 row-cols-md-3 g-4 text-center">
            <div className="col">
              <div class="card h-100">
                <img src={freshFood} className="card-img-top" alt="fresh food"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>Fresh Food</strong></h2>
                    <p className="card-text">Site de vente de produits frais en ligne</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                <div className="card-footer">
                  <small className="text-body-secondary">Site réalisé avec PHP et MySQL</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src={Akira} className="card-img-top" alt="restaurant japonais"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>Akira</strong></h2>
                    <p className="card-text">Site pour un restaurant japonais</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Site réalisé avec Wordpress</small>
                  </div>
              </div>
            </div>

                 <div className="col">
              <div className="card h-100">
                <img src={Salon} className="card-img-top" alt="restaurant japonais"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>Espace bien-être</strong></h2>
                    <p className="card-text">Site pour un espace bien-être</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Site réalisé avec LARAVEL</small>
                  </div>
              </div>
            </div>

                 <div className="col">
              <div className="card h-100">
                <img src={SEO} className="card-img-top" alt="SEO"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>SEO</strong></h2>
                    <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Utilisation des outils SEO</small>
                  </div>
              </div>
            </div>

                 <div className="col">
              <div className="card h-100">
                <img src={API} className="card-img-top" alt="API"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>Création d'une API</strong></h2>
                    <p className="card-text">Création d'une API RESTFULL publique</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">PHP - SYMFONY</small>
                  </div>
              </div>
            </div>
                 <div className="col">
              <div className="card h-100">
                <img src={Screen} className="card-img-top" alt="Maquette d'un site web"/>
                  <div className="card-body">
                    <h2 className="card-title"><strong>Maquette d'un site web</strong></h2>
                    <p className="card-text">Création du prototype d'un site</p>
                    <NavLink to="/" className="btn btn-primary">Voir le site</NavLink>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">Site réalisé avec FIGMA</small>
                  </div>
              </div>
            </div>
          </div>  


          </div>

        </div>
        </>  

  );
};

export default Portfolio;