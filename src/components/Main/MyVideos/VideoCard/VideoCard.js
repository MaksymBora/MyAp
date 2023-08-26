import genres from '../../../../data/genres.json';

export const VideoCard = ({
  movies: {
    title,
    poster_path,
    genre_ids,
    overview,
    release_date,
    vote_average,
  },
}) => {
  const getMovieGenres = function (genre_ids) {
    return genre_ids.map(id => {
      const genreObject = genres.find(genre => genre.id === id);
      return genreObject ? genreObject.name : '';
    });
  };

  const genresNames = getMovieGenres(genre_ids);

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>Genre: {genresNames.join(', ')}</p>
        <p>vote average: {vote_average}</p>
        <p>{overview}</p>
        <p>Release date: {release_date}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
    </li>
  );
};
