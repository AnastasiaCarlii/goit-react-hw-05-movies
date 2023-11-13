import defaultImg from 'img/notFound.png';

export const CastInfo = ({ cast }) => {
  return (
    <ul>
      {cast.length > 0 ? (
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <p>name: {name}</p>
            <p>character: {character}</p>
          </li>
        ))
      ) : (
        <p>sorry, we have no Info</p>
      )}
    </ul>
  );
};
