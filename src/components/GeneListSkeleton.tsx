import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GeneListSkeleton = () => {
  return (
    <ul>
      <Skeleton borderRadius={10} overflow="hidden">
        <List
          paddingY="5px"
          marginBottom="20px"
          borderRadius={3}
          overflow="hidden"
          // height="40px"
        ></List>
        <SkeletonText />
      </Skeleton>
    </ul>
  );
};

export default GeneListSkeleton;
