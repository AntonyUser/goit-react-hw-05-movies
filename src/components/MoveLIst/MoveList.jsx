import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoveList.module.css';

export const MoviesList = ({ moviesData, location }) => {
  return (
    <ul className={styles.movieList}>
      {moviesData.map(({ original_title, name, id, poster_path }) => {
        return (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={styles.movieLink}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt={original_title}
                width="400"
              />
              {original_title ? original_title : name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
  //   location: PropTypes.object.isRequired,
};
