import React, { Component } from 'react'
import './OpenTasks.css'
import TaskDesc from './TaskDesc.js'

class OpenTasks extends Component {
  markTaskComplete () {
    this.props.onCompletion(this.props.task.id)
  }

  changeTask (updatedTask) {
  	this.props.updateTask(this.props.task.id, updatedTask)
  }

  render () {
    return (
      <div>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskComplete()}
        />
        <TaskDesc task={this.props.task.desc} onUpdate={(updatedTask) => this.changeTask(updatedTask)} />

      </div>
    )
  }
}

export default OpenTasks
