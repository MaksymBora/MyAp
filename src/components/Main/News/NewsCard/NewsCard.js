export const NewsCard = ({
  news: {
    title,
    image,
    source: { name },
  },
}) => {
  return (
    <li>
      <div>
        <p>{title}</p>
        <img src={image} alt={title} />
        <p>source: {name}</p>
      </div>
    </li>
  );
};
