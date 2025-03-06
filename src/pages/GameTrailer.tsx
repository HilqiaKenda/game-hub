import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  //   console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  const video = data?.results[gameId];
  if (!video) return null;

  return video ? (
    <video src={video?.data[480]} poster={video?.preview} controls />
  ) : null;
};

export default GameTrailer;
