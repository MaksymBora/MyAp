import { VideoCard } from '../VideoCard/VideoCard';

export const VideoList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(item => {
          return <VideoCard key={item.id} movies={item} />;
        })}
      </ul>
    </>
  );
};
