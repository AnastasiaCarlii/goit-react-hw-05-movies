import defaultImg from 'img/notFound.png';
import styles from './CastInfo.module.css';

export const CastInfo = ({ cast }) => {
  return (
    <div className={styles.movieInfoContainer}>
      <ul className={styles.castList}>
        {cast.length > 0 ? (
          cast.map(({ id, name, character, profile_path }) => (
            <li className={styles.castItem} key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>Sorry, but we do not have any information yet.</p>
        )}
      </ul>
    </div>
  );
};
