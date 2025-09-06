// Simple frontend error handling middleware
const errorHandler = (error) => {
  console.error(`[Frontend Error] ${new Date().toISOString()} |`, error);
  alert(error.message || 'An unexpected error occurred.');
};

export default errorHandler;