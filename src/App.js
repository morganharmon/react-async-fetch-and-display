import './App.css';
// import your arrays here
import { getPlanets, getAnimals, getCars } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';
import PlanetsList from './PlanetsList.js';
import AnimalsList from './AnimalsList.js';
import CarsList from './CarsList.js';

function App() {
  const [planets, setPlanets] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [cars, setCars] = useState([]);

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
  
  useEffect(() => {
    async function fetchCarsData() {
      const data = await getCars();
      setCars(data);
    }
    fetchCarsData();
  }, []);
  
  return (
    <div className="App">
      <PlanetsList planets={ planets } />
      <AnimalsList animals={ animals } />
      <CarsList cars={ cars } />
    </div>
  );
}

export default App;
