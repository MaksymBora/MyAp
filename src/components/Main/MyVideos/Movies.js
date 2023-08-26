import { useEffect, useState } from 'react';
import { VideoList } from './MoviesList/MoviesList';
import { StyledVideosWrapper, StyledOpenVideosBtn } from './Movies.styled';
const { getMovies } = require('services/Movies-API');

export const MyVideos = () => {
  const [movies, setMovies] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };

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
      <StyledOpenVideosBtn
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        WHAT TO WATCH
      </StyledOpenVideosBtn>
      {isVisible && <VideoList movies={movies} />}
    </StyledVideosWrapper>
  );
};
