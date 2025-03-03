import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ItemProp {
  terms: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItems = ({ terms, children }: ItemProp) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray">
        {terms}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItems;
