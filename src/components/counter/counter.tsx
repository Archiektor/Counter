import React, {useState} from "react";
import Button from "../button";
import Display from "../display";

export type ChangeCounter =  (value: number) => void

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
    // console.log("in counter", props.changeMaxCounter);
    let disable = currentCounter === props.startCounter ? "btn_disabled" : "";
    let disableInc = currentCounter === props.maxCounter ? "btn_disabled" : "";
    let disableDisplay = currentCounter === props.maxCounter ? "counter__display counter__display_off" : "counter__display";
    let btnArea = settings ? "btn-area counter__btn-area_disabled" : "btn-area";
    return (
        <div className="counter">
            <div className="counter__outer-border">
                <div className="counter__inner-border">
                    {!settings && <div className={disableDisplay}>{currentCounter}</div>}
                    {settings &&
                    <Display changeStartCounter={props.changeStartCounter} changeMaxCounter={props.changeMaxCounter}
                             otherCounters={otherCounters}/>}
                </div>
                <div className={`counter__${btnArea}`}>
                    {!settings && <Button changeCounter={changeCounter} disable={disableInc}>INC</Button>}
                    {!settings && <Button resetCounter={resetCounter} disable={disable}>RES</Button>}
                    <Button changeDisplayStatus={changeDisplayStatus} disable={""}>SET</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter;