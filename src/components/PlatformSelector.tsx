import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface SelectedPlatformProp {
  onSelect: (platform: Platform) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelect, gameQuery }: SelectedPlatformProp) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery.platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
};

export default PlatformSelector;
