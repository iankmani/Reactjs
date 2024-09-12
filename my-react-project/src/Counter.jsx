import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const handleAddNumber = () => {
        setCount(count + 1)
    }
    const handleSubtractNumber = () => {
        setCount(count - 1)
        }
        const handleReset = (e) => {
            console.log(e.currentTarget)

            setCount(0) 
        }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleAddNumber}>Add</button>
        <button onClick={handleSubtractNumber}>Minus</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter