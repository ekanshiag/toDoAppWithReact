import React, { Component } from 'react'
import './OpenTasks.css'

class OpenTasks extends Component {
  markTaskComplete () {
    this.props.onCompletion(this.props.task.id)
  }
  render () {
    return (
      <div>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskComplete()} />
        <label>{this.props.task.desc}</label>

      </div>
    )
  }
}

export default OpenTasks
