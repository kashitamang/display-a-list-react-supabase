import { client } from './client.js';

export async function getShows() {
  const response = await client 
    .from('shows')
    .select('*');

  return response.body;
}