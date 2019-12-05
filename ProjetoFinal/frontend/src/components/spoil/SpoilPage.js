import React from 'react'
import axios from 'axios'
import SpoilForm from './SpoilForm'
import SpoilItem from './SpoilItem'

class SpoilPage extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
        this.BASE_URL = "http://localhost:3000/api/spoil"
    }

    loadItems = (data)=>{
        this.setState({spoils : data})
    }

    insertSpoil = (data)=>{
        axios.post(this.BASE_URL, data).then(()=>{
            console.log("Espólio cadastrado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    deleteSpoil = (id)=>{
        axios.delete(this.BASE_URL+"/"+id).then(()=>{
            console.log("Espólio removido")
        }).catch(()=>{
            console.error("Erro: "+error)
        })
    }

    editSpoil = (id, data)=>{
        axios.put(this.BASE_URL+"/"+id, data).then(()=>{
            console.log("Espólio editado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findSpoil = (id)=>{
        axios.get(this.BASE_URL+"/"+id).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findAllSpoil = ()=>{
        axios.get(this.BASE_URL).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    render(){
        var spoilList = this.state.spoils.map((value)=>{
            return <SpoilItem key={value._id} value={value}/>
        })

        return <div>
            <SpoilForm handleInsert={(data) => this.insertSpoil(data)} handleFind={(id)=>this.findSpoil(id)} handleFindAll={()=>this.findAllSpoil()} handleDelete={(id)=>this.deleteSpoil(id)} handleEdit={(id,data)=>this.editSpoil(id,data)}/>
            {spoilList}
        </div>
    }
}

export default SpoilPage