import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/UseScreenshots";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
