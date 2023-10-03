import React, { useState } from "react";
import Button from "./Button";


interface Props {
    openButton: React.ReactNode;
    title: string;
    text: string;
    actionType: "cta" | "caution" | "cancel";
    actionLabel: string;
    onClick: () => void;
}

const Modal: React.FC<Props> = ({ openButton, title, text, actionType, actionLabel, onClick }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <Button type={actionType} label={openButton} onClick={() => setOpen(true)} />
            {open && (
                <div className="modal" onClick={() => setOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2 className="modal-title">{title}</h2>
                        <p className="modal-text">{text}</p>
                        <div className="modal-buttons">
                            <Button type={actionType} label={actionLabel} onClick={onClick} />
                            <Button type="cancel" label="Cancel" onClick={() => setOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};


export default Modal;