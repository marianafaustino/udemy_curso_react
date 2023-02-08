import React from 'react'
import { useState } from 'react'

const ListRender = ()=> {

    const [list] = useState(['Pedro', 'Mateus', 'Lucas'])

    const [users, setUsers] = useState([
      {id: 1, nome: 'joão', idade: 28},
      {id: 2, nome: 'marly', idade: 52},
      {id: 3, nome: 'mariana', idade: 45}
    ])

    const deleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4)
    

      setUsers((prevUsers)=>{
        return prevUsers.filter((user)=> randomNumber !== user.id)
      })
    }

  return (
    <div>
    <div>
        <ul>
            {list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>

    <div>
      <ul>
          {users.map((user)=>(
            <li key={user.id}> {user.nome} - {user.idade}</li>
          ))}
        </ul>
    </div>
      <button onClick={deleteRandom}>Delete um item aleatório</button>
    </div>
  )
}

export default ListRender

