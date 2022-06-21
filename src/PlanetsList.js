import PlanetItem from './PlanetItem.js';

export default function PlanetsList({ planets }) {
  return (
    <div>
      {
        planets.map((planet, i) => <PlanetItem key={ planet.name + i + planet.position } planet={ planet } />)
      }
    </div>
  );
}