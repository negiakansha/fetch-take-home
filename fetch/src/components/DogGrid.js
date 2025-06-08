import DogCard from './DogCard';

//Maps each dog objects to a card
const DogGrid = ({ dogs, favorites, onToggleFavorite }) => {
  if (dogs.length === 0) return <p>No dogs found.</p>

  return (
    <div className="dog-grid">
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          isFavorite={favorites.includes(dog.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default DogGrid;
