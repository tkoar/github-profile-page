import React, { Component } from 'react'
import cuid from 'cuid'

class Profile extends Component {

  state = {
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

  bio: null
  blog: ""
  company: null
  created_at: "2016-07-18T22:24:50Z"
  email: null
  events_url: "https://api.github.com/users/tkoar/events{/privacy}"
  followers: 3
  followers_url: "https://api.github.com/users/tkoar/followers"
  following: 0
  following_url: "https://api.github.com/users/tkoar/following{/other_user}"
  gists_url: "https://api.github.com/users/tkoar/gists{/gist_id}"
  gravatar_id: ""
  hireable: null
  html_url: "https://github.com/tkoar"
  id: 20525804
  location: "Brookly, NY"
  login: "tkoar"
  name: "Terrance "
  node_id: "MDQ6VXNlcjIwNTI1ODA0"
  organizations_url: "https://api.github.com/users/tkoar/orgs"
  public_gists: 3
  public_repos: 396
  received_events_url: "https://api.github.com/users/tkoar/received_events"
  repos: []
  repos_url: "https://api.github.com/users/tkoar/repos"
  searchTerm: "tkoar"
  site_admin: false
  starred_url: "https://api.github.com/users/tkoar/starred{/owner}{/repo}"
  subscriptions_url: "https://api.github.com/users/tkoar/subscriptions"
  type: "User"
  updated_at: "2018-08-15T13:18:52Z"
  url: "https://api.github.com/users/tkoar"

  render() {
    console.log(this.props);
    return (
      <div className="flex row top-spacing">
        <div className="flex column Profile">
          <a href={!this.props.html_url ? null : this.props.html_url} target='_blank'><img
            alt={this.props.login}
            src={this.props.avatar_url}
            >
          </img></a>
          <div className='name'>
            {"Name: " + this.props.name}
          </div>
          <div className='login'>
            {"Login: " + this.props.login}
          </div>
          <div className='company'>
            {"Company: " + this.props.company}
          </div>
          <div className='email'>
            {"Email: " + this.props.email}
          </div>
          <div className='bio'>
            {"Bio: " + this.props.bio}
          </div>
        </div>
        <div className="flex column start left-spacing" onClick={this.getRepos}>{"Repos:"}
          {this.makeReposList()}
        </div>
      </div>
    )
  }
}

export default Profile
