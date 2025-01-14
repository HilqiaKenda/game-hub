import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
}

const GameContainer = ({ children }: ContainerProp) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameContainer;
