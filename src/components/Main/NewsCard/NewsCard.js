export const NewsCard = ({ news: item }) => {
  return (
    <li>
      <div>
        <p>{item.title}</p>
        <img src={item.image} alt={item.title} />
        <p>Author: {item.author}</p>
        <p>source: {item.source.name}</p>
      </div>
    </li>
  );
};
