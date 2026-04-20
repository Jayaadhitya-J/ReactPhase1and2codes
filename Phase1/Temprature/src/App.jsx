import React from 'react'

let temprature = 15;
function getWeather(temprature){
  if (temprature>25) return "hot";
  return "cold"
}
const App = () => {
  return (
    <>
    <h1>{getWeather(temprature)}</h1>
    </>
  )
}

export default App