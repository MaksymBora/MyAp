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
    margin-left: 350px;
    font-size: 24px;
  }
`;

export const StyledQuoteAuthorWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledQuoteAuthor = styled.p`
  font-style: italic;
  @media (min-width: 768px) {
    margin-right: 350px;
    font-size: 18px;
  }
`;
