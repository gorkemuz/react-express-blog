import React from 'react';
import './postList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    handleDelete = (id) => {
        axios.post('http://localhost:8000/delete', {id:id})
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
    }
    componentDidMount() {
        axios.post('http://localhost:8000/fetch-post-list')
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
            console.log(this.state.posts)
        })
      }
      render(){
        return (
            <div>
                { this.state.posts.map((post,i) =>
                <div className='postList' key={i}>
                    <h5 className='title'><Link to={'/post/'+post._id}>{post.title}</Link></h5>
                    <div className='row'>
                        <div className='col-md-10'>
                            <p className='p'>{
                                (post.text.length >= 200) 
                                ? (post.text).substring(0,200)+ '... '
                                : post.text
                            }
                            {
                                (post.text.length >= 200) 
                                ? <Link to={'/post/'+post._id}>more</Link>
                                : null
                            }
                            </p>
                        </div>
                        <div className='col-md-2'>
                            <p className='delete' onClick={() => this.handleDelete(post._id)}>delete</p>
                            <p className='today'>{post.today}</p>
                        </div>
                    </div>
                </div> 
                )}
            </div>
        );
    }}

export default PostList;