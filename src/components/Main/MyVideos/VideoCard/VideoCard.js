import genres from '../../../../data/genres.json';

import {
  StyledMovieCardWrapper,
  StyledMovieTitle,
  StyledMovieImg,
  StyledMovieOverview,
  StyledMovieGenre,
} from './VideoCard.styled';

export const VideoCard = ({
  movies: { title, poster_path, genre_ids, overview, release_date },
}) => {
  const getMovieGenres = function (genre_ids) {
    return genre_ids.map(id => {
      const genreObject = genres.find(genre => genre.id === id);
      return genreObject ? genreObject.name : '';
    });
  };

  const genresNames = getMovieGenres(genre_ids);

  return (
    <StyledMovieCardWrapper>
      <StyledMovieTitle>{title}</StyledMovieTitle>

      <StyledMovieOverview>{overview}</StyledMovieOverview>
      <StyledMovieImg
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <StyledMovieGenre>Genre: {genresNames.join(', ')}</StyledMovieGenre>

      <p>Release date: {release_date}</p>
    </StyledMovieCardWrapper>
  );
};
