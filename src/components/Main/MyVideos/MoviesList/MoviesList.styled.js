import styled from 'styled-components';

export const StyledVideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;
  padding: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

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

export const StyledMovieCardItem = styled.li`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    border-top: 1px solid rgb(20 158 202);
    border-bottom: 1px solid rgb(20 158 202);
    transition: all 200ms;
  }
`;

export const StyledImgDescriptionWrapper = styled.div`
  display: flex;
`;

export const StyledMovieOverview = styled.p`
  width: 50%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const StyledMovieImg = styled.img`
  width: 50%;
  margin-bottom: 12px;
  border-radius: 8px;
`;
export const StyledMovieTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const StyledMovieGenre = styled.p`
  margin-bottom: 12px;
`;
