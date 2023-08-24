import { NewsCard } from '../NewsCard/NewsCard';
import { StyledNewsList } from './NewsList.styled';

export const NewSList = ({ news }) => {
  return (
    <StyledNewsList>
      {news.map(item => {
        return <NewsCard key={item.title} news={item} />;
      })}
    </StyledNewsList>
  );
};
