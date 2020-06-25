import React, {useState} from "react";
import {ChangeCounter} from "../counter/counter";

type UserInputType = {
    title: string,
    maxCounter?: number,
    startCounter?: number,
    counter: number,
    changeMaxCounter?: ChangeCounter,
    changeStartCounter?: ChangeCounter,
}

const UserInput: React.FC<UserInputType> = (props) => {
    const [error, setError] = useState<boolean>(false);

    const errorMsg = "Invalid input";
    let previous = props.counter;
    const errorStyle = error ? "user-input__mod_error" : ""

    const checkOnNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.currentTarget.value);
        if (isNaN(num) || num < 0 || num === props.startCounter || num === props.maxCounter) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return previous;
        } else {
            return num
        }
    }

    const checkLogic = (num: number) => {
        if (props.maxCounter === undefined) {
            if (props.startCounter === (props.counter - 1)) {
                setError(true);
                setTimeout(() => setError(false), 3000);
                return (previous + 1);
            }
        }
        if (props.startCounter === undefined) {
            if (props.maxCounter === (props.counter + 1)) {
                setError(true);
                setTimeout(() => setError(false), 3000);
                return (previous - 1);
            }
        }
        return num;
    }

    const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = checkOnNumber(e);
        num = checkLogic(num);
        if (!error) {
            props.changeMaxCounter && props.changeMaxCounter(num);
            props.changeStartCounter && props.changeStartCounter(num);
        }
    }
    return (
        <div className="user-input">
            <label>{props.title}</label>
            <div className="user-input__mod">
                <input value={props.counter} onChange={(e) => onUserInputChange(e)} type="number"
                       className={errorStyle}/>
                {error && <span>{errorMsg.toUpperCase()}</span>}
            </div>

        </div>
    )
}

export default UserInput;


