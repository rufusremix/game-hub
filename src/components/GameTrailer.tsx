import { Box } from "@chakra-ui/react";
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
    <Box marginBottom={5}>
      <video
        src={firstVideoSourceLink}
        poster={firstTrailer.preview}
        controls
      />
    </Box>
  );
};

export default GameTrailer;
