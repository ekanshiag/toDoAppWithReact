import React from 'react'
import './Options.css'

export default function Options (props) {
  return (
    <div className='optionsView'>
      <label id='noteLabel' htmlFor='taskNote'>Notes</label>
      <textarea
        id='taskNote'
        disabled={!props.editable}
        onChange={(event) => props.onUpdateNotes(event.target.value)}
        value={props.notes}
      />
      <label id='dueLabel' htmlFor='taskDueDate'>Due Date</label>
      <input
        type='Date'
        id='taskDueDate'
        value={props.dueDate}
        disabled={!props.editable}
        onChange={(event) => props.onUpdateDue(event.target.value)}
      />
      <label id='priorLabel' htmlFor='taskPriority'>Priority</label>
      <select
        id='taskPriority'
        value={props.priority}
        disabled={!props.editable}
        onChange={(event) => props.onUpdatePrior(event.target.value)}
      >
        <option value='' disabled>Please select one</option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
    </div>
  )
}
