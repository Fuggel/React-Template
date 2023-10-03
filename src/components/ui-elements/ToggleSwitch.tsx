import React from "react";
import Switch from "react-switch";


interface Props {
    onChange: () => void;
    checked: boolean;
    testId?: string;
    onColor?: string;
    offColor?: string;
    uncheckedIcon?: React.ReactElement;
    checkedIcon?: React.ReactElement;
}

const ToggleSwitch: React.FC<Props> = ({ onChange, checked, testId, onColor, offColor, uncheckedIcon, checkedIcon }) => {
    return (
        <div className="toggle-settings" data-testid="toggle-settings">
            <Switch
                className={testId}
                onChange={onChange}
                checked={!!checked}
                onColor={onColor ?? "#5BB318"}
                offColor={offColor ?? "#161616"}
                uncheckedIcon={uncheckedIcon ?? false}
                checkedIcon={checkedIcon ?? false}
            />
        </div>
    );
};


export default ToggleSwitch;
