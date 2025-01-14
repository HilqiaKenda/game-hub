import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/imagUrl";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {/* {isLoading && skeletons.map((skel) => <GenreListSkeleton key={skel} />)} */}
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
