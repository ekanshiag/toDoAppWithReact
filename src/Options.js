import React, { Component } from 'react'

class Options extends Component {
  render () {
    return (
      <div>
        <label id='noteLabel' htmlFor='taskNote'>Notes</label>
        <textarea
          id='taskNote'
          textContent={this.props.notes}
          disabled={!this.props.editable}
        />
        <label id='dueLabel' htmlFor='taskDueDate'>Due Date</label>
        <input
          type='Date'
          id='taskDueDate'
          value={this.props.dueDate}
          disabled={!this.props.editable}
        />
        <label id='priorLabel' htmlFor='taskPriority'>Priority</label>
        <select
          id='taskPriority'
          value={this.props.priority}
          disabled={!this.props.editable}
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
