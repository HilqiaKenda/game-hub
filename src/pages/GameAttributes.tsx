import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "../components/CriticScore";
import { Game } from "../entities/Game";
import DefinitionItems from "./DefinitionItems";

interface Attribute {
  game: Game;
}

const GameAttributes = ({ game }: Attribute) => {
  return (
    <>
      <SimpleGrid columns={2}>
        <DefinitionItems terms="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItems>
        <DefinitionItems terms="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItems>
        <DefinitionItems terms="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItems>
        <DefinitionItems terms="Publishers">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItems>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
