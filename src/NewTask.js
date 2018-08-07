import React, { Component } from 'react'
import './NewTask.css'

class NewTask extends Component {
  render () {
    return (
      <input
        type='text'
        placeholder='+   New Task'
      />)
  }
}

export default NewTask
