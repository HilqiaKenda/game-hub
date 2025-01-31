import { Heading } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGameQueryStore from "../srores/GameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((selector) => selector.gameQuery.genreId);
  const genre = useData(genreId);

  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platforms = useData(platformId);

  const heanding = `${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heanding}
    </Heading>
  );
};

export default GameHeading;
