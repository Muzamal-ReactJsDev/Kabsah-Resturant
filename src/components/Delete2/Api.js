// api.js

export const deleteAccount = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API request
    setTimeout(() => {
      // Simulate a successful response after a delay
      resolve();
      // Simulate an error response after a delay
      // reject(new Error('Failed to delete account'));
    }, 2000);
  });
};
