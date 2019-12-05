import React from 'react'
import axios from 'axios'
import PlayerForm from './PlayerForm'
import PlayerItem from './PlayerItem'

class PlayerPage extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
        this.BASE_URL = "http://localhost:3000/api/player"
    }

    loadItems = (data)=>{
        this.setState({players : data})
    }

    insertPlayer = (data)=>{
        axios.post(this.BASE_URL, data).then(()=>{
            console.log("Jogador cadastrado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    deletePlayer = (id)=>{
        axios.delete(this.BASE_URL+"/"+id).then(()=>{
            console.log("Jogador removido")
        }).catch(()=>{
            console.error("Erro: "+error)
        })
    }

    editPlayer = (id, data)=>{
        axios.put(this.BASE_URL+"/"+id, data).then(()=>{
            console.log("Jogador editado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findPlayer = (id)=>{
        axios.get(this.BASE_URL+"/"+id).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findAllPlayer = ()=>{
        axios.get(this.BASE_URL).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    render(){
        var playerList = this.state.players.map((value)=>{
            return <PlayerItem key={value._id} value={value}/>
        })

        return <div>
            <PlayerForm handleInsert={(data) => this.insertPlayer(data)} handleFind={(id)=>this.findPlayer(id)} handleFindAll={()=>this.findAllPlayer()} handleDelete={(id)=>this.deletePlayer(id)} handleEdit={(id,data)=>this.editPlayer(id,data)}/>
            {playerList}
        </div>
    }
}

export default PlayerPage