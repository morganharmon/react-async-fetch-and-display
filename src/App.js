import './App.css';
// import your arrays here
import PlanetsList from './PlanetsList.js';
import { getPlanets } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';


function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanetsData() {
      const data = await getPlanets();
      setPlanets(data);
    }
    fetchPlanetsData();
  }, []);

  return (
    <div className="App">
      <PlanetsList planets={ planets } />
    </div>
  );
}

export default App;
