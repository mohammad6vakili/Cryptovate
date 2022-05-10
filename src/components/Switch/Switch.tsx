import React from 'react'
import { ISwitchProps } from './types';
import Private from '../../assets/icons/private.svg'
import "./style.scss";

const Switch:React.FC<ISwitchProps> = ({ isChecked, handleChange }) => {
  return (
    <label className={'switch' + (isChecked ? ' switch--checked' : '')}>
        <input type="checkbox" checked={isChecked} onChange={(e) => handleChange(e.target.checked)} />
        <span className={'dot'}> 
            <img src={Private} alt="private" />
        </span>
    </label>
  )
}

export default Switch;