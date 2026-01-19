import "../Modal/mymodal.css";


const Mymodal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <>
     <div className="modal fade show d-block" tabindex="-1" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Mon profil GitHub</h5>
                    <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>


      <div classNameName="modal-backdrop fade show"></div>
    </>
  );
};

export default Mymodal;
