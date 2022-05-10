import React from 'react'
import RenderText from './RenderText';
import { ITextProps } from './types';

const Typography:React.FC<ITextProps> = ({ type, children, className, label }) => {
  return (
    <>  
      <RenderText type={type} className={className}>
        {label || children}
      </RenderText>
    </>
  )
}

export default Typography;