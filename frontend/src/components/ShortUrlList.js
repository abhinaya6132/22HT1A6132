import React from 'react';

const ShortUrlList = ({ urls }) => {
  return (
    <div>
      <h3>Shortened URLs</h3>
      <ul>
        {urls.map((url, i) => (
          <li key={i}>
            <a href={url.shortLink} target="_blank" rel="noopener noreferrer">{url.shortLink}</a> - Expiry: {new Date(url.expiry).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortUrlList;
