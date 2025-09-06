import { createContext } from 'react';

export const UrlContext = createContext({
  urls: [],
  addUrl: () => {}
});
