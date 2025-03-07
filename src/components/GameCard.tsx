import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import getCropedImage from "../services/imagUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconsList from "./PlatformIconsList";
import { Link } from "react-router-dom";

interface CardProps {
  game: Game;
}

const GameCard = ({ game }: CardProps) => {
  return (
    <Card>
      <Link to={"/games/" + game.slug}>
        <Image src={getCropedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
