import React, { Component } from 'react'
import './OpenTasks.css'
import TaskDesc from './TaskDesc.js'
import Options from './Options.js'

class OpenTasks extends Component {
  constructor () {
    super()
    this.state = {
      showOptions: false
    }
  }
  markTaskComplete () {
    this.props.onCompletion(this.props.task.id)
  }

  changeTask (updatedTask) {
  	this.props.updateTaskDesc(this.props.task.id, updatedTask)
  }

  changeTaskNotes (updatedNotes) {
  	this.props.updateTaskNotes(this.props.task.id, updatedNotes)
  }

  changeTaskDue (updatedDue) {
  	this.props.updateTaskDue(this.props.task.id, updatedDue)
  }

  changeTaskPrior (updatedPrior) {
  	this.props.updateTaskPrior(this.props.task.id, updatedPrior)
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
          onClick={() => this.markTaskComplete()}
        />
        <TaskDesc task={this.props.task.desc} onUpdate={(updatedTask) => this.changeTask(updatedTask)} />
        <button onClick={() => this.changeOptionsView()}>^</button>
        {this.state.showOptions ? <Options
          notes={this.props.task.notes}
          dueDate={this.props.task.dueDate}
          priority={this.props.task.priority}
          editable
          onUpdateNotes={(updatedNotes) => this.changeTaskNotes(updatedNotes)}
          onUpdateDue={(updatedDue) => this.changeTaskDue(updatedDue)}
          onUpdatePrior={(updatedPrior) => this.changeTaskPrior(updatedPrior)}
        /> : ''}
        <button onClick={() => this.deleteTask()}>X</button>
      </div>
    )
  }
}

export default OpenTasks
