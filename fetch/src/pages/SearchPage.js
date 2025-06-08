import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import DogGrid from '../components/DogGrid';
import Filter from '../components/Filter';
import Pages from '../components/Pages';
import { fetchBreeds, searchDogs, getDogsByIds } from '../api/services';

const DOGS_PER_PAGE = 20;

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [page, setPage] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const totalPages = Math.ceil(totalResults / DOGS_PER_PAGE);

  //Fetch breeds on load
  useEffect(() => {
    fetchBreeds()
      .then((data) => setBreeds(data || []))
      .catch((error) => {
        console.error('Failed to fetch dog breeds:', error);
        setBreeds([]);
      });
  }, []);

  useEffect(() => {
    const fetchDogs = async () => {
      setLoading(true);
      try {
        const breedQuery = selectedBreed ? `&breeds=${encodeURIComponent(selectedBreed)}` : '';
        let query;
        if (!sortOrder) {
          query = `?sort=breed:asc${breedQuery}&size=${DOGS_PER_PAGE}&from=${page * DOGS_PER_PAGE}`;
        } else {
          query = `?sort=name:${sortOrder}${breedQuery}&size=${DOGS_PER_PAGE}&from=${page * DOGS_PER_PAGE}`;
        }

        const searchResult = await searchDogs(query);
        const ids = searchResult?.resultIds ?? [];
        const total = searchResult?.total ?? 0;
        setTotalResults(total);

        if (ids.length === 0) {
          setDogs([]);
          return;
        }

        //Dog data fetched from dog id
        const dogData = await getDogsByIds(ids);
        if (Array.isArray(dogData)) {
          setDogs(dogData);
        } else {
          throw new Error('Invalid data.');
        }
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setDogs([]);
        setTotalResults(0);
      } finally {
        //make sure loading happens after everything is set
        setLoading(false);
      }
    };

    fetchDogs();
  }, [selectedBreed, sortOrder, page]);

  // Add dog to favorites
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <>
    { loading ? 
      <Loader loading={loading} /> :
      <div className="search-page">
        <Filter
          breeds={breeds}
          selectedBreed={selectedBreed}
          onBreedChange={setSelectedBreed}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          favorites={favorites}
        />
        <DogGrid
          dogs={dogs}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <Pages
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage - 1)}
        />
      </div>
    }
    </>
  );
};

export default SearchPage;
