import React, { Component } from 'react'
import Profile from './components/Profile'
import Search from './components/Search'

class App extends Component {

  state = {

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
      .then(resp => resp.json())
      .then(json => {
        this.setState({...json})
      })
  }

  updateSearchTerm = (term) => this.setState({searchTerm: term}, this.getFullProfile)

  componentDidMount() {

  }

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
