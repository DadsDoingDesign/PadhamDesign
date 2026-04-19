/**
 * Utility functions for accessing environment variables
 */

/**
 * Gets an environment variable with validation
 * @param {string} key - The environment variable key
 * @param {boolean} isRequired - Whether the variable is required
 * @param {string} defaultValue - Default value if not required and not found
 * @returns {string} The environment variable value
 */
export const getEnvVariable = (key, isRequired = true, defaultValue = '') => {
  const value = process.env[key];
  
  if (!value && isRequired) {
    console.warn(`Environment variable ${key} is not set but is required`);
    return '';
  }
  
  return value || defaultValue;
};

/**
 * Gets the Web3 API key from environment variables
 * @returns {string} The Web3 API key
 */
export const getWeb3ApiKey = () => {
  return process.env.NEXT_PUBLIC_WEB3_API_KEY || '';
};

/**
 * Checks if we're in a production environment
 * @returns {boolean} True if in production
 */
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};
