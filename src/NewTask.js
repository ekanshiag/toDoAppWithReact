import React from 'react'
import './NewTask.css'

function onAddNewTask (event, fn) {
  if (event.key === 'Enter') {
    let taskValue = event.target.value.trim()
  	if (/\w+/.test(taskValue)) {
      fn(taskValue)
  	} else {
  		alert('Invalid task')
  	}
  	event.target.value = ''
  }
}

export default function NewTask (props) {
  return (
    <input
      className='newTask'
      type='text'
      placeholder='+   New Task'
      onKeyPress={(event) => onAddNewTask(event, props.onChange)}
    />)
}
