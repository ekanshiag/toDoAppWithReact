import React, { Component } from 'react'
import './App.css'
import OpenTasks from './OpenTasks.js'
import ClosedTasks from './ClosedTasks.js'
import NewTask from './NewTask.js'

class App extends Component {
  constructor () {
    super()
    let allTasks = []
    if (localStorage.getItem('tasks') !== null) {
      allTasks = JSON.parse(localStorage.getItem('tasks'))
    }
    this.state = {
      allTasks: allTasks
    }
  }
  render () {
    const tasks = this.state.allTasks.slice()
    const OpenTasksList = tasks.filter(t => { return t.category === 'open' }).map((t) => <OpenTasks task={t} />)
    const ClosedTasksList = tasks.filter(t => { return t.category === 'closed' }).map((t) => <ClosedTasks task={t} />)
    return (
      <div>
        <h1>My tasks</h1>
        <div>{OpenTasksList}</div>
        <NewTask />
        <h1>Done</h1>
        <div>{ClosedTasksList}</div>
      </div>)
  }
}

export default App
