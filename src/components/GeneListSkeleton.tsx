import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GeneListSkeleton = () => {
  return (
    <ul>
      <Skeleton>
        <SkeletonText />
      </Skeleton>
    </ul>
  );
};

export default GeneListSkeleton;
