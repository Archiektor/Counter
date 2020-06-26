import React, {useEffect, useState} from "react";

import Counter from "../counter";

type StateType = {
    [key: string]: number,
}

const maxCounter = "max_Counter";
const startCounter = "start_Counter";
const currentCounter = "current_Counter";
const keyToLocalstorage = "state";

const App = () => {
    let [state, setState] = useState<StateType>({
        [maxCounter]: 5,
        [startCounter]: 0,
        [currentCounter]: 0,
    });

    useEffect(() => {
        const stateAsString = localStorage.getItem(keyToLocalstorage)
        // console.log(stateAsString);
        if (stateAsString !== null) {
            const newState = JSON.parse(stateAsString!)
            setState(newState);
            localStorage.clear()
        }
    }, []);

    const changeCounter = (value: number) => {
        state[currentCounter] += value;
        setState({...state});
    }

    const changeMaxCounter = (value: number) => {
        state[maxCounter] = value;
        setState({...state});
    }

    const changeStartCounter = (value: number) => {
        state[startCounter] = value;
        state[currentCounter] = value;
        setState({...state});
    }

    const resetCounter = () => {
        state[currentCounter] = state[startCounter];
        setState({...state});
    }

    useEffect(() => {
        // console.log("update");
        localStorage.setItem(keyToLocalstorage, JSON.stringify(state));
    }, [state]);

    return (
        <div className="container_fluid">
            <Counter maxCounter={state[maxCounter]} startCounter={state[startCounter]}
                     currentCounter={state[currentCounter]}
                     changeCounter={changeCounter} resetCounter={resetCounter} changeMaxCounter={changeMaxCounter}
                     changeStartCounter={changeStartCounter}/>
        </div>
    )
}

export default App;