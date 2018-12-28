import React from 'react';
import './postList.css';
import axios from 'axios';

class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
      }
    
    componentDidMount() {
        axios.post('http://localhost:8000/')
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
      render(){
        return (
            <div>
                { this.state.persons.map((person,i) =>
                <div className='postList' key={i}>
                    <h5 className='title'>{person.title}</h5>
                    <p className='p'>{person.content}</p>
                </div> 
                )}
            </div>
        );
    }}

export default PostList;