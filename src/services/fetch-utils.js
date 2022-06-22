import { client } from './client';

export async function getPlanets() {
  const response = await client.from('Planets').select('*');
  return response.body;
}

export async function getAnimals() {
  const response = await client.from('Animals').select('*');
  return response.body;
}

export async function getCars() {
  const response = await client.from('Cars').select('*');
  return response.body;
}