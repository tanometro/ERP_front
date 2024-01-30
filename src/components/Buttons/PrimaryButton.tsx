import React from 'react';
import { PrimaryButtonProps } from '@/types/ButtonsTypes';

const PrimaryButton = (props: PrimaryButtonProps) => {
    const {title, onClickFunction} = props;
  return (
    <button className='bg-black rounded-md' onClick={onClickFunction}>
        {title}
    </button>

  )
}

export default PrimaryButton