import { useEffect, useState } from 'react';
import { getNews } from 'services/News-Api';
import { NewSList } from './NewsList/NewsList';

import { StyledNewsWrapper, StyledOpenNewsBtn } from './News.styled';

export const News = () => {
  const [news, setNews] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <StyledNewsWrapper>
      <StyledOpenNewsBtn
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        NEWS
      </StyledOpenNewsBtn>
      {isVisible && (
        <div>
          <NewSList news={news} />
        </div>
      )}
    </StyledNewsWrapper>
  );
};
