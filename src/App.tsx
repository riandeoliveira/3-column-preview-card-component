import AppBox from "./styles/App";
import cars from "./content/cars.json";
import images from "./assets/media";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      {cars.map((car, i) => (
        <div className={`card-${i + 1}`} key={i}>
          <div>
            <img alt={car.alt} src={images[i]} />
            <h1>{car.name}</h1>
            <p>{car.description}</p>
          </div>
          <button>Learn More</button>
        </div>
      ))}
    </AppBox>
  );
};

export default App;
