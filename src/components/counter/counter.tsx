import React from 'react';
import s from './Counter.module.scss';
import Button from '../button/Button';
import CustomInput from '../customInput/CustomInput';

type CounterType = {
    startValue: number,
    maxValue: number,
    preferenceMode: boolean,
    incrementAC: () => void,
    resetAC: () => void,
    setPreferences: () => void,
    setStartValue: (startV: number) => void,
    setMaxValue: (maxV: number) => void,
}

const Counter: React.FC<CounterType> = React.memo(({
                                                       startValue, maxValue, preferenceMode, incrementAC, resetAC, setPreferences,
                                                       setStartValue, setMaxValue
                                                   }) => {
    let counterTextStyle = startValue === maxValue ? `${s.frame__text} ${s.frame__text_disabled}` : `${s.frame__text}`
    let counterDisabled = startValue === maxValue;

    return (
        <div className={s.frame}>
            <div className={s.frame__inner}>
                {!preferenceMode && <span className={counterTextStyle}>{startValue}</span>}
                {preferenceMode && <div className={s.frame__inputBlock}>
                    <span className={s.frame__span}>start value:</span>
                    <CustomInput onChangeFn={setStartValue} startValue={startValue} additional={maxValue}/>
                </div>}
                {preferenceMode && <div className={s.frame__inputBlock}>
                    <span className={s.frame__span}>max value:</span>
                    <CustomInput onChangeFn={setMaxValue} maxValue={maxValue} additional={startValue}/>
                </div>}
            </div>
            <div className={s.frame__btn}>
                {!preferenceMode && <Button disabled={counterDisabled} onClickFn={incrementAC}>{`Inc`}</Button>}
                {!preferenceMode && <Button onClickFn={resetAC}>{`Reset`}</Button>}
                <Button onClickFn={setPreferences}>{`Set`}</Button>
            </div>
        </div>
    )
})

export default Counter;
