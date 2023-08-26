import { StyledNewsCard } from './NewsCars.styled.js';
export const NewsCard = ({
  news: {
    title,
    image,
    source: { name },
  },
}) => {
  return (
    <StyledNewsCard>
      <div>
        <p>{title}</p>
        <img src={image} alt={title} />
        <p>source: {name}</p>
      </div>
    </StyledNewsCard>
  );
};
