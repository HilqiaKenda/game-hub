import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImage from "../services/imagUrl";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface SelectedGenreProp {
  onSelected: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelected }: SelectedGenreProp) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* {isLoading && skeletons.map((skel) => <GenreListSkeleton key={skel} />)} */}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                height="40px"
                borderRadius={3}
                overflow="hidden"
                src={getCropedImage(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelected(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
