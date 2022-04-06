import content from "./content/card.json";
import { sedans, suvs, luxury } from "./assets/media";
import { CardContent } from "./interfaces/interfaces";
import { AppContainer } from "./styles/App";
import Card from "./components/Card";

const { cards_content } = content;

const carImages = [sedans, suvs, luxury];

const App: React.FC = () => {
  const setCardContent = (item: CardContent): CardContent => {
    const cardContent = {
      id: item.id,
      car_name: item.car_name,
      car_description: item.car_description,
      car_image_alt: item.car_image_alt,
    };

    return cardContent;
  };

  return (
    <AppContainer>
      {cards_content.map((item, i) => (
        <Card content={setCardContent(item)} key={i} image={carImages[i]} />
      ))}
    </AppContainer>
  );
};

export default App;
