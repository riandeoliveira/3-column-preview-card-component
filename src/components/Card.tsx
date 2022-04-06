import content from "../content/card.json";
import { CardProps } from "../interfaces/interfaces";
import {
  CardContainer,
  CarContent,
  CarImage,
  CarName,
  CarDescription,
  Button,
} from "../styles/Card";

const { button_text } = content;

const Card: React.FC<CardProps> = ({ content, image }) => {
  const { id, car_image_alt, car_name, car_description } = content;

  return (
    <CardContainer className={`card-${id}`}>
      <CarContent>
        <CarImage alt={car_image_alt} src={image} />
        <CarName>{car_name}</CarName>
        <CarDescription>{car_description}</CarDescription>
      </CarContent>
      <Button className={`btn-${id}`}>{button_text}</Button>
    </CardContainer>
  );
};

export default Card;
