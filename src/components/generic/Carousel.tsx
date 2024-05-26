import React from "react";
import { Carousel as AntdCarousel } from "antd";
import { styled } from "styled-components";
import { colorTokens } from "../../designTokens";

const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
};

interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    onChange?: (index: number) => void;
}

const StyledCarousel = styled(AntdCarousel)<{ isFrozen: boolean }>`
    .slick-current {
        opacity: ${props => (props.isFrozen ? "0.7 !important" : 1)};
    }
    .slick-dots {
        position: absolute;
        bottom: -36px;
        li {
            width: 8px;
            height: 8px;
            border-radius: 8px;
            opacity: 0.2;
            background: ${() => colorTokens.light.brand};
            button {
                opacity: 0;
            }
        }

        li.slick-active {
            width: 16px;
            height: 8px;
            border-radius: 8px;
            background: ${() => colorTokens.light.brand};
            opacity: 1;
            button {
                opacity: 0;
            }
        }
    }
`;

const Carousel = ({ items, autoPlay = true, onChange }: CarouselProps) => {
    return (
        <StyledCarousel
            autoplay={autoPlay}
            isFrozen={!autoPlay}
            fade={true}
            effect={"fade"}
            style={{ width: "414px", height: "248px", borderRadius: "8px" }}
            afterChange={onChange}
        >
            {items.map(item => {
                return <div>{item}</div>;
            })}
        </StyledCarousel>
    );
};

export default Carousel;
