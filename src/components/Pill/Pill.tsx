import React from 'react'
import Typography from '../Typography';
import { IPillProps } from './types';
import "./style.scss";

const Pill:React.FC<IPillProps> = ({ label, imgSrc, isSecondary }) => {
  return (
    <div className={'pill' + (isSecondary ? ' pill--secondary' : '')}>
        <figure className='pill__figure'>
            <img className='cover' src={imgSrc} alt="member" />
        </figure>
        <Typography className='pill__label' type="label" label={`@${label}`}  />
    </div>
  )
}

export default Pill;