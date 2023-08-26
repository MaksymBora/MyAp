import { StyledRecipeCard } from './RecipeCard.styled';
export const RecipeCard = ({ recipe: { title, preview, category } }) => {
  return (
    <StyledRecipeCard>
      <div>
        <p>{title}</p>
        <p>{category}</p>
      </div>

      <img src={preview} alt={title} />
    </StyledRecipeCard>
  );
};
