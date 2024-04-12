// Takes a Genre Id and returns the respective Genre Object

import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => genre.id === id);
};

export default useGenre;
