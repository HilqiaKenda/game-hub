import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";

interface SelectedPlatformProp {
  onSelect: (platform: Platform) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelect, gameQuery }: SelectedPlatformProp) => {
  const { data, error } = usePlatforms();
  const platforms = data?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  if (error) return null;
  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platforms?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
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
