import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCropedImage from "../services/imagUrl";

interface CardProps {
  game: Game;
}

const GameCard = ({ game }: CardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={getCropedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
