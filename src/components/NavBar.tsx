import { HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const navigate = useNavigate();
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        objectFit="cover"
        minWidth="50px"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => {
          resetGameQuery();
          navigate("/");
        }}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
