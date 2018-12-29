import React,{Component} from 'react';
import axios from 'axios';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            today: ''
        }
    }

    formSubmit = (event) => {
        /* NOW DATE */ 
        let today = new Date(); let hh = today.getHours();
        let mi = today.getMinutes(); let dd = today.getDate();
        let mm = today.getMonth()+1; /* January is 0! */ let yyyy = today.getFullYear();
        if(dd<10) dd = '0'+dd;
        if(mm<10) mm = '0'+mm;
        if(mi<10) mi = '0'+mi;
        if(hh<10) hh = '0'+hh;
        today = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mi;

        /* AXIOS HTTP REQUESTS */
        this.setState({today}, () => {
            axios.post('http://localhost:8000/add-post', this.state)
            .then(res => {
                console.log(res.data);
                if(res.data.success === true){
                    this.props.history.push(res.data.redirectUrl);
                }
            })
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
        <div>
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

export default AddPost;