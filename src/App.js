import React, { Component } from 'react'
import './App.css'
import OpenTasks from './OpenTasks.js'
import ClosedTasks from './ClosedTasks.js'
import NewTask from './NewTask.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      allTasks: []
    }
    
    fetch('http://localhost:3000/allTasks/')
      .then((response) => {
        return response.json()
      })
      .then((tasks) => {
        this.setState({allTasks: tasks})
      })

  }

  updateTaskList () {
    fetch('http://localhost:3000/allTasks/')
      .then((response) => {
        return response.json()
      })
      .then((tasks) => {
        this.setState({allTasks: tasks})
      })
  }

  render () {
    const tasks = this.state.allTasks.slice()
    const OpenTasksList = tasks.filter(t => { return t.category === 'Open' })
      .map((t) => <OpenTasks
        key={t._id}
        task={t}
        onUpdate = {() => this.updateTaskList()}/>)
    const ClosedTasksList = tasks.filter(t => { return t.category === 'Closed' })
      .map((t) => <ClosedTasks
        key={t._id}
        task={t}
        onUpdate={() => this.updateTaskList()}/>)
    return (
      <div className='App'>
        <h1>My tasks</h1>
        <div>{OpenTasksList}</div>
        <NewTask onUpdate={() => this.updateTaskList()} />
        <h1>Done</h1>
        <div>{ClosedTasksList}</div>
      </div>)
  }
}

export default App
