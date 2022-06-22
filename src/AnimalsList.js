import AnimalItem from './AnimalItem.js';

export default function AnimalsList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <AnimalItem key={animal.type + i} animal={ animal } />)
      }
    </div>
  );
}