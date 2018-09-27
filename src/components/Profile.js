import React, { Component } from 'react'
import cuid from 'cuid'

class Profile extends Component {

  state = {
    repos: [],
    name: '',
    login: '',
    company: '',
    email: '',
    location: '',
    showRepos: false
  }

  getRepos = () => {
    fetch(this.props.repos_url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({repos: json, showRepos: true})
      })
  }

  makeDetails = () => {
    let details = ["name", "login", "company", "email", "location"]
    let jsxDetails = []
    for(let key in this.props) {
      let value = this.props[`${key}`]
      if (details.includes(key) && value) {
        jsxDetails.push(
          <div key={cuid()}>
            {`${key}: ${value}`}
          </div>
        )
      }
    }
    return jsxDetails
  }

  makeReposList = () => {
    if (this.state.showRepos) {
      return this.state.repos.map(el => <a href={el.html_url} target='_blank'><li>{el.name}</li></a>)
    } else {
      return null
    }
  }


  render() {
    console.log(this.state);
    return (
      <div className="flex row">
        <div className="flex column Profile">
          <img
            alt={this.props.login}
            src={this.props.avatar_url}
            >
          </img>
          {this.makeDetails()}
        </div>
        <div className="flex column margin">
        <div className="title" onClick={this.getRepos}>{"Repos:"}</div>
          {this.makeReposList()}
        </div>
      </div>
    )
  }
}

export default Profile
