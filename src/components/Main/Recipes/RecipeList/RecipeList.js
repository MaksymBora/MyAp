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
  return (
    <StyledRecipesList>
      {recipes.map(item => {
        const { _id, title, category, preview, area, time, description } = item;
        return (
          <StyledRecipeCardItem key={_id}>
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
        );
      })}
    </StyledRecipesList>
  );
};
