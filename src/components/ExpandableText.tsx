import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);

  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const description = isExpanded
    ? children
    : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {description}{" "}
        <Button
          size="xs"
          colorScheme="blue"
          onClick={() => {
            setisExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
