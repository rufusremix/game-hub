import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={MdDarkMode} boxSize={6} />
    </HStack>
  );
};

export default ColorModeSwitch;
