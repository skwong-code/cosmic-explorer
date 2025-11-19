// src/utils/nasa.ts
export const fetchNasaData = async (endpoint: string, params: Record<string, string> = {}) => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  if (!apiKey || apiKey === 'DEMO_KEY') {
    console.warn('Using NASA DEMO_KEY – rate limited to 30 requests/hour');
  }

  const url = new URL(`https://api.nasa.gov/${endpoint}`);
  url.searchParams.append('api_key', apiKey);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

  const response = await fetch(url.toString());

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`NASA API error ${response.status}: ${errorText}`);
  }

  return response.json();
};