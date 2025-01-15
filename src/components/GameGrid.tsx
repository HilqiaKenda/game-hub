import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardskeleton from "./GameCardskeleton";
import GameContainer from "./GameContainer";
import { GameQuery } from "../App";

interface selectGenreProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: selectGenreProps) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={5}
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
  );
};

export default GameGrid;
