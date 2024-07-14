export const fetchWithExponentialBackoff = async (url, options = {}, retries = 5, delay = 1000) => {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : delay;
  
        if (retries > 0) {
          console.warn(`Rate limited. Retrying after ${waitTime} ms...`);
          await new Promise(res => setTimeout(res, waitTime));
          return fetchWithExponentialBackoff(url, options, retries - 1, delay * 2);
        } else {
          throw new Error('Exceeded maximum retries');
        }
      }
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Fetch failed:', error);
      throw error;
    }
  };
  