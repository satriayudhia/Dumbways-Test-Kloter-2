import React, {Component} from 'react';
import API from '../../../services'
import './NewsUser.css';

class NewsUser extends Component {
    state = {
        name: '',
        email: '',
        role: ''
    }

    handleSavePost = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            role: this.state.role
        }
        API.postUser(data)
        .then(this.setState({
                name: '',
                email: '',
                role: ''
            })
        )
    }

    onInputChange = (e, type) => {
        this.setState ({
            [type]: e.target.value
        })
    }

    render() {
        return (
            <div className="input-form">
                <p className="title">INPUT NEW USER</p>

                <p className="input-title">User Name</p>
                <input type="text" value={this.state.name} placeholder="input name" onChange={(e) => this.onInputChange(e, 'name')}/>
                
                <p className="input-date">Email</p>
                <input type="text" value={this.state.email} placeholder="input email" onChange={(e) => this.onInputChange(e, 'email')}/>
                
                <p className="input-user">Role</p>
                <input type="text" value={this.state.role} placeholder="input role" onChange={(e) => this.onInputChange(e, 'role')}/>
                
                <hr/>
                <div className="btn-center">
                    <button onClick={this.handleSavePost}>SIMPAN</button>
                </div>
                
            </div>
        )
    }
}

export default NewsUser;