import React from 'react'
import axios from 'axios'
import ChampionForm from './ChampionForm'
import ChampionItem from './ChampionItem'

class ChampionPage extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
        this.BASE_URL = "http://localhost:3000/api/champion"
    }

    loadItems = (data)=>{
        this.setState({champions : data})
    }

    insertChampion = (data)=>{
        axios.post(this.BASE_URL, data).then(()=>{
            console.log("Campeão cadastrado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    deleteChampion = (id)=>{
        axios.delete(this.BASE_URL+"/"+id).then(()=>{
            console.log("Campeão removido")
        }).catch(()=>{
            console.error("Erro: "+error)
        })
    }

    editChampion = (id, data)=>{
        axios.put(this.BASE_URL+"/"+id, data).then(()=>{
            console.log("Campeão editado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findChampion = (id)=>{
        axios.get(this.BASE_URL+"/"+id).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findAllChampion = ()=>{
        axios.get(this.BASE_URL).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    render(){
        var championList = this.state.champions.map((value)=>{
            return <ChampionItem key={value._id} value={value}/>
        })

        return <div>
            <ChampionForm handleInsert={(data) => this.insertChampion(data)} handleFind={(id)=>this.findChampion(id)} handleFindAll={()=>this.findAllChampion()} handleDelete={(id)=>this.deleteChampion(id)} handleEdit={(id,data)=>this.editChampion(id,data)}/>
            {championList}
        </div>
    }
}

export default ChampionPage