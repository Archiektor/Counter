import React from 'react';
import s from './Button.module.scss';

type ButtonType = {
    onClickFn?: () => void,
    disabled?: boolean,
}

const Button: React.FC<ButtonType> = ({onClickFn, disabled, ...props}) => {

    let btnStyle = disabled ? `${s.btn} ${s.btn_disabled}` : `${s.btn}`

    const onClickHadler = () => {
        onClickFn && onClickFn();
    }

    return (
        <button className={btnStyle} disabled={disabled && disabled} onClick={onClickHadler} {...props}>{props.children}</button>
    )
}

export default Button;