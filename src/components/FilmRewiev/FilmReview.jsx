import { getMovieById } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmRewiev = () => {
  const { movieId } = useParams();
  const [filmRewiev, setFilmRewiev] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getMovieById(movieId, false, true).then(data => {
        setFilmRewiev(data.results);
      });
    } catch (error) {
      setError(error);
    }
  }, [movieId]);

  return (
    <div>
      {filmRewiev.length > 0 ? (
        <ul>
          {filmRewiev.map(rev => {
            return (
              <li key={rev.id}>
                <p>{rev.author}</p>
                <p>{rev.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Sorry, reviews not found</h3>
      )}
      {error && error.message}
    </div>
  );
};

export default FilmRewiev;
