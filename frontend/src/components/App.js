import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts'
import Post from './Post'
import AddPost from './AddPost'
import EditPost from './EditPost'
import '../App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'
    const url = `${api}/posts`;
    let token = localStorage.token
    if (!token) 
      token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
      'Accept': 'application/json',
      'Authorization': token
    }

    console.log('fetching from url', url);

    fetch(url, { headers, /*credentials: 'include' */})
      .then( (res) => { return(res.text())})
      .then((data) => {this.setState({backend:data});});
  }

  render() {
    return (
      <div className="App">
            <Switch>
              <Route exact path ='/' component={Posts} />
              <Route exact path ='/add-post' component={AddPost} />
              <Route exact path ='/edit-post/:id' component={EditPost} />
              <Route exact path ='/:category/:id' component={Post} />
            </Switch>
      </div>
    );
  }
}

export default App;
