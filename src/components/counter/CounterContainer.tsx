import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import Counter from './Counter';
import {incrementAC, resetAC, setMaxValue, setPreferences, setStartValue} from '../../redux/counter-reducer';

type CounterContainerType = {
    startValue: number,
    maxValue: number,
    preferenceMode: boolean,
    incrementAC: () => void,
    resetAC: () => void,
    setPreferences: () => void,
    setStartValue: (startV: number) => void,
    setMaxValue: (maxV: number) => void,
}

const CounterContainer: React.FC<CounterContainerType> = React.memo(({startValue, maxValue, preferenceMode,
                                                                         incrementAC, resetAC, setPreferences, setStartValue, setMaxValue}) => {
    return (
        <Counter startValue={startValue} maxValue={maxValue} preferenceMode={preferenceMode}
                 incrementAC={incrementAC} resetAC={resetAC} setPreferences={setPreferences}
                 setStartValue={setStartValue} setMaxValue={setMaxValue}
        />
    )
})

type MapStatePropsType = {
    startValue: number,
    maxValue: number,
    preferenceMode: boolean,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        preferenceMode: state.counter.preferenceMode,
    }
}

export default connect(mapStateToProps,
    {incrementAC, resetAC, setPreferences, setStartValue, setMaxValue})(CounterContainer);