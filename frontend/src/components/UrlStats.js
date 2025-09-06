import React from 'react';

const UrlStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div>
      <h3>Statistics for {stats.shortcode}</h3>
      <p>Original URL: {stats.originalUrl}</p>
      <p>Created At: {new Date(stats.createdAt).toLocaleString()}</p>
      <p>Expiry: {new Date(stats.expiry).toLocaleString()}</p>
      <p>Total Clicks: {stats.clicks.length}</p>
      <ul>
        {stats.clicks.map((click, i) => (
          <li key={i}>
            {new Date(click.timestamp).toLocaleString()} - {click.referrer} - {click.geo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlStats;
