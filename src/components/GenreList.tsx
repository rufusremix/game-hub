import { Button, Heading, HStack, Image, List, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
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
