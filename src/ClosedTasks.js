import React, { Component } from 'react'
import './ClosedTasks.css'
import Options from './Options.js'

class ClosedTasks extends Component {
  constructor () {
    super()
    this.state = {
      showOptions: false
    }
  }
  markTaskOpen () {
    var data = {
      'category': 'Open'
    }

    var myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    
    fetch('http://localhost:3000/closedTasks/patch/' + this.props.task._id, myInit)
      .then(response => {
        this.props.onUpdate()
      })
  }
  deleteTask () {
    var myInit = {
      method: "POST"
    }

    fetch('http://localhost:3000/closedTasks/delete/' + this.props.task._id, myInit)
      .then(response => {
        this.props.onUpdate()
      })
  }

  changeOptionsView () {
    let showOptionsState = this.state.showOptions
    this.setState({
      showOptions: !showOptionsState
    })
  }
  render () {
    return (
      <div className='completedTasks'>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskOpen()}
          defaultChecked />
        <label id='taskDesc'>{this.props.task.desc}</label>
        <button
          id='delete'
          onClick={() => this.deleteTask()}>X</button>
        <button onClick={() => this.changeOptionsView()}>^</button>
        {this.state.showOptions ? <Options
          notes={this.props.task.notes}
          dueDate={this.props.task.dueDate}
          priority={this.props.task.priority}
          editable={false}
        /> : ''}
      </div>
    )
  }
}

export default ClosedTasks
