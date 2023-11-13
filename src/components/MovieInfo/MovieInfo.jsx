import defaultImg from 'img/notFound.png';
import { Link } from 'react-router-dom';

export const MovieInfo = ({ movieDetails }) => {
  const {
    title,
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movieDetails;
  const allGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : defaultImg
        }
        alt={title || original_title}
      />
      <div>
        <h1>{title || original_title}</h1>
        <p>Дата виходу: {release_date}</p>
        <p>Оцінка :{vote_average}</p>
        <h2>Опис фільму{overview}</h2>
        <p>Жанри:{allGenres}</p>
      </div>
      <div>
        <h2>додаткова інформація</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
    </div>
  );
};
