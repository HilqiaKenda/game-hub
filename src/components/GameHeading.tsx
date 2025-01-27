import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useData from "../hooks/useData";

interface GameHeadingProp {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProp) => {
  const genre = useData(gameQuery.genreId);
  const platforms = useData(gameQuery.platformId);

  const heanding = `${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heanding}
    </Heading>
  );
};

export default GameHeading;
