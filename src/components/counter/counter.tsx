import React from "react";
import Button from "../button";

type CounterType = {
    counter: number,
    changeCounter: (value: number) => void,
    resetCounter: () => void,
}

const Counter: React.FC<CounterType> = (props) => {
    const {counter, changeCounter, resetCounter} = props;
    let disable = counter === 0? "btn_disabled" : "";
    let disableInc = counter === 7? "btn_disabled" : "";
    let disableDisplay = counter === 7? "counter__display counter__display_off" : "counter__display";
    return (
        <div className="counter">
            <div className="counter__outer-border">
                <div className="counter__inner-border">
                    <div className={disableDisplay}>{counter}</div>
                </div>
                <div className="counter__btn-area">
                    <Button changeCounter={changeCounter} disable={disableInc}>INC</Button>
                    <button onClick={() => resetCounter()} className={`btn btn_right ${disable}`}>RES</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;