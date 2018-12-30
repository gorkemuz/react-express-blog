// LIBRARY IMPORTS
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// PAGE AND COMPONENT IMPORTS
import App from './pages/app';
import Post from './pages/post/post';
import AddPost from './pages/add-post';
import Admin from './pages/login/login';
import Header from './components/header/header';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: null
  }}

  updateUser = (userObject) => {
    this.setState(userObject)
  }
  componentDidMount = () => {
    this.getUser()
  }

  getUser = () => {
    axios.get('http://localhost:8000/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
        }
      })
    }
    render() {
      return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='container'>
                  <Route exact path='/admin' render={() =>
                    <Admin
                    updateUser={this.updateUser}
                  />}
                  />                
                  <Route exact path="/add" component={AddPost}/>
                  <Route exact path='/post/:id' component={Post}/>                
                  <Route exact path="/" render={() => 
                    <App 
                    getUser={this.getUser} 
                    />
                  }
                  />
                </div>
            </div>
        </BrowserRouter>
      );
    }
  }


ReactDOM.render(<Index />, document.getElementById('root'));