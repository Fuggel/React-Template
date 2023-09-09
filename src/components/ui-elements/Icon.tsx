import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";


interface Props {
    type: "cta" | "caution" | "cancel" | "svg" | "toggle" | "custom";
    icon: IconDefinition;
    onClick?: () => void;
    size?: "lg" | "md" | "sm" | "xs";
    color?: string;
}

const Icon: React.FC<Props> = ({ type, icon, onClick, size, color }) => {
    let iconSize: SizeProp;

    switch (size) {
        case "lg":
            iconSize = "3x";
            break;
        case "md":
            iconSize = "2xl";
            break;
        case "sm":
            iconSize = "xl";
            break;
        case "xs":
            iconSize = "sm";
            break;
        default:
            iconSize = "2xl";
            break;
    }

    return (
        <FontAwesomeIcon
            data-testid="icon"
            className={`icon ${type}-icon`}
            onClick={onClick}
            icon={icon}
            size={iconSize}
            color={color}
        />
    );
};


export default Icon;