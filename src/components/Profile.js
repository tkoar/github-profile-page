import React, { Component } from 'react'
import cuid from 'cuid'

class Profile extends Component {

  state = {
    showRepos: null
  }

  getRepos = (event) => {
    event.preventDefault()
    fetch(this.props.repos_url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({repos: json, showRepos: true})
      })
  }

  makeReposList = () => {
    if (this.state.showRepos) {
      return this.state.repos.map(el => <a href={el.html_url} target='_blank'><div className='left-spacing'>{el.name}</div></a>)
    } else {
      return null
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="flex row top-spacing">
        <div className="Profile flex column start">
          <a href={!this.props.html_url ? null : this.props.html_url} target='_blank'><img
            alt={this.props.login}
            src={this.props.avatar_url}
            >
          </img></a>
          <div className='detail name'>
            {"Name: " + this.props.name}
          </div>
          <div className='detail login'>
            {"Login: " + this.props.login}
          </div>
          <div className='detail public_repos'>
            {"Public Repos: " + this.props.public_repos}
          </div>
          <div className='detail company'>
            {"Company: " + this.props.company}
          </div>
          <div className='detail location'>
            {"Location: " + this.props.location}
          </div>
          <div className='detail email'>
            {"Email: " + this.props.email}
          </div>
          <div className='detail bio'>
            {"Bio: " + this.props.bio}
          </div>
        </div>
        {this.props.login != '' ? <div className='flex column start left-spacing'>
          <input type='button' className="flex column start left-spacing" onClick={this.getRepos} value={`Click to see ${this.props.login}'s repositories!'`}>
          </input>
          {this.makeReposList()}
        </div> : null}
      </div>
    )
  }
}

export default Profile
