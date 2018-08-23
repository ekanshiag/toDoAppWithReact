import React, { Component } from 'react'
import './OpenTasks.css'
import TaskDesc from './TaskDesc.js'
import Options from './Options.js'
import moment from 'moment'

class OpenTasks extends Component {
  constructor () {
    super()
    this.state = {
      showOptions: false
    }
  }
  markTaskComplete () {
    var data = {
      'category': 'Closed'
    }

    var myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    
    fetch('http://localhost:3000/openTasks/patch/' + this.props.task._id, myInit)
      .then(response => {
        this.props.onUpdate()
      })
  }

  deleteTask () {
    var myInit = {
      method: "POST"
    }

    fetch('http://localhost:3000/openTasks/delete/' + this.props.task._id, myInit)
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
    let date = this.props.task.dueDate
    let momentDate = moment(date).format('dddd, MMMM Do YYYY')
    return (
      <div className='myTasks'>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskComplete()}
        />
        <TaskDesc id = {this.props.task._id} task={this.props.task.desc} onUpdate={this.props.onUpdate} />
        <button
          id='delete'
          onClick={() => this.deleteTask()}>X</button>
        <button onClick={() => this.changeOptionsView()}>^</button>
        {this.state.showOptions ? <Options
          id={this.props.task._id}
          notes={this.props.task.notes}
          dueDate={this.props.task.dueDate}
          priority={this.props.task.priority}
          editable
          onUpdate = {this.props.onUpdate}
        /> : <label id= 'dateLabel'>{momentDate !== 'Invalid date' ? momentDate : ''}</label>}
      </div>
    )
  }
}

export default OpenTasks
