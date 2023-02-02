import React from 'react'
import { useState } from 'react'

const ManageData = () => {

    let someData = 10
    console.log(someData)

    const [number, setNumber] = useState(2)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=> (someData=11)}>Mudar variável</button>
        </div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(12)}>Mudar o state</button>
    </div>
  )
}

export default ManageData