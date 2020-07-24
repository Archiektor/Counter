export enum ActionsConstants {
    INCREMENT =  'counter/INCREMENT',
    RESET =  'counter/RESET',
    SET_START_VALUE = 'SET_START_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_PREFERENCES =  'counter/SET_PREFERENCES',
}

type IncrementACType = { type: typeof ActionsConstants.INCREMENT,}
type resetACType = { type: typeof ActionsConstants.RESET,}
type setCounterACType = { type: typeof ActionsConstants.SET_PREFERENCES,}
type setStartValueACType = {
    type: typeof ActionsConstants.SET_START_VALUE,
    startValue: number,
}
type setMaxValueAcType = {
    type: typeof ActionsConstants.SET_MAX_VALUE,
    maxValue: number,
}

type CounterReducerActionType = IncrementACType | resetACType | setCounterACType | setStartValueACType | setMaxValueAcType;

export const incrementAC = (): IncrementACType => ({type: ActionsConstants.INCREMENT});
export const resetAC = (): resetACType => ({type: ActionsConstants.RESET})
export const setPreferences = (): setCounterACType => ({type: ActionsConstants.SET_PREFERENCES,})
export const setStartValue = (startValue: number): setStartValueACType => ({type: ActionsConstants.SET_START_VALUE, startValue})
export const setMaxValue = (maxValue: number): setMaxValueAcType => ({type: ActionsConstants.SET_MAX_VALUE, maxValue})

type StateType = {
    startValue: number,
    maxValue: number,
    preferenceMode: boolean,
}

let initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    preferenceMode: false,
}

const counterReducer = (partOfState: StateType = initialState, action: CounterReducerActionType): StateType => {
    switch (action.type) {
        case ActionsConstants.INCREMENT: {
            return {...partOfState, startValue: partOfState.startValue + 1};
        }
        case ActionsConstants.RESET: {
            return {...partOfState, startValue: 0};
        }
        case ActionsConstants.SET_PREFERENCES: {
            return {...partOfState, preferenceMode: !partOfState.preferenceMode};
        }
        case ActionsConstants.SET_START_VALUE: {
            return {...partOfState, startValue: action.startValue};
        }
        case ActionsConstants.SET_MAX_VALUE: {
            return {...partOfState, maxValue: action.maxValue};
        }
        default:
            return partOfState;
    }
}
export default counterReducer;