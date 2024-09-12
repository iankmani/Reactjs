import React, {useState} from 'react'

const Fruits = () => {

    const [fruits, setFruits] = useState(["apple", "banana", "melon"])

    const handleAddFruit = (e) => {

        const NewFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = ""

        setFruits([...fruits, NewFood])

    }
    

  return (
    <div>
        <h1>List of fruits</h1>
        <ul>
        {fruits.map((fruit,index) => <li key={index}>{fruit}</li>)}
        </ul>
        <input type="text" placeholder='name a fruit' id='foodInput'  />
        <button onClick={handleAddFruit}>Add Fruit</button>



    </div>
  )
}

export default Fruits