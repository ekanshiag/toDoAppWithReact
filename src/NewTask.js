import React, { Component } from 'react'
import './NewTask.css'

class NewTask extends Component {
  onAddNewTask (event) {
  	if (event.key === 'Enter') {
  		let taskValue = event.target.value.trim()
  		if (/\w+/.test(taskValue)) {
        this.props.onChange(taskValue)
  		} else {
  			alert('Invalid task')
  		}
  		event.target.value = ''
    }
  }
  render () {
    return (
      <input
        className='newTask'
        type='text'
        placeholder='+   New Task'
        onKeyPress={(event) => this.onAddNewTask(event)}
      />)
  }
}

export default NewTask
