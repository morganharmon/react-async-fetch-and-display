import JuiceItem from './JuiceItem.js';

export default function JuicesList({ juices }) {
  return (
    <div id='juices'>
      {
        juices.map((juice, i) => <JuiceItem key={juice.type + i} juice={ juice } />)
      }
    </div>
  );
}
