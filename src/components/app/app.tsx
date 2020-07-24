import React from 'react';
import s from './App.module.scss';
import CounterContainer from '../counter/CounterContainer';

const App: React.FC<any> = () => {

    return (
        <div className={s.container}>
            <CounterContainer/>
        </div>
    )
}

export default App;