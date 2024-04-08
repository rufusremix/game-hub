import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  // The useGenre and usePlatform hooks fetches the Genre and platform object
  // when the respective id is passed

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
