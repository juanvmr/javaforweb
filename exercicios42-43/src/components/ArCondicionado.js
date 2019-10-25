import React from 'react'

class ArCondicionado extends React.Component{
    constructor(props){
        super(props)
        this.state = {modo : "", velocidade : ""}
    }

    componentDidMount(){
        this.setState({modo : this.props.modo, velocidade : this.props.velocidade})
    }

    aumentarVelocidade = ()=>{
        if(this.state.velocidade === "1"){
            this.setState({velocidade : "2"})
        }
        else if(this.state.velocidade === "2"){
            this.setState({velocidade : "3"})
        }
    }

    diminuirVelocidade = ()=>{
        if(this.state.velocidade === "3"){
            this.setState({velocidade : "2"})
        }
        else if(this.state.velocidade === "2"){
            this.setState({velocidade : "1"})
        }
    }

    alterarModo = ()=>{
        if(this.state.modo === "ventilando"){
            this.setState({modo : "refrigerando"})
        }
        else if(this.state.modo === "refrigerando"){
            this.setState({modo : "aquecendo"})
        }
        else{
            this.setState({modo : "ventilando"})
        }
    }

    velAtual = ()=>{
        return this.state.velocidade
    }

    modoAtual = ()=>{
        return this.state.modo
    }

    render(){
        let ac = (<div name="mainDiv">
            Modo: {this.modoAtual()}<br/>
            Velocidade: {this.velAtual()}<br/>
            <div>
                <input type="button" onClick={this.aumentarVelocidade} value="+velocidade"/>
                <input type="button" onClick={this.diminuirVelocidade} value="-velocidade"/>
            </div>
            <input type="button" onClick={this.alterarModo} value="Modo"/>
        </div>)
        return ac
    }
}

export default ArCondicionado