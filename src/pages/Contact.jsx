import "./contact.css";


const Contact = () => {
  return (
    <main>
      <div>
        <div className="titleContact">
          <h1>Contact</h1>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
        </div>  
            
        <section className="mainContact d-flex flex-column flex-lg-row">
              <div className="formulaire d-flex flex-column">
                  <h3 className="titleForm p-2">Formulaire de contact</h3>
                  <form action="/Contact" method="post">
                  <fieldset className="fieldset d-flex flex-column flex-lg-column">
                  <div className="mb-1">
                    <input type="text" className="form-control" aria-label="Votre nom" required placeholder="Votre nom"/>
                  </div>

                  <div className="mb-1">
                    <input type="text" className="form-control" aria-label="Votre prénom" required placeholder="Votre prénom"/>
                  </div>

                  <div className="mb-1">
                    <input type="tel" className="form-control" required aria-label="Votre téléphone" placeholder="Votre téléphone"/>
                  </div>

                  <div className="mb-1">
                    <input type="email" className="form-control" aria-label="Votre mal" required placeholder="Votre mail"/>
                  </div>

                  <div className="mb-1">
                    <input type="text" className="form-control" aria-label="sujet" required placeholder="Sujet"/>
                  </div>

                  <div className="mb-1">
                    <textarea className="message" required placeholder="Votre message"/>
                  </div>
                  <div className="btnSubmit d-flex justify-content-center">
                    <button type="submit" aria-label="Envoyer le message">Envoyer</button>
                  </div>
                </fieldset>
                </form>
              </div>

              <div className="coordonnées d-flex-row flex-lg-row ">
                    <h3 className="titleForm p-2">Mes coordonnées</h3>
                  

                </div>
            </section>
      </div>
    </main>
  );
};

export default Contact;