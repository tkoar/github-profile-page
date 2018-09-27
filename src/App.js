import React, { Component } from 'react'
import Profile from './components/Profile'
import Search from './components/Search'
import placeHolder from './unknown-icon.png'
import './App.css'

class App extends Component {

  state = {
    searchTerm: null,
    avatar_url: placeHolder,
    repos: [],
    name: '',
    login: '',
    company: '',
    email: '',
    location: '',
  }

  getFullProfile = () => {
    fetch(`https://api.github.com/users/${this.state.searchTerm}`)
      .then(r => {
        if(!r.ok) {
          alert("Oh no! There was an error proccessing your request. Please make sure the github username is correct.")
        } else {
          return r
        }
      })
      .catch(error =>  alert(error))
      .then(resp => resp.json())
      .then(json => {
        this.setState({...json})
      })
  }

  updateSearchTerm = (term) => this.setState({searchTerm: term}, this.getFullProfile)

  render() {
    return (
      <div className="App flex column">
        <Search updateSearchTerm={this.updateSearchTerm}/>
        <Profile {...this.state}/>
      </div>
    );
  }
}

export default App;
