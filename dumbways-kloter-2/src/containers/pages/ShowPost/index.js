import React, {Component, Fragment} from 'react';
import API from '../../../services';
import './ShowPost.css';

class ShowPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        API.getNews()
        .then(result => {
            this.setState({
                post: result
            })
            console.log('result',result)
        })
    }

    componentDidMount() {
        this.getPostAPI()
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail/${id}`);
    }

    handleRemove = (data) => {
        API.deleteNews(data)
        this.getPostAPI()
    }

    handleUpdate = (id) => {
        this.props.history.push(`/update/${id}`);
    }

    render() {
        return (
            <Fragment>
            {
                this.state.post.map(post => {
                    return (
                        <div className="post" key={post.id}>
                            <img className="img-thumb" src="https://placeimg.com/200/150/tech" alt=""/>
                            <div className="content">
                                <p className="title" onClick={() => this.handleDetail(post.id)}>{post.title}</p>
                                <p className="desc">{post.image}</p>
                                <p className="desc">{post.deskripsi}</p>
                                <p className="desc">{post.create_time}</p>
                                <p className="desc">{post.user_id}</p>
                                <button className="update" onClick={() => this.handleUpdate(post.id)}>Update</button>
                                <button className="remove" onClick={() => this.handleRemove(post.id)}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            </Fragment>
            
        )
    }
}

export default ShowPost;