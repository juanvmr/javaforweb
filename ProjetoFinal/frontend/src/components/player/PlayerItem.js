import React from 'react'

class PlayerItem extends React.Component{
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

export default PlayerItem