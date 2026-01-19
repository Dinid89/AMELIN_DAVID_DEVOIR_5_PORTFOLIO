import  { useState } from "react";
import "./home.css";
import johnDoeabout from "../images/john-doe-about.jpg";
import Mymodal from "../Modal/Mymodal";


const Home = () => {
    const [showModal, setShowModal] = useState (false)

    return (
    <>
    <main>
        <div className="container-fluid px-0">
            <section className="Hero"> 
                <div className="title text-center">
                    <h1 className="hello display-2 lg-3">Bonjour, je suis John Doe</h1>
                    <h2 className="hello display-2 lg-3">Développeur Web Full-Stack</h2>
                </div>
                    
            
            <button type="button" className="btn btn-danger mt-4" onClick={() => setShowModal(true)}>En savoir plus</button>
            <Mymodal show={showModal} onClose={() => setShowModal(false)} />

            </section>

            <section className="JohnDoe d-flex flex-column flex-lg-row">
                <div className="about d-flex flex-column">
                    <h3 className="titleAbout p-2">A propos</h3>
                    <img className="img-fluid p-1" src={johnDoeabout} alt="john doe"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda fugit perferendis 
                        excepturi non aut odit atque sunt et ex nihil perspiciatis fuga adipisci at, officiis veritatis itaque 
                        iusto eius.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda fugit perferendis 
                        excepturi non aut odit atque sunt et ex nihil perspiciatis fuga adipisci at, officiis veritatis itaque 
                        iusto eius.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda fugit perferendis 
                        excepturi non aut odit atque sunt et ex nihil perspiciatis fuga adipisci at, officiis veritatis itaque 
                        iusto eius.
                    </p>
                </div>
                <div className="competences d-flex-row flex-lg-row ">
                    <h3 className="titleAbout p-2">Mes compétences</h3>
                    <p className="p-1">HTML 90%
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-label="Success example" style={{ width: "90%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </p>
                    <p className="p-1">CSS 80%
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{ width: "80%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </p>
                    <p className="p-1">Javascript 70%
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: "70%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </p>
                    <p className="p-1">PHP 60%    
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-label="Danger example" style={{ width: "60%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </p>
                    <p className="p-1">React 50%    
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-label="Danger example" style={{ width: "50%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </p>    

                </div>
            </section>

        </div>

    </main>
    </>  
    )
}

export default Home;