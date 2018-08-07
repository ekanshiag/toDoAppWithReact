import React, { Component } from 'react'
import './ClosedTasks.css'

class ClosedTasks extends Component {
  render () {
    return (
      <div>
        {this.props.task.desc}
      </div>
    )
  }
}

export default ClosedTasks
