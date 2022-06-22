export default function PlanetItem({ planet }) {
  return (
    <div id="planet">
      <h3>{ planet.name }</h3>
      <ul>
        <li>This is the { planet.position }th planet from the sun.</li>
        <li>Its rotation is { planet.spin }!</li>
      </ul>
    </div>
  );
}