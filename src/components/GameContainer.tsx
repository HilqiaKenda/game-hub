import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
}

const GameContainer = ({ children }: ContainerProp) => {
  return (
    <Box
      _hover={{
        transform: "scale(5}",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameContainer;
