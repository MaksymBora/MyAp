import React, { useState, useEffect } from 'react';
import quotes from '../../../data/quotes.json';

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
    }, 30000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h2>Цитата Мого дня </h2>
      <div>
        <p>{quote}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};
