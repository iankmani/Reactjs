import React from 'react'

const Lists = () => {
    const fruits = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Pinneaple'},
        { id: 5, name: 'Thorn melon'},

    ]

        const listitem = fruits.map(fruit =>
                <li key={fruit.id}>
                    {fruit.name}

                </li>
        

        )
    
  return(<ul>{listitem}</ul>)
  
}

export default Lists