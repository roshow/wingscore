import React, { Component } from 'react'

class PlayerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Player Name:
          <input type="text" value={ this.state.value } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

import { connect } from 'react-redux'; 

const consoleValue = value => {
  console.log(value)
  return {
    type: 'ADD_PLAYER',
    payload: {
      name: value
    }
  }
}


export default connect(null, { onSubmit: consoleValue })(PlayerForm)
