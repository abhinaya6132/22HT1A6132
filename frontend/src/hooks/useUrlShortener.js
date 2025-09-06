import { useState } from 'react';
import { createShortUrl } from '../api/shorturl.api';

export const useUrlShortener = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const shortenUrls = async (urls) => {
    setLoading(true);
    try {
      const promises = urls.map(url => createShortUrl(url));
      const data = await Promise.all(promises);
      setResults(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, shortenUrls };
};

