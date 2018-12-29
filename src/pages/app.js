import React,{Component} from 'react';
import '../style.css'
import PostList from '../components/postList/postList';

class App extends Component {
    render() {
      return (
        <div>
            <PostList />
        </div>
      );
    }
  }

export default App;