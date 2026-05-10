import { useEffect, useState } from "react"

const Clock = () =>{

    const[time, SetTime] = useState(new Date())

    useEffect(() =>{

        const timerId = setInterval(() => {
            SetTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timerId)
        }
    }, []
    )
    return(
        <>
        <h2>Current time</h2>
        <h1>{time.toLocaleTimeString()}</h1>

        </>
    )
}

export default Clock 