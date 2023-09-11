import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { VideoList } from './MoviesList/MoviesList';
import { StyledVideosWrapper } from './Movies.styled';
const { getMovies } = require('services/Movies-API');

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
      <VideoList movies={movies} />
    </StyledVideosWrapper>
  );
};
