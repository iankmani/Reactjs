import React, {useState} from 'react'

const Car = () => {
    const [cars, setCars] = useState({year: 2024,
                                      model: "",
                                      color: ""});


const handleChangeColor = (e) => {
    setCars({ ...cars, color: e.target.value });
}

    const handleChangeModel = (e) => {
        setCars({ ...cars, model: e.target.value });
    }

        const handleChangeYear = (e) => {
            setCars(c => ({ ...c, year: e.target.value }));
}

  return (
    <div>
        <p>your favourite car is : {cars.year} {cars.color} {cars.model}</p>

        <input type="number" value={cars.year} onChange={handleChangeYear} />
        <input type="text" value={cars.color} onChange={handleChangeColor} placeholder='input color'/>
        <input type="text" value={cars.model} onChange={handleChangeModel} placeholder='input model'/>
    </div>
  )
}

export default Car