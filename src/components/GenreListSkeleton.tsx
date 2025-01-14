import { List, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ul>
      <Skeleton borderRadius={10} overflow="hidden">
        <List
          paddingY="5px"
          marginBottom="20px"
          borderRadius={3}
          overflow="hidden"
        ></List>
        <SkeletonText />
      </Skeleton>
    </ul>
  );
};

export default GenreListSkeleton;
