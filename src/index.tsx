import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/sass/style.sass";
import App from "./components/app";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

