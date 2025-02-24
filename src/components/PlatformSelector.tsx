import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import useGameQueryStore from "../stores/GameQueryStore";
import useData from "../hooks/useData";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  // const platforms = useGameQueryStore((select) => select.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((selector) => selector.setPlatformId);
  const selectedPlatform = useGameQueryStore(
    (selec) => selec.gameQuery.platformId
  );
  const platforms = useData(selectedPlatform);

  if (error) return null;
  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platforms?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
};

export default PlatformSelector;
