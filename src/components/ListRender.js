import React from 'react'
import { useState } from 'react'

const ListRender = ()=> {

    const [list] = useState(['Pedro', 'Mateus', 'Lucas'])

    const [users] = useState([
      {id: 1, nome: 'joão', idade: 28},
      {id: 25487852, nome: 'marly', idade: 52},
      {id: 5478515, nome: 'mariana', idade: 45}
    ])

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

    </div>
  )
}

export default ListRender