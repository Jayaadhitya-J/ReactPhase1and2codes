import React from 'react'

let name = "Jayaadhitya"
let email = "Jayaadhitya@egmail.com"
let role = "SDE"
const App = () => {
  return (
    <>
    <div className='container'>
      <div className='card'>
        <h1>User Card</h1>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Role: {role}</h2>
      </div>
    </div>
    </>
  )
}

export default App