import loggingMiddleware from '../middleware/Loggingmiddleware';
import errorHandler from '../middleware/errorHandler';

export const logAction = (action, data) => {
  loggingMiddleware(action, data);
};

export const handleError = (error) => {
  errorHandler(error);
};
