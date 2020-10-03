import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import API from '../../../services';

class DetailPost extends Component {
    state = {
        post : []
    }

    componentDidMount () {
        let id = this.props.match.params.id;
        API.getNewsDetail(id)
        .then(res => {
            // console.log('hasil res',res)
            this.setState ({
                post: res
            })
        })
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
                                {/* <button className="update" onClick={() => props.update(props.data)}>Update</button>
                                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button> */}
                            </div>
                        </div>
                    )
                })
            }
            </Fragment>   
        )
    }
}

export default DetailPost;