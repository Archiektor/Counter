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
    const errorStyle = error? "user-input__mod_error" : ""

    const checkOnNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.currentTarget.value);
        if (isNaN(num)) {
            setError(true);
            setTimeout(() => setError(false), 5000);
            return previous;
        } else {
            return num
        }
    }

    const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = checkOnNumber(e);
        if (!error) {
            props.changeMaxCounter && props.changeMaxCounter(num);
            props.changeStartCounter && props.changeStartCounter(num);
        }
    }
    return (
        <div className="user-input">
            <label>{props.title}</label>
            <div className="user-input__mod">
                <input value={props.counter} onChange={(e) => onUserInputChange(e)} type="number" className={errorStyle}/>
                {error && <span>{errorMsg.toUpperCase()}</span>}
            </div>

        </div>
    )
}

export default UserInput;


