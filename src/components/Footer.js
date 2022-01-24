import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableColors } from '../constant/availableColor'

const Footer = () => {
  const todoList = useSelector((state) => state.todos.todoList)
  const colors = useSelector((state) => state.filters.colors)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const handleMarkAllCompleted = () => {
    dispatch({ type: 'MARKALLCOMPLETED' })
  }

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEARCOMPLETED' })
  }

  const handleClick = (e) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: e.target.value })
  }

  const handleChange = (e) => {
    if (colors.includes(e.target.name)) {
      dispatch({
        type: 'COLORFILTER',
        payload: { color: e.target.name, action: 'remove' },
      })
    } else {
      dispatch({
        type: 'COLORFILTER',
        payload: { color: e.target.name, action: 'add' },
      })
    }
  }

  useEffect(() => {
    setCount(todoList.filter((item) => item.isComplete == false).length)
  }, [todoList])
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={handleMarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="button" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>

      <div className="todo-count">
        <h5>Remaining Todos</h5>
        <strong>{count}</strong> item left
      </div>

      <div className="filters statusFilters">
        <h5>Filter by Status</h5>
        <ul>
          <li key="all">
            <button value="all" onClick={handleClick}>
              All
            </button>
          </li>
          <li key="active">
            <button value="active" onClick={handleClick}>
              Active
            </button>
          </li>
          <li key="complete">
            <button value="complete" onClick={handleClick}>
              Complete
            </button>
          </li>
        </ul>
      </div>
      <div className="filters colorFilters">
        <h5>Filter by Color</h5>
        <form className="colorSelection">
          {availableColors.map((color) => {
            return (
              <div key={color}>
                <input
                  type="checkbox"
                  name={color}
                  checked={colors.includes(color)}
                  onChange={handleChange}
                />
                <span
                  className="color-block"
                  style={{
                    backgroundColor: color,
                  }}
                ></span>
                {color}
              </div>
            )
          })}
        </form>
      </div>
    </footer>
  )
}

export default Footer
