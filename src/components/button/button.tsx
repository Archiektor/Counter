import React from "react";

type ButtonType = {
    changeCounter: (value: number) => void,
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button onClick={() => props.changeCounter(1)} className="btn btn_left">{props.children}</button>
    )
}

export default Button;