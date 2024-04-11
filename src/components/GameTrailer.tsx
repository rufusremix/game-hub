import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  if (!firstTrailer) return null;

  const firstVideoSourceLink = firstTrailer
    ? firstTrailer.data[480]
    : undefined;

  return (
    <video src={firstVideoSourceLink} poster={firstTrailer.preview} controls />
  );
};

export default GameTrailer;
