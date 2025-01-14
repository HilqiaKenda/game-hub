import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardskeleton from "./GameCardskeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../hooks/useData";

interface selectGenreProps {
  onSelected: Genre | null;
}

const GameGrid = ({ onSelected }: selectGenreProps) => {
  const { data, error, isLoading } = useGames(onSelected);

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
