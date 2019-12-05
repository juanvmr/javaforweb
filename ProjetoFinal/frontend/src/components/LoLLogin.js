import React from 'react'

class LoLLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
    }

    render(){
        return <form method="POST" action="https://localhost:3000/api">
            <div>
                Usuário: <input type="text"></input>
            </div>
            <div>
                Senha: <input type="password"></input>
            </div>
            <div>
                <input type="submit" value="Entrar"></input>
            </div>
        </form>
    }
}

export default LoLLogin