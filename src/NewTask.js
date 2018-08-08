import React, { Component } from 'react'
import './NewTask.css'

class NewTask extends Component {
  onAddNewTask (event) {
  	if (event.key === 'Enter') {
  		this.props.onChange(event.target.value)
  		event.target.value = ''
    }
  }
  render () {
    return (
      <input
        type='text'
        placeholder='+   New Task'
        onKeyPress={(event) => this.onAddNewTask(event)}
      />)
  }
}

export default NewTask
