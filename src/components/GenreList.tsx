import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/imagUrl";
import GeneListSkeleton from "./GeneListSkeleton";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List>
      {isLoading && skeletons.map((skel) => <GeneListSkeleton key={skel} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              height="40px"
              borderRadius={3}
              overflow="hidden"
              src={getCropedImage(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
