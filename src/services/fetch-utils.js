import { client } from './client.js';

export async function getShows() {
  const response = await client 
    .from('shows')
    .select('*');

  return response.body;
}

export async function getStars() {
  const response = await client 
    .from('stars')
    .select('*');
  
  return response.body;
}

export async function getHosts() {
  const response = await client 
    .from('hosts')
    .select('*');

  return response.body;
}

export async function getGenres(){
  const response = await client 
    .from('genres')
    .select('*');
    
  return response.body;
}