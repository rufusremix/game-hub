// Takes a Platform Id and returns the respective Platform Object

import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default usePlatform;
