import React, {Component} from 'react'
import './Options.css'

class Options extends Component {
  constructor(props){
    super(props)
    this.state = {
      'notes': this.props.notes,
      'dueDate': this.props.dueDate,
      'priority': this.props.priority
    }
  }

  update () {
    var data = {
      'notes': this.state.notes,
      'dueDate': this.state.dueDate,
      'priority': this.state.priority
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
  }

  render() {
    return (
      <div className='optionsView'>
        <label id='noteLabel' htmlFor='taskNote'>Notes</label>
        <textarea
          id='taskNote'
          disabled={!this.props.editable}
          onChange={(event) => {this.setState({'notes': event.target.value})}}
          value={this.state.notes}
        />
        <label id='dueLabel' htmlFor='taskDueDate'>Due Date</label>
        <input
          type='Date'
          id='taskDueDate'
          value={this.state.dueDate}
          min={this.props.dueDate || new Date().toJSON().split('T')[0]}
          disabled={!this.props.editable}
          onChange={(event) => {this.setState({'dueDate': event.target.value})}}
        />
        <label id='priorLabel' htmlFor='taskPriority'>Priority</label>
        <select
          id='taskPriority'
          value={this.state.priority}
          disabled={!this.props.editable}
          onChange={(event) => {this.setState({'priority': event.target.value})}}
        >
          <option value='' disabled>Please select one</option>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
        <button id='saveButton'
          disabled={!this.props.editable}
          onClick={() => this.update()}
          >Save</button>
      </div>
    )
  }

}

export default Options