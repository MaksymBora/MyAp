import genres from '../../../../data/genres.json';

import {
  StyledVideosList,
  StyledMovieCardWrapper,
  StyledMovieTitle,
  StyledMovieImg,
  StyledMovieOverview,
  StyledMovieGenre,
  StyledImgDescriptionWrapper,
} from './MoviesList.styled';

export const VideoList = ({ movies }) => {
  return (
    <StyledVideosList>
      {movies.map(item => {
        const { id, title, poster_path, genre_ids, overview, release_date } =
          item;

        const getMovieGenres = function (genre_ids) {
          return genre_ids.map(id => {
            const genreObject = genres.find(genre => genre.id === id);
            return genreObject ? genreObject.name : '';
          });
        };

        const genresNames = getMovieGenres(genre_ids);

        return (
          <li key={id}>
            <StyledMovieCardWrapper>
              <StyledMovieTitle>{title}</StyledMovieTitle>
              <StyledImgDescriptionWrapper>
                <StyledMovieOverview>{overview}</StyledMovieOverview>
                <StyledMovieImg
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
              </StyledImgDescriptionWrapper>
              <StyledMovieGenre>
                Genre: {genresNames.join(', ')}
              </StyledMovieGenre>

              <p>Release date: {release_date}</p>
            </StyledMovieCardWrapper>
          </li>
        );
      })}
    </StyledVideosList>
  );
};
