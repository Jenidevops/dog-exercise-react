import dog1 from './images/dog1.jpeg';
import dog2 from './images/dog2.jpeg';
import dog3 from './images/dog3.jpeg';
import dog4 from './images/dog4.jpeg';
import dog5 from './images/dog5.jpeg';
import dog6 from './images/dog6.jpeg';
import dog7 from './images/dog7.jpeg';
import dog8 from './images/dog8.jpeg';

const dogData = [
  { image: dog1, caption: "Julie's Rabbit Ears" },
  { image: dog2, caption: "The Innocent Look" },
  { image: dog3, caption: "Big Eyed Buggy" },
  { image: dog4, caption: "The Saint Doggo" },
  { image: dog5, caption: "Big Eyed Buggy" },
  { image: dog6, caption: "The Innocent Look" },
  { image: dog7, caption: "The Saint Doggo" },
  { image: dog8, caption: "Julie's Rabbit Ears" },
];

function DogGrid({ dogs }) {
  return (
    <div
      className="w-full max-w-screen-lg grid gap-1 justify-items-center"
      style={{
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {dogs.map((dog, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={dog.image}
            alt={dog.caption}
            className="object-cover"
            style={{ width: '150px', height: '150px', objectPosition: 'center center' }}
          />
          <p className="text-center mt-2">{dog.caption}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DogGrid dogs={dogData} />
    </div>
  );
}

export default App;
