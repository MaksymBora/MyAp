import { VideoCard } from '../VideoCard/VideoCard';
import { StyledVideosList } from './VideoList.styled';

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
