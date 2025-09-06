import axios from 'axios';

const API_BASE = 'http://localhost:5000/shorturls';

export const createShortUrl = async (payload) => {
  const response = await axios.post(API_BASE, payload);
  return response.data;
};

export const getShortUrlStats = async (shortcode) => {
  const response = await axios.get(`${API_BASE}/${shortcode}`);
  return response.data;
};
