import styled from 'styled-components';

export const StyledBlockOfMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  outline: 1px solid green;
  margin-top: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
`;
