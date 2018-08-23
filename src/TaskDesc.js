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
  	  	let taskValue = event.target.value.trim()
  		if (/\w+/.test(taskValue)) {
        var data = {
          'desc': taskValue
        }

        var myInit = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }

        fetch('http://localhost:3000/openTasks/patch/' + this.props.id, myInit)
          .then(response => {
            this.props.onUpdate()
          })
  		} else {
  			alert('Invalid task')
  		}
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
