import React, {useState} from "react";

import css from "./counter.module.sass";

import Button from "../button";
import Display from "../display";

export type ChangeCounter = (value: number) => void

type CounterType = {
    //OR PUSH HERE FULL STATE ???
    maxCounter: number,
    startCounter: number,
    currentCounter: number,
    changeCounter: ChangeCounter,
    resetCounter: () => void,
    changeMaxCounter: ChangeCounter,
    changeStartCounter: ChangeCounter,
}

const Counter: React.FC<CounterType> = (props) => {
    const [settings, setSettings] = useState<boolean>(false);

    const changeDisplayStatus = () => {
        setSettings(!settings);
    }

    const {currentCounter, changeCounter, resetCounter, ...otherCounters} = props;
    let disable = currentCounter === props.startCounter ? "btn_disabled" : "";
    let disableInc = currentCounter === props.maxCounter ? "btn_disabled" : "";
    let disableDisplay = currentCounter === props.maxCounter ? `${css["counter__display"]} ${css["counter__display_off"]}` : `${css["counter__display"]}`;
    let btnArea = settings ? `${css["counter__btn-area"]} ${css["counter__btn-area_disabled"]}` : `${css["counter__btn-area"]}`;
    return (
        <div className={css.counter}>
            <div className={css["counter__outer-border"]}>
                <div className={css["counter__inner-border"]}>
                    {!settings && <div className={disableDisplay}>{currentCounter}</div>}
                    {settings &&
                    <Display changeStartCounter={props.changeStartCounter} changeMaxCounter={props.changeMaxCounter}
                             otherCounters={otherCounters}/>}
                </div>
                <div className={`${btnArea}`}>
                    {!settings && <Button changeCounter={changeCounter} disable={disableInc}>INC</Button>}
                    {!settings && <Button resetCounter={resetCounter} disable={disable}>RES</Button>}
                    <Button changeDisplayStatus={changeDisplayStatus} disable={""}>SET</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter;