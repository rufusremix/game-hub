import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading>Oops, Error!!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The Page you are looking is not available"
            : "Something Unexpected happened"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
