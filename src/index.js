// LIBRARY IMPORTS
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// PAGE AND COMPONENT IMPORTS
import App from './pages/app';
import Post from './pages/post/post';
import AddPost from './pages/add-post';
import Header from './components/header/header';

export default class Index extends Component {
    render() {
      return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='container'>
                  <Route exact path="/post/add" component={AddPost}/>
                  <Route exact path='/:id' component={Post}/>                
                  <Route exact path="/" component={App}/>
                </div>
            </div>
        </BrowserRouter>
      );
    }
  }


ReactDOM.render(<Index />, document.getElementById('root'));