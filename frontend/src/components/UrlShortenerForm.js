import React, { useState } from 'react';
import { useUrlShortener } from '../hooks/useUrlShortener';
import { logAction, handleError } from './Logger';

const UrlShortenerForm = () => {
  const [urls, setUrls] = useState([{ url: '', validity: '', shortcode: '' }]);
  const { results, loading, shortenUrls } = useUrlShortener();

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      logAction('submit_urls', urls);
      await shortenUrls(urls);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {urls.map((input, i) => (
          <div key={i}>
            <input
              placeholder="URL"
              value={input.url}
              onChange={(e) => handleChange(i, 'url', e.target.value)}
            />
            <input
              placeholder="Validity (min)"
              value={input.validity}
              onChange={(e) => handleChange(i, 'validity', e.target.value)}
            />
            <input
              placeholder="Shortcode"
              value={input.shortcode}
              onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
            />
          </div>
        ))}
        <button type="submit">{loading ? 'Processing...' : 'Shorten URLs'}</button>
      </form>

      {results.length > 0 && (
        <div>
          <h3>Shortened URLs:</h3>
          <ul>
            {results.map((r, i) => (
              <li key={i}>
                <a href={r.shortLink} target="_blank" rel="noopener noreferrer">{r.shortLink}</a> - Expiry: {new Date(r.expiry).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;

