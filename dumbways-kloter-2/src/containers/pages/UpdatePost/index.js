import React, {Component, Fragment} from 'react';
import API from '../../../services'
import './UpdatePost.css';

class UpdatePost extends Component {
    state = {
        title: '',
        image: '',
        deskripsi: '',
        create_time: new Date(),
        option: []
    }

    handleUpdatePost = () => {
        const data = {
            title: this.state.title,
            image: this.state.image,
            deskripsi: this.state.deskripsi,
            create_time: new Date(),
            user_id: this.state.user_id
        }
        let id = this.props.match.params.id;
        API.updateNews(data, id)
        .then(this.setState({
                title: '',
                image: '',
                deskripsi: ''
            })
        )
    }

    onInputChange = (e, type) => {
        this.setState ({
            [type]: e.target.value
        })
    }

    getUser = () => {
        API.getUserId()
        .then(result => {
            this.setState({
                option: result
            })
            console.log('result', result)
            console.log('option', this.state.option)

        })
    }

    getUpdateAPI = () => {
        API.getUpdate()
        .then(res => {
            this.setState({
                state: res
            })
            console.log('result update', res)
        })
    }

    componentDidMount() {    
        this.getUser()
        this.getUpdateAPI()
    }

    render() {
        return (
            <Fragment>
                <div className="input-form">
                    <p className="title">UPDATE POST</p>

                    <p className="input-title">Title</p>
                    <input type="text" value={this.state.title} placeholder="input title" onChange={(e) => this.onInputChange(e, 'title')}/>
                    
                    <p className="input-image">Image</p>
                    <input type="file" value={this.state.image} onChange={(e) => this.onInputChange(e, 'image')} />
                    
                    <p className="input-deskripsi">Deskripsi</p>
                    <textarea placeholder="input deskripsi" value={this.state.deskripsi} onChange={(e) => this.onInputChange(e, 'deskripsi')}/>
                    
                    <p className="input-date">Date Time</p>
                    <input disabled value={this.state.create_time} onChange={(e) => this.onInputChange(e, 'create_time')}/>
                    
                    <p className="input-date">User Name</p>
                    <select onChange={(e) => this.onInputChange(e, 'user_id')}>
                        {
                        this.state.option.map(post => {
                            return (
                            <option key={post.id} value={post.id} >{post.name}</option>
                            )
                        })
                    }
                    </select>
                    
                    <hr/>
                    <div className="btn-center">
                        <button onClick={this.handleUpdatePost}>UPDATE</button>
                    </div>
                    
                </div>
            </Fragment>
            
        )
    }
}

export default UpdatePost;