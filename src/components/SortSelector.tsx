import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../srores/GameQueryStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Aveage Rating" },
  ];

  const setSortOrder = useGameQueryStore((selector) => selector.setSortOrder);
  const sortOrder = useGameQueryStore((select) => select.gameQuery.sortOrder);
  const currentOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} paddingX={5}>
          Order by: {currentOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => setSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
};

export default SortSelector;
