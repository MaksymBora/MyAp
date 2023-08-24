import { useEffect } from 'react';
import { getNews } from 'services/NewsApi';

export const NewsBlock = () => {
  useEffect(() => {
    getNews();
  }, []);

  return <div>test</div>;
};
