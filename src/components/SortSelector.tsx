import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} paddingX={5}>
          Order by: revelance
        </MenuButton>
        <MenuList>
          <MenuItem>item 1</MenuItem>
          <MenuItem>item 2</MenuItem>
          <MenuItem>item 3</MenuItem>
        </MenuList>
      </>
    </Menu>
  );
};

export default SortSelector;
