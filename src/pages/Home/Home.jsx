import { getTrendMovies } from 'components/API/API';
import { MoviesList } from 'components/MoveLIst/MoveList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getTrendMovies().then(data => {
        setTrendMovies(data);
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {trendMovies && <MoviesList moviesData={trendMovies} />}
      {error && error.message}
    </div>
  );
};
export default Home;
