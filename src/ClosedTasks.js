import React, { Component } from 'react'
import './ClosedTasks.css'

class ClosedTasks extends Component {
  markTaskOpen () {
    this.props.onUndo(this.props.task.id)
  }
  deleteTask () {
  	this.props.onDelete(this.props.task.id)
  }
  render () {
    return (
      <div>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskOpen()} />
        <label>{this.props.task.desc}</label>
        <button onClick={() => this.deleteTask()}>X</button>
      </div>
    )
  }
}

export default ClosedTasks
