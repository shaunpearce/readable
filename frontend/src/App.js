import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ViewPosts from './pages/ViewPosts'
import ViewPost from './pages/ViewPost'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import { Header, SideBar } from './components/ui'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'

    console.log(process)
    console.log(process.env)
    console.log(api)
    
    const url = `${api}/categories`
    let token = localStorage.token
    if (!token) 
      token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
      'Accept': 'application/json',
      'Authorization': token
    }

    console.log('fetching from url', url)

    fetch(url, { headers, /*credentials: 'include' */})
      .then( (res) => { return(res.text())})
      .then((data) => {this.setState({backend:data})})
  }

  render() {
    return (
      <div className="App">
            <Header/>
            <div className="content-wrapper">
              <SideBar/>
              <Switch>
                <Route exact path ='/' component={ViewPosts} />
                <Route exact path ='/add-post' component={AddPost} />
                <Route exact path ='/edit-post/:id' component={EditPost} />
                <Route exact path ='/:category' component={ViewPosts} />
                <Route exact path ='/:category/:id' component={ViewPost} />
              </Switch>
            
            </div>
            
      </div>
    )
  }
}

export default App
