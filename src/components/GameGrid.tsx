import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardskeleton from "./GameCardskeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../hooks/useData";

interface selectGenreProps {
  onSelected: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedPlatform, onSelected }: selectGenreProps) => {
  const { data, error, isLoading } = useGames(onSelected, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {" "}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameContainer key={skeleton}>
              <GameCardskeleton />
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer key={game.id}>
            <GameCard game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
