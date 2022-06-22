import './App.css';
// import your arrays here
import PlanetsList from './PlanetsList.js';
import { getPlanets, getAnimals } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';
import AnimalsList from './AnimalsList.js';

function App() {
  const [planets, setPlanets] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    async function fetchPlanetsData() {
      const data = await getPlanets();
      setPlanets(data);
    }
    fetchPlanetsData();
  }, []);

  useEffect(() => {
    async function fetchAnimalsData() {
      const data = await getAnimals();
      setAnimals(data);
    }
    fetchAnimalsData();
  }, []);

  return (
    <div className="App">
      <PlanetsList planets={ planets } />
      <AnimalsList animals={ animals } />
    </div>
  );
}

export default App;
