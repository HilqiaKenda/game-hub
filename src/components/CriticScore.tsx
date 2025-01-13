import { Badge } from "@chakra-ui/react";

interface CriticScoreProp {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProp) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="20px"
      paddingX="15px"
      borderRadius="5px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

interface CriticScoreProp {
  score: number;
}

export default CriticScore;
