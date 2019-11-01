import React from 'react'
import UserEdit from './UserEdit'

class UserItem extends React.Component {

    constructor(props){
        super(props)
        this.state = { edit: null}
    }

    handleDelete = () => {
        this.props.handleAction(this.props.value._id)
    }

    handleEdit = ()=>{
        this.setState({ edit : <UserEdit user={this.props.value}/>})
    }

    render(){
        return <div>Nome: {this.props.value.name} 
        / Password: {this.props.value.password} 
        - <a href="#" onClick={this.handleDelete}>Deletar</a>
        - <a href="#" onClick={this.handleEdit}>Editar</a>
        {this.state.edit}
        </div>
    }
}

export default UserItem