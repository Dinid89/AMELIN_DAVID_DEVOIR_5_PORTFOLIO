import "./home.css";
import heroBg from "../images/hero-bg.jpg";

const Home = () => {
    return (
    <>
    <div className="container-fluid px-0">
    <section className="Hero"> 
        <div className="title text-center">
            <h1 className="hello display-2 lg-3">Bonjour, je suis John Doe</h1>
            <h2 className="hello display-2 lg-3">Développeur Web Full-Stack</h2>
        </div>
        <button className="btnInfo display-10 lg-5">En savoir plus</button>
    </section>
    </div>
    </>  
    )
}

export default Home;