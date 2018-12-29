import React from 'react';
import axios from 'axios';
import './post.css';

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            post : []
        };
    }
    /* HTTP REQUEST FOR POST */
    componentDidMount() {
        const url = this.props.match.params.id
        axios.post('http://localhost:8000/fetch-post',{'url':url})
        .then(res => {
            const post = res.data;
            this.setState({ post });                                                   
        })
      }
      render(){
        return (
            <div>
                { this.state.post.map((element,i) =>
                    <div key={i}>
                        <div className='row başlık'>
                            <h2>{(element.title).toUpperCase()}</h2>
                        </div>
                        <div className='te-d'>
                            <p className='text'>{element.text}</p>
                        </div>
                    </div>
                )}                
            </div>
        );
    }}

export default Post;