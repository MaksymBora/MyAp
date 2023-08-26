import { useEffect, useState } from 'react';
import { VideoList } from './VideoList/VideoList';
import { StyledVideosWrapper } from './Videos.styled';
const { getMovies } = require('services/Videos-API');

export const MyVideos = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <StyledVideosWrapper>
      <h2>My Videos</h2>
      <div>
        <VideoList movies={movies} />
      </div>
    </StyledVideosWrapper>
  );
};
