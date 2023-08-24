import styled from 'styled-components';

export const StyledNewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
