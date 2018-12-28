import React,{Component} from 'react';
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }
    formSubmit = (event) => {
        axios.post('http://localhost:8000/add-post', this.state)
          .then(res => {
            console.log(res.data)
          })
        event.preventDefault();
    }
    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }
    handleText = (event) => {
        this.setState({text: event.target.value})
    }
    render() {
      return (
        <div className="container">
        <form onSubmit={this.formSubmit}>
            Title<br/>
            <input type="text" name="title" onChange={this.handleTitle}/>
            <br/>
            Content<br/>
            <input type="text" name="text" onChange={this.handleText}/>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </form> 
        </div>
      );
    }
  }