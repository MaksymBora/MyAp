import { useEffect, useState } from 'react';
import { getRecipes } from 'services/Recipes-API';
import { RecipeList } from './RecipeList/RecipeList';
import { StyledRecipesWrapper, StyledOpenRecipeBtn } from './Recipes.styled';
export const Recipes = () => {
  const [recipe, setRecipes] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickBtn = () => {
    setIsVisible(prev => !prev);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await getRecipes();
        setRecipes(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <StyledRecipesWrapper>
      <StyledOpenRecipeBtn
        type="button"
        onClick={() => {
          handleClickBtn();
        }}
      >
        RECIPES
      </StyledOpenRecipeBtn>

      {isVisible && <RecipeList recipes={recipe}></RecipeList>}
    </StyledRecipesWrapper>
  );
};
