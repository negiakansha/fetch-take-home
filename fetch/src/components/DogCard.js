import '../css/dogCard.css';

//Card with dog image and info
const DogCard = ({ dog, isFavorite, onToggleFavorite }) => {
  return ( <>
    <div className="dog-card" onClick={() => onToggleFavorite(dog.id)}>
      <div className="dog-image-wrapper">
        <img src={dog.img} alt={dog.name} className="dog-image" />
        <svg
          className={ isFavorite ? 'favorited-icon' : "heart-icon" }
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                  C13.09 3.81 14.76 3 16.5 3 
                  19.58 3 22 5.42 22 8.5 
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="dog-info">
        <h3 className="dog-name">{dog.name}</h3>
        <p><span className="label">Breed:</span>{dog.breed}</p>
        <p><span className="label">Age:</span>{dog.age}</p>
        <p><span className="label">Zip Code:</span>{dog.zip_code}</p>
      </div>
    </div>
    </>
  );
};

export default DogCard;

