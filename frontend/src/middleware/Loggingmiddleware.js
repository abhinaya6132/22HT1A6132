// Simple frontend logging middleware
const loggingMiddleware = (action, data) => {
  console.log(`[Frontend] ${new Date().toISOString()} | Action: ${action} | Data:`, data);
};

export default loggingMiddleware;
