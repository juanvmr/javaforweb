import React from 'react'

class ChampionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {id: "", name : ""}
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })
    }

    handleInsert = ()=>{
        var data = {"name":this.state.name}
        this.props.handleInsert(data)
    }

    handleEdit = ()=>{
        var data = {"name":this.state.name}
        var id = {"id":this.state.id}
        this.props.handleEdit(id, data)
    }

    handleDelete = ()=>{
        var id = {"id":this.state.id}
    }

    handleFind = ()=>{
        var id = {"id":this.state.id}
        this.props.handleFind(id)
    }

    handleFindAll = ()=>{
        this.props.handleFindAll()
    }

    render(){
        return <form>
            <div>
                Id: <input type="number" name="id" onChange={this.handleChange}/>
            </div>
            <div>
                Nome: <input type="text" name="name" onChange={this.handleChange}/>
            </div>
            <div>
                <input onClick={this.handleInsert} type="button" value="Inserir" />
                <input onClick={this.handleEdit} type="button" value="Editar" />
                <input onClick={this.handleDelete} type="button" value="Remover" />
                <input onClick={this.handleFind} type="button" value="Encontrar" />
                <input onClick={this.handleFindAll} type="button" value="Encontrar todos" />
            </div>
        </form>
    }
}

export default ChampionForm