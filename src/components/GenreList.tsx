import { Genre } from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/imagUrl";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface SelectedGenreProp {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelected }: SelectedGenreProp) => {
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
            <Button
              variant="link"
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelected(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
