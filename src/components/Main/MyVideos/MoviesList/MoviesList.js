import { VideoCard } from '../MovieCard/MovieCard';
import { StyledVideosList } from './MoviesList.styled';

export const VideoList = ({ movies }) => {
  return (
    <>
      <StyledVideosList>
        {movies.map(item => {
          return <VideoCard key={item.id} movies={item} />;
        })}
      </StyledVideosList>
    </>
  );
};
