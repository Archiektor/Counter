import React from "react";
import UserInput from "../input";
import {ChangeCounter} from "../counter/counter";

type DisplayType = {
    otherCounters?: any,
    changeMaxCounter: ChangeCounter,
    changeStartCounter: ChangeCounter,
}

const Display: React.FC<DisplayType> = (props) => {
    const {maxCounter, startCounter, changeMaxCounter, changeStartCounter} = props.otherCounters;
    // console.log("in display", changeMaxCounter);
    return (
        <div className="display">
            <div className="display__block">
                <UserInput changeMaxCounter={changeMaxCounter} title={"max value : "} counter={maxCounter} startCounter={startCounter}/>
            </div>
            <div className="display__block">
                <UserInput changeStartCounter={changeStartCounter} title={"start value : "} counter={startCounter} maxCounter={maxCounter}/>
            </div>
        </div>
    )
}

export default Display;