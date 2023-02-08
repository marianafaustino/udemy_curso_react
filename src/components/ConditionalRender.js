import React, { useState } from "react";

const ConditionalRender = ()=>{
    const[x] = useState(false);
    const [name, setName] = useState('Joo')

    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim !</p>}
            {!x && <p>Agora x é falso.</p>}

            <h1>If ternário:</h1>

            {name === 'João' ? (
                <p>O nome é João.</p>
            ) : (
                <p>Nome não encontrado!</p>
            )}

            <button onClick={()=> setName('João')}>Clique aqui!</button>
        </div>
    )

}

export default ConditionalRender