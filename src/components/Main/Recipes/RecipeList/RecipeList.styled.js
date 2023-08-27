import styled from 'styled-components';

export const StyledRecipesList = styled.ul`
  height: 100vh;
  margin-top: 20px;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(20 158 202);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  scrollbar-width: thin;
  scrollbar-color: rgb(20 158 202) transparent;
`;

export const StyledRecipeCardItem = styled.li`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
`;

export const StyledDishHeader = styled.div`
  display: flex;

  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const StyledDishOverviewWrapper = styled.div`
  display: flex;
`;

export const StyledDishOverview = styled.div`
  margin-right: 18px;
  width: 50%;
`;

export const StyledDishTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const StyledDishCategory = styled.p`
  font-style: italic;
  color: orange;
`;

export const StyledDishDescription = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StyledDishArea = styled.p`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 18px;
`;

export const StyledDishCookingTime = styled.p`
  font-size: 18px;
`;

export const StyledColoredSpan = styled.span`
  color: orange;
`;
export const StyledDishImg = styled.img`
  width: 50%;
  border-radius: 12px;
`;
