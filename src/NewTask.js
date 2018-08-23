import React from 'react'
import './NewTask.css'

function onAddNewTask (event, fn) {
  if (event.key === 'Enter') {
    let taskValue = event.target.value.trim()
  	if (/\w+/.test(taskValue)) {
      var data = {
        'desc': taskValue
      }

      var myInit = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      fetch('http://localhost:3000/openTasks', myInit)
        .then(response => {

      console.log(response)
          fn()
        })
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
      onKeyPress={(event) => onAddNewTask(event, props.onUpdate)}
    />)
}
