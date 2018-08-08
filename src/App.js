import React, { Component } from 'react'
import './App.css'
import OpenTasks from './OpenTasks.js'
import ClosedTasks from './ClosedTasks.js'
import NewTask from './NewTask.js'

class App extends Component {
  constructor () {
    super()
    let allTasks = [], id = 0
    if (localStorage.getItem('tasks') !== null) {
      allTasks = JSON.parse(localStorage.getItem('tasks'))
      id = allTasks[0].id + 1
    }
    this.state = {
      allTasks: allTasks,
      taskId: id
    }
  }
  addNewTask (task) {
    let tasks = this.state.allTasks.slice()
    let id = this.state.taskId
    tasks.unshift({'id': id, 'desc': task, 'category': 'open', 'notes': '', 'dueDate': '', 'priority': ''})
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

  onUpdateTaskDesc (id, newDesc) {
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === id })
    tasks[changedIndex].desc = newDesc
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }

  onUpdateTaskNotes (id, newNotes) {
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === id })
    tasks[changedIndex].notes = newNotes
    console.log(tasks[changedIndex].notes)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }

  onUpdateTaskDue (id, newDue) {
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === id })
    tasks[changedIndex].dueDate = newDue
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({allTasks: tasks})
  }

  onUpdateTaskPrior (id, newPrior) {
    console.log(newPrior)
    let tasks = this.state.allTasks.slice()
    let changedIndex = tasks.findIndex((t) => { return t.id === id })
    tasks[changedIndex].priority = newPrior
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
      updateTaskDesc={(id, newDesc) => this.onUpdateTaskDesc(id, newDesc)}
      updateTaskNotes={(id, newNotes) => this.onUpdateTaskNotes(id, newNotes)}
      updateTaskDue={(id, newDue) => this.onUpdateTaskDue(id, newDue)}
      updateTaskPrior={(id, newPrior) => this.onUpdateTaskPrior(id, newPrior)}
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
