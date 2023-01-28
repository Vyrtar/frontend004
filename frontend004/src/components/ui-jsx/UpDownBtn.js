import React, { useState } from 'react'


const UpDownBtn = ({ UpDown, value, valueSetter }) => {
    
    
  
    const handleClick = () => {
      {UpDown ? valueSetter(value + 1) : valueSetter(value - 1)}
    };

    return (
        <button onClick={handleClick}>
            {UpDown ? 'Increment' : 'Decrement'}
      </button>
    )
} 

export default UpDownBtn