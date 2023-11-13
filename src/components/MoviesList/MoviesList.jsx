import React from 'react';
import defaultImg from 'img/notFound.png';
import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <h2 className={styles.trending}>Trending today</h2>
      <ul className={styles.moviesList}>
        {movies.map(({ id, title, name, original_title, poster_path }) => (
          <Link
            to={`/movies/${id}`}
            key={id}
            className={styles.movieLink}
            state={{ from: location }}
          >
            {' '}
            <li className={styles.movieItem}>
              <img
                className={styles.movieImage}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title || name || original_title}
              />
              <p className={styles.movieTitle}>
                {title || name || original_title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
