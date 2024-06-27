import { useEffect, useState } from 'react';

export function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const api_url = "https://type.fit/api/quotes";

  useEffect(() => {
    async function getQuote(url:string) {
      try {
        const response = await fetch(url, {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }

    getQuote(api_url);
  }, []);

  return (
    <div className="quotes mx-auto">
      <blockquote>
        {quote ? quote : "Loading quote..."}
      </blockquote>
      <cite>{author ? author : "Unknown"}</cite>
    </div>
  );
}
