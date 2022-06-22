import CarItem from './CarItem.js';

export default function CarsList({ cars }) {
  return (
    <div id='cars'>
      {
        cars.map((car, i) => <CarItem key={car.make + car.model + i} car={ car } />)
      }
    </div>
  );
}
