import useGenres from "../hooks/useGenres";
import GeneListSkeleton from "./GeneListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ul>
      {isLoading && skeletons.map((skel) => <GeneListSkeleton key={skel} />)}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
