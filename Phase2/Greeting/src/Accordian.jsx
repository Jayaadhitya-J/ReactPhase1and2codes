import React from 'react'
import { useState } from 'react'

const Accordian = () => {
    const[isOpen, SetIsOpen] = useState(false);
    const toggle = () => {
        SetIsOpen(!isOpen)
    }
        
        return (
    <>
        <div className='accordian'>
            <button className='accordian-button' onClick={toggle}>
                {isOpen? "hide contet" : "Show content"}
            </button>
            {isOpen &&(
                <div className='accordian-content'>
                    <p>this is accordian content</p>
                </div>
            )}
        </div>
    </>
  )
}

export default Accordian