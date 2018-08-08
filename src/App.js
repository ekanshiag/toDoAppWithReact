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
  addNewTask (task) {
    let tasks = this.state.allTasks.slice()
    tasks.push({'desc': task, 'category': 'open'})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }
  render () {
    const tasks = this.state.allTasks.slice()
    const OpenTasksList = tasks.filter(t => { return t.category === 'open' }).map((t, i) => <OpenTasks key={i} task={t} />)
    const ClosedTasksList = tasks.filter(t => { return t.category === 'closed' }).map((t, i) => <ClosedTasks key={i} task={t} />)
    return (
      <div>
        <h1>My tasks</h1>
        <div>{OpenTasksList}</div>
        <NewTask onChange={(task) => this.addNewTask(task)} />
        <h1>Done</h1>
        <div>{ClosedTasksList}</div>
      </div>)
  }
}

export default App
