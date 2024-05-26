import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { menuItems } from "../constants/menu";

const getSideMenuItems = ({
    selectedItem
}: {
    selectedItem: string;
}): ItemType<MenuItemType>[] => {
    return menuItems.map(item => {
        const { label, key, icon: Icon } = item;
        const isSelected = key === selectedItem;
        return {
            key,
            icon: <Icon isSelected={isSelected} />,
            label
        };
    });
};

export default getSideMenuItems;
