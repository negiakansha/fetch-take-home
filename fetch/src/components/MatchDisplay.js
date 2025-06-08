//Modal for user match
const MatchDisplay = ({ dog, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="match-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="match-label">Your Perfect Match</h1>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-footer">
          <div className="match-image-wrapper">
            <img src={dog.img} alt={dog.name} className="match-image" />
          </div>
          <div className="dog-info">
            <h3 className="dog-name">{dog.name}</h3>
            <p><span className="label">Breed:</span>{dog.breed}</p>
            <p><span className="label">Age:</span>{dog.age}</p>
            <p><span className="label">Zip Code:</span>{dog.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDisplay;
