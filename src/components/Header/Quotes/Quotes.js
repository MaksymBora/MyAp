import React, { useState, useEffect } from 'react';
import quotes from '../../../data/quotes.json';
import { StyledQuotesWrapper, StyledQuote } from './Quotes.styled';

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuote);
  const { quote, author } = randomQuote;

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomQuote(getRandomQuote);
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <StyledQuotesWrapper>
      <div>
        <StyledQuote>{quote}</StyledQuote>
        <p>{author}</p>
      </div>
    </StyledQuotesWrapper>
  );
};
