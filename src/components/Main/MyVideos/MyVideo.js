import { useEffect, useState } from 'react';
import { VideoList } from './VideoList/VideoList';
const { getMovies, getGenres } = require('services/Videos-API');

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
    <div>
      <h2>My Videos</h2>
      <VideoList movies={movies} />
    </div>
  );
};
