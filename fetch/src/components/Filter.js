import '../css/filter.css';
import { useState } from 'react';
import MatchDisplay from './MatchDisplay';
import { matchDogs, getDogsByIds } from '../api/services';

const Filter = ({ breeds, selectedBreed, onBreedChange, sortOrder, onSortChange, favorites }) => {
  const [match, setMatch] = useState({});
  const [displayMatch, setDisplayMatch] = useState(false);

  //Find match for user
  const handleMatch = () => {
    if (favorites.length === 0) {
      setDisplayMatch(false);
      alert("Favorite at least one dog to find your perfect match!");
    } else {
      matchDogs(favorites)
        .then((res) => {
          const matchedId = res.match;
          return getDogsByIds([matchedId]);
        })
        .then((dogArray) => {
          setMatch(dogArray[0]);
          setDisplayMatch(true);
        })
        .catch((error) => {
          console.error("Error fetching match:", error);
          alert("Something went wrong finding your match.");
        });
    }
  };

  return (
    <div className="filter-menu">
      <select value={selectedBreed} onChange={(e) => onBreedChange(e.target.value)}>
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>

      <button className="match-button" onClick={handleMatch}>
        Match Me!
      </button>
      {displayMatch && <MatchDisplay dog={match} onClose={() => setDisplayMatch(false)} />}
    </div>
  );
};

export default Filter;
