import React, {useState} from "react";

import "../../style.sass";
import Counter from "../counter";

const App = () => {
    let [counter, setCounter] = useState<number>(0);

    const changeCounter = (value: number) => {
        let newCounter = counter + value;
        setCounter(newCounter);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <div className="container_fluid">
            <Counter counter={counter} changeCounter={changeCounter} resetCounter={resetCounter}/>
        </div>
    )
}

export default App;