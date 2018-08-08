import React, { Component } from 'react'

class Options extends Component {
  render () {
    return (
      <div>
        <label id='noteLabel' htmlFor='taskNote'>Notes</label>
        <textarea
          id='taskNote'
          disabled={!this.props.editable}
          onChange={(event) => this.props.onUpdateNotes(event.target.value)}
          value={this.props.notes}
        />
        <label id='dueLabel' htmlFor='taskDueDate'>Due Date</label>
        <input
          type='Date'
          id='taskDueDate'
          value={this.props.dueDate}
          disabled={!this.props.editable}
          onChange={(event) => this.props.onUpdateDue(event.target.value)}
        />
        <label id='priorLabel' htmlFor='taskPriority'>Priority</label>
        <select
          id='taskPriority'
          value={this.props.priority}
          disabled={!this.props.editable}
          onChange={(event) => this.props.onUpdatePrior(event.target.value)}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>
    )
  }
}

export default Options
