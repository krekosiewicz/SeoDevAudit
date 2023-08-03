import { SeoToolConfig } from 'src/app/api/types';

export const fetchSeoToolConfig = async (): Promise<SeoToolConfig> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/config`);
  
  if (!res.ok) {
    throw new Error('HTTP error ' + res.status);
  }
  
  const data = await res.json();
  return data;
};
