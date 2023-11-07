import React from 'react';
import defaultImg from 'img/notFound.png';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name, original_title, poster_path }) => (
        <Link to={`/movies/${id}`} key={id}>
          {' '}
          <li>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : defaultImg
              }
              alt={title || name || original_title}
            />
            <p>{title || name || original_title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
