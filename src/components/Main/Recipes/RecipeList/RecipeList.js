import { useState } from 'react';
import { RecipeModal } from '../RecipeModal/RecipeModal';
import {
  StyledRecipesList,
  StyledRecipeCardItem,
  StyledDishHeader,
  StyledDishOverviewWrapper,
  StyledDishOverview,
  StyledDishTitle,
  StyledDishDescription,
  StyledDishCategory,
  StyledDishImg,
  StyledDishCookingTime,
  StyledDishArea,
  StyledColoredSpan,
} from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <StyledRecipesList>
      {recipes.map(item => {
        const { _id, title, category, preview, area, time, description } = item;
        return (
          <div key={_id}>
            <StyledRecipeCardItem
              onClick={() => {
                if (!isModalOpen) {
                  setIsModalOpen(true);
                  setSelectedRecipe(item);
                }
              }}
            >
              <StyledDishHeader>
                <StyledDishCategory>{category}</StyledDishCategory>
              </StyledDishHeader>

              <StyledDishOverviewWrapper>
                <StyledDishOverview>
                  <StyledDishTitle>{title}</StyledDishTitle>

                  <StyledDishDescription>{description}</StyledDishDescription>
                  <StyledDishArea>
                    Area: <b>{area}</b>
                  </StyledDishArea>
                  <StyledDishCookingTime>
                    {' '}
                    cooking time:
                    <StyledColoredSpan> {time} minutes </StyledColoredSpan>
                  </StyledDishCookingTime>
                </StyledDishOverview>
                <StyledDishImg src={preview} alt={title} />
              </StyledDishOverviewWrapper>
            </StyledRecipeCardItem>
          </div>
        );
      })}
      {selectedRecipe && (
        <RecipeModal
          isOpen={isModalOpen}
          onRequestClose={() => {
            setIsModalOpen(false);
            setSelectedRecipe(null);
          }}
          recipe={selectedRecipe}
        />
      )}
    </StyledRecipesList>
  );
};
