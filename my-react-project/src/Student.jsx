import React from 'react'

const Student = (stude) => {
  return (
    <div>Name: {stude.name}
    <br />
    age: {stude.age}</div>

  )
}
Student.defaultProps = {
    name : "Geust",
    age: "null"

}

export default Student