import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const StyledBlockOfMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;
