import React from 'react'


class UserForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {name: "", "password": ""}
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })
    }

    handleInsert = () => {
        var data = { "name": this.state.name, "password": this.state.password}
        this.props.handleAction(data)
    }

    render(){
        return <form>
        Nome: 
        <input type="text" name="name" onChange={this.handleChange}/>
        /
        Password: <input type="password" name="password" onChange={this.handleChange}/>
        <input onClick={this.handleInsert} type="button" value="Inserir" />
        </form>
    }
}

export default UserForm