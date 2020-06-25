import React from "react";

type ButtonType = {
    changeCounter: (value: number) => void,
    disable: string
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button onClick={() => props.changeCounter(1)} className={`btn btn_left ${props.disable}`}>{props.children}</button>
    )
}

export default Button;