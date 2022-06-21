import { client } from './client';

export async function getPlanets() {
  const response = await client.from('Planets').select('*');
  return response.body;
}