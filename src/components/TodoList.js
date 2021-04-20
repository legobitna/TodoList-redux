import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList)
  const filter = useSelector((state) => state.filters)
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (filter.status === 'all') {
      setFilteredList(
        todoList.filter((item) => {
          if (filter.colors.length > 0) {
            return filter.colors.includes(item.color)
          }
          return true
        })
      )
    } else if (filter.status === 'active') {
      setFilteredList(
        todoList.filter((item) => {
          if (item.isComplete == false) {
            if (filter.colors.length > 0) {
              return filter.colors.includes(item.color)
            }
            return true
          }
          return false
        })
      )
    } else {
      setFilteredList(
        todoList.filter((item) => {
          if (item.isComplete == true) {
            if (filter.colors.length > 0) {
              return filter.colors.includes(item.color)
            }
            return true
          }
          return false
        })
      )
    }
  }, [filter, todoList])
  const renderedListItems = filteredList.map((item) => {
    return <TodoListItem todo={item} />
  })
  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
