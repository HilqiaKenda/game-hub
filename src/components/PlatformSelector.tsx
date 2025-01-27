import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";
import useData from "../hooks/useData";
import usePlatforms, { Platform } from "../hooks/usePlatform";

export interface SelectedPlatformProp {
  onSelect: (platform: Platform) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelect, gameQuery }: SelectedPlatformProp) => {
  const { data, error } = usePlatforms();

  const platforms = useData(gameQuery.platformId);

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
