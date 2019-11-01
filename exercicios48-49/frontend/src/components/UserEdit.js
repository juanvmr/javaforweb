import React from 'react'
import UserForm from './UserForm'

class UserEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {"password": ""}
    }

    handleEdit = (data)=>{
        this.props.handleEdit(this.props.value._id, data)
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })
    }

    render(){
        return(<div>
            Password: <input type="password" name="password" onChange={this.handleChange}/>
            <input onClick={this.handleEdit} type="button" value="Editar" />
        </div>)
    }
}

export default UserEdit