import React from 'react'
import { useDispatch } from 'react-redux'
import { availableColors } from '../constant/availableColor'

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleCompletedChanged = (e) => {
    dispatch({ type: 'TOGGLECOMPLETE', payload: e.target.value })
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {c}
    </option>
  ))

  const handleColorChanged = (e) => {
    dispatch({
      type: 'COLORCHANGE',
      payload: { color: e.target.value, id: todo.id },
    })
  }
  return (
    <li key={todo.id} id={todo.id}>
      <div className="view">
        <input
          className="toggle"
          value={todo.id}
          type="checkbox"
          checked={todo.isComplete}
          onChange={handleCompletedChanged}
        />
        <div className="todo-text">{todo.body}</div>
        <select
          className="colorPicker"
          value={todo.color}
          style={{ color: todo.color }}
          onChange={handleColorChanged}
        >
          <option value=""></option>
          {colorOptions}
        </select>
      </div>
    </li>
  )
}

export default TodoListItem
