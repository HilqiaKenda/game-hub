import { Image, ImageProps } from "@chakra-ui/react";
// import { BiBullseye } from "react-icons/bi";
import bullsEye from "../assets/bulls-eye.webp";
// import { FaThumbsUp } from 'react-icons/fa';
import thumbsUp from "../assets/thumbs-up.webp";
// import { BiMeh } from 'react-icons/bi';
import meh from "../assets/meh.webp";

interface EmojiProp {
  rating: number;
}

const Emoji = ({ rating }: EmojiProp) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommanded", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
