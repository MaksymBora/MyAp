import { RecipeCard } from '../RecipeCard/RecipeCard';

import { StyledRecipesList } from './RecipeList.styled';
export const RecipeList = ({ recipes }) => {
  return (
    <>
      <StyledRecipesList>
        {recipes.map(item => {
          return <RecipeCard key={item._id} recipe={item}></RecipeCard>;
        })}
      </StyledRecipesList>
    </>
  );
};
