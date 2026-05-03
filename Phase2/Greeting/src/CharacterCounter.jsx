import React from 'react'
import { useState } from 'react';

const CharacterCounter = () => {
    const maxLen = 28;
    const [text, SetText] = useState("");
    const hadleChange = (event) =>{
        SetText(event.target.value)
    }
    const remainChars = maxLen - text.length;
    const isWarning = text.length >= maxLen * 0.9;
  return (
    <>
    <div className='character-counter'>
        <textarea 
        className='text-input'
        value={text}
        onChange={hadleChange}
        maxLength={maxLen}
        placeholder='type something..'
        /> 
        <p className={isWarning? "counter warning":"counter"}>
            {remainChars} characters remaing
        </p>
    </div>
    </>
  )
}

export default CharacterCounter