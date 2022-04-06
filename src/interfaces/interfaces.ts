export interface CardContent {
  car_description: string;
  car_image_alt: string;
  car_name: string;
  id: number;
}

export interface CardProps {
  content: CardContent;
  image: string;
  key: number;
}
