import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchProps {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack marginBottom={5}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
