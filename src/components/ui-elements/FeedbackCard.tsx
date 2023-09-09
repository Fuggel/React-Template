import React from "react";
import { IconDefinition, faWarning, faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface Props {
    type: "success" | "warning" | "error";
    msg: string;
}

const FeedbackCard: React.FC<Props> = ({ type, msg }) => {
    let className: string;
    let icon: IconDefinition;
    let color: string;

    switch (type) {
        case "success":
            className = "success-msg";
            icon = faCheckCircle;
            color = "#5BB318";
            break;
        case "warning":
            className = "warning-msg";
            icon = faWarning;
            color = "#FF8C00";
            break;
        case "error":
            className = "error-msg";
            icon = faCircleExclamation;
            color = "#FF0011";
            break;
        default:
            className = "";
            icon = faWarning;
            color = "";
            break;
    }

    return (
        <div className={`feedback-card ${className}`}>
            <Icon type="custom" icon={icon} size="sm" color={color} />
            <p>{msg}</p>
        </div>
    );
};


export default FeedbackCard;
