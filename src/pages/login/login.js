// LIBRARY IMPORTS
import React,{Component} from 'react';
import './login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectTo: ''
        }
    }
    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }
    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios
            .post('http://localhost:8000/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response.data)
                if (response.status === 200) {
                    console.log(this.props)
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
        })}
        /* axios.post('http://localhost:8000/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res);
            if(res.data){
                console.log('success');
            }
            else{
                console.log('fail');
            }
        })
        .catch(error => {
            console.log('errorrrrrr'+error)
        })
    }*/
    render() {
        if(this.state.redirectTo === '/'){
            return <Redirect to='/' />
        }
        else{
      return (
        <div className="wrapper">
            <div className="containe">
                <h1 className='welcome'>Welcome</h1>
                
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" onChange={this.handleUsername}/>
                    <input type="password" placeholder="Password" onChange={this.handlePassword}/>
                    <button type="submit" id="login-button">Login</button>
                </form>
            </div>
            
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      );}
    }
  }


export default Login;