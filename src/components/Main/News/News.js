import { useEffect, useState } from 'react';
import { getNews } from 'services/NewsApi';
import { NewSList } from './NewsList/NewsList';

import { StyledNewsWrapper } from './News.styled';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <StyledNewsWrapper>
      <h2>NEWS</h2>
      <div>
        {' '}
        <NewSList news={news} />
      </div>
    </StyledNewsWrapper>
  );
};
