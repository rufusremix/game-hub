import { Button, Heading, HStack, Image, List, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setselectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return null;

  return (
    <>
      <Heading as="h1" fontSize="2xl" marginY={3}>
        Genres
      </Heading>

      {isLoading && (
        <Stack>
          {skeletons.map((skeleton) => (
            <Skeleton key={skeleton} borderRadius={4} height="30px" marginBottom={2} />
          ))}
        </Stack>
      )}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              ></Image>
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => setselectedGenreId(genre.id)}
                variant="link"
                textAlign="left"
                whiteSpace="normal"
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
