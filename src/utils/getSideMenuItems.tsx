import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { menuItems } from "../constants/menu";

const getSideMenuItems = (): ItemType<MenuItemType>[] => {
    return menuItems.map(item => {
        const { label, key, icon: Icon } = item;
        return {
            key,
            icon: <Icon />,
            label
        };
    });
};

export default getSideMenuItems;
