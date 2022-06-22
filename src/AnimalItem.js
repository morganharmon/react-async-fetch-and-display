
export default function AnimalItem({ animal }) {
  return (
    <div id="animal">
      <h3>{ animal.type }</h3>
      <p>This animal is of { animal.size } size and is { animal.speed } of speed.</p>
    </div>
  );
}