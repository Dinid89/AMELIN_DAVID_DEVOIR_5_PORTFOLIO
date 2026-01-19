import "./contact.css";
import Banner from "../images/banner.jpg"


const Contact = () => {
  return (
    <main>
      <div>
        <div className="banner">
            <img src={Banner} alt="bannière"/>
        </div>
        <div className="titleContact">
          <h1>Contact</h1>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
          <hr className="mx-auto border border-primary border-2 opacity-75" />
        </div>  
            
        <section className="mainContact d-flex flex-column flex-lg-row">
              <div className="formulaire d-flex flex-column">
                  <h2 className="titleForm p-2">Formulaire de contact</h2>
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
                          <input type="email" className="form-control" aria-label="Votre mail" required placeholder="Votre mail"/>
                        </div>

                        <div className="mb-1">
                          <input type="text" className="form-control" aria-label="sujet" required placeholder="Sujet"/>
                        </div>

                        <div className="mb-1">
                          <textarea className="message" rows="18" required placeholder="Votre message"/>
                        </div>
                        <div className="btnSubmit d-flex justify-content-center">
                          <button type="submit" aria-label="Envoyer le message">Envoyer</button>
                        </div>
                      </fieldset>
                    </form>
                </div>

                <div className="coordonnées d-flex-row flex-lg-row ">
                  <h2 className="titleForm p-2">Mes coordonnées</h2>
                    <div className="iconesContact d-flex flex-column flex-lg-column">
                      <h3>John Doe</h3>
                        <address className="adresse d-flex flex-column flex-lg-column">
                          <p>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map me-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                              </svg>
                              <span>40 Rue Laure Diebold</span>
                            </div>
                        
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                              </svg>
                              <span>69009 Lyon</span>
                            </div>

                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-vibrate me-2" viewBox="0 0 16 16">
                              <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                              <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
                              </svg>
                              <span>10 20 30 40 50</span>
                            </div>

                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                              </svg>
                              <span>john.doe@gmail.com</span>
                              </div>
                          </p>
                        </address>
                    </div>
                    <div className="map-container">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626968942958!2d4.794365477628085!3d45.77866564850217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1768642723485!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
              </section>
      </div>
    </main>
  );
};

export default Contact;