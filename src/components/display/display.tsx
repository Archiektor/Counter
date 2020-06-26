import React from "react";
import UserInput from "../input";
import {ChangeCounter} from "../counter/counter";

import sass from "./display.module.sass";

type DisplayType = {
    otherCounters?: any,
    changeMaxCounter: ChangeCounter,
    changeStartCounter: ChangeCounter,
}

const Display: React.FC<DisplayType> = (props) => {
    const {maxCounter, startCounter, changeMaxCounter, changeStartCounter} = props.otherCounters;
    // console.log("in display", changeMaxCounter);
    return (
        <div className={sass.display}>
            <div className={sass["display__block"]}>
                <UserInput changeMaxCounter={changeMaxCounter} title={"max value : "} counter={maxCounter} startCounter={startCounter}/>
            </div>
            <div className={sass["display__block"]}>
                <UserInput changeStartCounter={changeStartCounter} title={"start value : "} counter={startCounter} maxCounter={maxCounter}/>
            </div>
        </div>
    )
}

export default Display;