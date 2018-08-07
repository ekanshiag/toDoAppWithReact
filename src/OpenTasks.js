import React, { Component } from 'react'
import './OpenTasks.css'

class OpenTasks extends Component {
  render () {
    return (
      <div>
        {this.props.task.desc}
      </div>
    )
  }
}

export default OpenTasks
