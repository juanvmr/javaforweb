import React from 'react'
import axios from 'axios'
import ItemForm from './ItemForm'
import ItemItem from './ItemItem'

class ItemPage extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
        this.BASE_URL = "http://localhost:3000/api/item"
    }

    loadItems = (data)=>{
        this.setState({items : data})
    }

    insertItem = (data)=>{
        axios.post(this.BASE_URL, data).then(()=>{
            console.log("Item cadastrado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    deleteItem = (id)=>{
        axios.delete(this.BASE_URL+"/"+id).then(()=>{
            console.log("Item removido")
        }).catch(()=>{
            console.error("Erro: "+error)
        })
    }

    editItem = (id, data)=>{
        axios.put(this.BASE_URL+"/"+id, data).then(()=>{
            console.log("Item editado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findItem = (id)=>{
        axios.get(this.BASE_URL+"/"+id).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findAllItem = ()=>{
        axios.get(this.BASE_URL).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    render(){
        var itemList = this.state.items.map((value)=>{
            return <ItemItem key={value._id} value={value}/>
        })

        return <div>
            <ItemForm handleInsert={(data) => this.insertItem(data)} handleFind={(id)=>this.findItem(id)} handleFindAll={()=>this.findAllItem()} handleDelete={(id)=>this.deleteItem(id)} handleEdit={(id,data)=>this.editItem(id,data)}/>
            {itemList}
        </div>
    }
}

export default ItemPage