import { useState, useEffect } from 'react';
import { getWeb3ApiKey } from '@/utils/env';

/**
 * Example component showing how to securely use API keys
 * This is for demonstration purposes only
 */
const ApiKeyExample = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Only access environment variables after component mounts (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Example function that would use the API key
  const handleApiCall = async () => {
    try {
      const apiKey = getWeb3ApiKey();
      
      // Never log API keys in production code!
      // This is just for demonstration
      console.log('Using API key safely');
      
      // Example of how you would use the key in an API call
      // const response = await fetch('https://api.example.com/data', {
      //   headers: {
      //     'Authorization': `Bearer ${apiKey}`
      //   }
      // });
      
      // Handle the response...
      
    } catch (error) {
      console.error('API call failed:', error);
    }
  };
  
  return (
    <div className="api-example">
      <h3>API Integration Example</h3>
      {isClient && (
        <>
          <p>API key is properly configured: {getWeb3ApiKey() ? '✅' : '❌'}</p>
          <button 
            onClick={handleApiCall}
            className="button"
          >
            Make Secure API Call
          </button>
        </>
      )}
    </div>
  );
};

export default ApiKeyExample;
