import React, {ChangeEvent} from 'react';
import s from './CustomInput.module.scss';

type CustomInputType = {
    startValue?: number,
    maxValue?: number,
    additional: number,
    onChangeFn?: (value: number) => void,
}

const CustomInput: React.FC<CustomInputType> = React.memo(({startValue, maxValue, additional, onChangeFn}) => {
    const getStyleAndErrorInfo = (startValue: number | undefined, maxValue: number | undefined, additional: number): boolean => {
        return startValue === additional || maxValue === additional
    }

    let inputStyle = getStyleAndErrorInfo(startValue, maxValue, additional) || startValue! > additional ? `${s.input} ${s.input_disabled}` : `${s.input}`;
    let inputError = getStyleAndErrorInfo(startValue, maxValue, additional) || startValue! > additional ? `Incorrect input` : ``;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeFn && onChangeFn(Number(e.currentTarget.value));
    }
    return (
        <div className={s.wrapper}>
            <input className={inputStyle} onChange={(e) => onChangeHandler(e)}
                   value={startValue || startValue === 0 ? startValue : maxValue} type={'number'}/>
            {inputError && <div className={s.error}>{inputError}</div>}
        </div>
    )
})

export default CustomInput;