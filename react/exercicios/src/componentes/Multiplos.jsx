import React from "react"

export const BoaTarde = props => //Para não precisar usar o default, temos que definir um nome à função. Usar default = função anônima
    <h1>Boa tarde {props.nome}</h1>

export const BoaNoite = props => //Deve ser const, não pode nem ser var, nem let, nem vazio.
    <h2>Boa noite {props.nome}</h2>


// Eu poderia, tirar o export das função e atribuir como anônimo

// export default {Boa Tarde, Boa Noite}, ai, no arquivo js, iria usar como usa uma default
