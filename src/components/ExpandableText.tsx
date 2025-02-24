import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface TextProps {
  children: string;
}

const ExpandableText = ({ children }: TextProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxChar = 300;

  if (!children) return null;

  if (children.length <= maxChar) return <Text>{children}</Text>;
  const sumarizeText = isExpanded
    ? children
    : children.substring(0, maxChar) + "...";

  return (
    <Text>
      {sumarizeText}
      <Button
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
