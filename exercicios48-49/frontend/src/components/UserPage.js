import React from 'react'
import axios from 'axios'
import UserItem from './UserItem'
import UserForm from './UserForm'

class UserPage extends React.Component {

    constructor(props){
        super(props)
        this.BASE_URL = "http://localhost:4000/api/users"
        this.state = { users: []}
        this.loadUsers()
    }

    loadUsers = () => {
        axios.get(this.BASE_URL).then((response) => {
            this.setState({ users: response.data })
        }).catch((error) => {
            console.error(error)
        })
    }

    handleInsert = (data) => {
        console.log(data)
        axios.post(this.BASE_URL, data).then(() => {
            this.loadUsers()
        }).catch((error) => {
            console.error(error)
        })
    }

    handleDelete = (id) => {
        console.log(id)
        axios.delete(this.BASE_URL + "/" + id).then(() => {
            this.loadUsers()
        })
    }

    render(){

        var userList = this.state.users.map((value) => {
            return <UserItem key={value._id} value={value} handleDelete={(id)=> this.handleDelete(id)}/>
        })

        return <div>
            <UserForm handleAction={(data) => this.handleInsert(data)}/>
            {userList}
        </div>
    }
}

export default UserPage