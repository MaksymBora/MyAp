import styled from 'styled-components';

export const StyledNewsWrapper = styled.div`
  outline: 1px solid orange;
  height: 600px;
  margin-top: 20px;
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
