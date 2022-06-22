import AnimalItem from './AnimalItem.js';

export default function AnimalsList({ animals }) {
  return (
    <div id='animals'>
      {
        animals.map((animal, i) => <AnimalItem key={animal.type + i} animal={ animal } />)
      }
    </div>
  );
}