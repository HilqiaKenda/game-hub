import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Prop {
  gameId: string;
}

const GameScreenshot = ({ gameId: gamePk }: Prop) => {
  const { data, isLoading, error } = useScreenshot(gamePk);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={2} marginY={5}>
      {data?.results.map((image) => (
        <Image key={image.id} src={image.image}></Image>
      ))}
    </SimpleGrid>
  );
};
export default GameScreenshot;
