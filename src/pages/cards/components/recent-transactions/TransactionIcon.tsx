import styled from "styled-components";
import { VendorType, VendorTypeToColor } from "../../../../constants/common";

import flightIcon from "../../../../assets/flights.svg";
import megaphoneIcon from "../../../../assets/megaphone.svg";
import ecomIcon from "../../../../assets/file-storage.svg";

const TransactionIconWrapper = styled.div<{ type: VendorType }>`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    background: ${props => VendorTypeToColor[props.type]};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const VendorTypeToIcon = {
    [VendorType.ecom]: () => <img src={ecomIcon} alt="ecom-icon" />,
    [VendorType.flights]: () => <img src={flightIcon} alt="flight-icon" />,
    [VendorType.alert]: () => <img src={megaphoneIcon} alt="megaphone-icon" />
};

const TransactionIcon = ({ vendorType }: { vendorType: VendorType }) => {
    const Icon = VendorTypeToIcon[vendorType];
    return (
        <TransactionIconWrapper type={vendorType}>
            <Icon />
        </TransactionIconWrapper>
    );
};

export default TransactionIcon;
