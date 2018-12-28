import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import Post from './pages/add-post';
import Header from './components/header/header';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Index extends Component {
    render() {
      return (
        <BrowserRouter>
            <div className="container">
                <Header />                
                <Route exact path="/" component={App}/>
                <Route path="/add-post" component={Post}/>
            </div>
        </BrowserRouter>
      );
    }
  }


ReactDOM.render(<Index />, document.getElementById('root'));