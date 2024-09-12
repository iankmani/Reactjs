import React, {useState} from 'react'

const MyComponent = () => {
    const [name, setName] = useState("Geust")
    const handleChangeName =(e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
  return (
    <div>
        <h1>Hello, {name}</h1>
        <input value={name} onChange={handleChangeName} />
    </div>
  )
}

export default MyComponent