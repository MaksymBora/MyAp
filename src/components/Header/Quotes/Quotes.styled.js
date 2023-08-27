import styled from 'styled-components';

export const StyledQuotesWrapper = styled.div`
  border-top: 1px solid orange;
  border-bottom: 1px solid orange;
  border-radius: 12px;
  padding: 14px;
`;

export const StyledQuote = styled.p`
  font-size: 18px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const StyledQuoteAuthorWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledQuoteAuthor = styled.p`
  font-style: italic;
  @media (min-width: 768px) {
    margin-right: 50px;
    font-size: 18px;
  }
`;
