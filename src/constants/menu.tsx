import { UserOutlined } from "@ant-design/icons";

import homeIcon from "../assets/home.svg";
import cardsIcon from "../assets/cards.svg";
import paymentsIcon from "../assets/payments.svg";
import creditIcon from "../assets/credit.svg";
import userIcon from "../assets/user.svg";

export const menuItems = [
    {
        label: "Home",
        key: "home",
        icon: () => <img src={homeIcon} alt="flight-icon" />
    },
    {
        label: "Cards",
        key: "cards",
        icon: () => <img src={cardsIcon} alt="flight-icon" />
    },
    {
        label: "Payments",
        key: "payments",
        icon: () => <img src={paymentsIcon} alt="flight-icon" />
    },
    {
        label: "Credit",
        key: "credit",
        icon: () => <img src={creditIcon} alt="flight-icon" />
    },
    {
        label: "Settings",
        key: "settings",
        icon: () => <img src={userIcon} alt="flight-icon" />
    }
];
