import React from 'react'
import fs from 'fs'

class Computador extends React.Component{
    constructor(props){
        super(props)
        this.state = {hostname : "", processador : "", memoria : "", armazenamento : "", estado : ""}
    }

    file = JSON.parse(fs.readFileSync("computer.json"))
    
    componentDidMount(){
        this.file.
    }
}

export default Computador