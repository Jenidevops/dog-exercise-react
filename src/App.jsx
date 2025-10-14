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
    <div className="container mx-auto max-w-5xl px-4">
      <div className="bg-white border-2 border-gray-300 p-8">
        <div className="grid grid-cols-2 min-[800px]:grid-cols-4 gap-4 min-[800px]:gap-6">
          {dogs.map((dog, index) => (
            <div 
              key={index} 
              className="border-2 border-gray-400 p-3 min-[800px]:p-4 bg-white flex flex-col items-center w-full max-w-[180px] mx-auto"
            >
              <div className="w-full aspect-square mb-3 min-[800px]:mb-4 border border-gray-300">
                <img
                  src={dog.image}
                  alt={dog.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs min-[800px]:text-sm font-medium text-gray-800 leading-tight">
                {dog.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
          Dog Gallery - React Components & Props Exercise
        </h1>
        <DogGrid dogs={dogData} />
      </div>
    </div>
  );
}

export default App;
