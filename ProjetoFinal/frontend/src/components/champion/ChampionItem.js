import React from 'react'

class ChampionItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            ID: {this.props.key} 
            / Nome: {this.props.value.name} 
        </div>
    }
}

export default ChampionItem