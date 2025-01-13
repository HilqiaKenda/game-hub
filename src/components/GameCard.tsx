import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/react";

interface CardProps {
  game: Game;
}

const GameCard = ({ game }: CardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
