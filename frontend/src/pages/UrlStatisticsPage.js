import React, { useState } from 'react';
import { getShortUrlStats } from '../api/shorturl.api';
import UrlStats from '../components/UrlStats';
import { logAction, handleError } from '../components/Logger';

const UrlStatisticsPage = () => {
  const [shortcode, setShortcode] = useState('');
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      logAction('fetch_stats', shortcode);
      const data = await getShortUrlStats(shortcode);
      setStats(data);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div>
      <h1>URL Statistics</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <button type="submit">Fetch Stats</button>
      </form>

      {stats && <UrlStats stats={stats} />}
    </div>
  );
};

export default UrlStatisticsPage;
