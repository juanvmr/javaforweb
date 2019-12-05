import React from 'react'
import axios from 'axios'
import SkinForm from './SkinForm'
import SkinItem from './SkinItem'

class SkinPage extends React.Component{
    constructor(props){
        super(props)
        this.state = [{}]
        this.BASE_URL = "http://localhost:3000/api/skin"
    }

    loadItems = (data)=>{
        this.setState({users : data})
    }

    insertSkin = (data)=>{
        axios.post(this.BASE_URL, data).then(()=>{
            console.log("Skin cadastrado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    deleteSkin = (id)=>{
        axios.delete(this.BASE_URL+"/"+id).then(()=>{
            console.log("Skin removido")
        }).catch(()=>{
            console.error("Erro: "+error)
        })
    }

    editSkin = (id, data)=>{
        axios.put(this.BASE_URL+"/"+id, data).then(()=>{
            console.log("Skin editado")
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findSkin = (id)=>{
        axios.get(this.BASE_URL+"/"+id).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    findAllSkin = ()=>{
        axios.get(this.BASE_URL).then((data)=>{
            console.log(data)
            this.loadItems(data)
        }).catch((error)=>{
            console.error("Erro: "+error)
        })
    }

    render(){
        var skinList = this.state.users.map((value)=>{
            return <SkinItem key={value._id} value={value}/>
        })

        return <div>
            <SkinForm handleInsert={(data) => this.insertSkin(data)} handleFind={(id)=>this.findSkin(id)} handleFindAll={()=>this.findAllSkin()} handleDelete={(id)=>this.deleteSkin(id)} handleEdit={(id,data)=>this.editSkin(id,data)}/>
            {skinList}
        </div>
    }
}

export default SkinPage