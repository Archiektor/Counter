import React from "react";

type ButtonType = {
    changeCounter?: (value: number) => void,
    disable: string,
    resetCounter?: () => void,
    changeDisplayStatus?: () => void,
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button onClick={() => {
            if (props.changeCounter) {
                props.changeCounter(1);
            }
            if (props.resetCounter) {
                props.resetCounter();
            }
            if (props.changeDisplayStatus) {
                props.changeDisplayStatus();
            }
        }} className={`btn btn_right ${props.disable}`}>{props.children}</button>
    )
}

export default Button;