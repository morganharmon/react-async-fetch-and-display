export default function JuiceItem({ juice }) {
  return (
    <div>
      { juice.type } juice is { juice.color } and full of { juice.vitamins }!
    </div>
  );
}
