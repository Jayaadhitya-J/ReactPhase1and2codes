import React from 'react'

const now = new Date()
const App = () => {
  return (
    <>
    <div className='header'>
      <img src='{Logo}' className='logo' alt='CSK logo'></img>
      <h2 className='Name='> Chennai Super Kings </h2>
      <div className='dateBox'>
        <h1 className='Date'>{now.toLocaleDateString()}</h1>  
        <h1 className='Time'>{now.toLocaleTimeString()}</h1>
      </div>
    </div>
    </>
  )
}

export default App