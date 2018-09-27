import React, { Component } from 'react'

class Search extends Component {

  state = {
    searchTerm: ""
  }

  updateSearch = (event) => {
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
  }

  submitSearchTerm = (event) => {
    event.preventDefault()
    this.props.updateSearchTerm(this.state.searchTerm)
  }

  render() {
    return (
      <div className="Search flex center">

        <form onSubmit={this.submitSearchTerm}>
          <input
            type='text'
            value={this.state.searchTerm}
            onChange={this.updateSearch}
            >
          </input>

          <input
            type='submit'
            value='search'
            onClick={this.submitSearchTerm}
            >
          </input>
        </form>

      </div>
    )
  }
}

export default Search
