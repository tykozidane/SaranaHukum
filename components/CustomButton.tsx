"use client";
import { CustomButtonProps } from '@/types';
import React from 'react';


function CustomButton({ title, containerStyle, handleClick, btnType, }: CustomButtonProps) {
    
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
    >
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton