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
      allTasks: allTasks,
      taskId: 0
    }
  }
  addNewTask (task) {
    let tasks = this.state.allTasks.slice()
    let id = this.state.taskId
    tasks.unshift({'id': id, 'desc': task, 'category': 'open'})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks, taskId: id + 1})
  }

  onClickingTaskCheckbox (checkedTaskId) {
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === checkedTaskId })
    tasks[changedIndex].category = tasks[changedIndex].category === 'open' ? 'closed' : 'open'
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }

  onUpdateTask (id, newDesc) {
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === id })
    tasks[changedIndex].desc = newDesc
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }

  deleteTask (id) {
    let tasks = this.state.allTasks.slice()
    tasks = tasks.filter(t => { return t.id !== id })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }
  render () {
    const tasks = this.state.allTasks.slice()
    const OpenTasksList = tasks.filter(t => { return t.category === 'open' }
    ).map((t) => <OpenTasks
      key={t.id}
      task={t}
      onCompletion={(id) => this.onClickingTaskCheckbox(id)}
      updateTask={(id, newDesc) => this.onUpdateTask(id, newDesc)}
      onDelete={(id) => this.deleteTask(id)} />)
    const ClosedTasksList = tasks.filter(t => { return t.category === 'closed' }
    ).map((t) => <ClosedTasks
      key={t.id}
      task={t}
      onUndo={(id) => this.onClickingTaskCheckbox(id)}
      onDelete={(id) => this.deleteTask(id)} />)
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
