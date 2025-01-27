import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface GameHeadingProp {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const heanding = `${gameQuery.platformId || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heanding}
    </Heading>
  );
};

export default GameHeading;
