import defaultImg from 'img/notFound.png';
import { Link } from 'react-router-dom';
import styles from './MovieInfo.module.css';

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
    <div className={styles.movieInfoContainer}>
      <div className={styles.movieInfoTop}>
        <img
          className={styles.movieImage}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : defaultImg
          }
          alt={title || original_title}
        />
        <div className={styles.movieDetails}>
          <h2>{title || original_title}</h2>
          <p className={styles.reviewTitle}>
            Movie release date: {release_date}
          </p>
          <p className={styles.reviewTitle}>Movie rating: {vote_average}</p>
          <h2 className={styles.reviewText}>
            Description of the movie: {overview}
          </h2>
          <p className={styles.reviewTitle}>Genres: {allGenres}</p>
        </div>
      </div>
      <div className={styles.movieInfoBottom}>
        <h2>Additional Information</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
    </div>
  );
};
