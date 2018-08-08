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
    this.props.onUndo(this.props.task.id)
  }
  deleteTask () {
  	this.props.onDelete(this.props.task.id)
  }

  changeOptionsView () {
  	let showOptionsState = this.state.showOptions
  	this.setState({
  		showOptions: !showOptionsState
  	})
  }
  render () {
    return (
      <div>
        <input
          type='checkbox'
          value={this.props.task.desc}
          onClick={() => this.markTaskOpen()}
          checked />
        <label>{this.props.task.desc}</label>
        <button onClick={() => this.changeOptionsView()}>^</button>
        {this.state.showOptions ? <Options
          notes={this.props.task.notes}
          dueDate={this.props.task.dueDate}
          priority={this.props.task.priority}
          editable={false}
        /> : ''}
        <button onClick={() => this.deleteTask()}>X</button>
      </div>
    )
  }
}

export default ClosedTasks
