export default function CarItem({ car }) {
  return (
    <div>
      Here is a { car.year } { car.make } { car.model }, enjoy!
      <br></br>
      <img src={`/${car.model}.jpg`} />
    </div>
  );
}
