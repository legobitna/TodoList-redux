import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  let [text, setText] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.which == 13 && text) {
      dispatch({ type: 'ADDTODO', payload: text })
      setText('')
    }
  }
  return (
    <div>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Header
