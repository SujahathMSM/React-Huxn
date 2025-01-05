import {useEffect, useRef, useState} from 'react'

const TimeRef = () => {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect ( () => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
  return (
    <div>
      <h1>
        Timer: {time} seconds
      </h1>
    </div>
  )
}

export default TimeRef
