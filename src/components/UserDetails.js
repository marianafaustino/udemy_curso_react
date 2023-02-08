import React, { useState } from 'react'

const UserDetails = () => {
    const pessoas = [
        {nome:"Maria", idade:10, profissão:"Estudante"},
        {nome:"Eduardo", idade:18, profissão:"Atendente de loja"},
        {nome:"Júlia", idade:25, profissão:"Advogada"}
      ]
    
  return (
    <div>
        <ul>
       {pessoas.map((pessoa, i)=>(
        <li key={i}>{pessoa.nome} tem {pessoa.idade} anos de idade e é {pessoa.profissão}.
        {pessoa.idade >=18 ?
        (<p>Pode tirar habilitação!</p>) :
        (<p>Não pode tirar habilitação!</p>)}
        </li>
        
       ))}
       
       </ul>
    </div>
  )
}

export default UserDetails