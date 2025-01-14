import { BsChevronDown } from "react-icons/bs";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
          {/* {data.map(platform => platform.name ? <Text>{platform.name}</Text>: <Text>Platforms</Text>)} */}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
};

export default PlatformSelector;
