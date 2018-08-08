import React, { Component } from 'react'

class Options extends Component {
  render () {
    return (
      <div>
        <label id='noteLabel' for='taskNote'>Notes</label>
        <textarea
          id='taskNote'
          textContent={this.props.notes}
        />
        <label id='dueLabel' for='taskDueDate'>Due Date</label>
        <input
          type='Date'
          id='taskDueDate'
          value={this.props.dueDate}
        />
        <label id='priorLabel' for='taskPriority'>Priority</label>
        <select
          id='taskPriority'
          value={this.props.priority}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    )
  }
}

export default Options
