import React from "react";


interface Props {
    type: "cta" | "caution" | "cancel";
    onClick: () => void;
    label: React.ReactNode;
}

const Button: React.FC<Props> = ({ type, onClick, label }) => {
    return (
        <button className={`button ${type}-button`} onClick={onClick}>{label}</button>
    );
};


export default Button;