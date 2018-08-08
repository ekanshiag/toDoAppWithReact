import React, { Component } from 'react'

class TaskDesc extends Component {
  constructor () {
    super()
    this.state = {
      editTask: false
    }
  }

  makeTaskEditable () {
  	this.setState({
  		editTask: true
  	})
  }

  changeTask (event) {
  	if (event.key === 'Enter') {
  		this.setState({
  	  		editTask: false
  	  	})
  	  	this.props.onUpdate(event.target.value)
  	  }
  }

  render () {
  	let TaskDesc
    if (this.state.editTask) {
    	TaskDesc = <input type='text' onKeyPress={(event) => this.changeTask(event)} />
    } else {
    	TaskDesc = <label onDoubleClick={() => this.makeTaskEditable()}>{this.props.task}</label>
    }

    return (TaskDesc)
  }
}

export default TaskDesc
