const initialState = {
  todoList: [],
}
let count = 0
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADDTODO':
      //   state.todoList.push(action.paylload)
      state.todoList = [
        ...state.todoList,
        { id: count++, body: action.payload, isComplete: false, color: '' },
      ]

      return { ...state }
    case 'TOGGLECOMPLETE':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id != action.payload) {
            return todo
          }

          return {
            ...todo,
            isComplete: !todo.isComplete,
          }
        }),
      }

    case 'MARKALLCOMPLETED':
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          return { ...item, isComplete: true }
        }),
      }
    case 'CLEARCOMPLETED':
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.isComplete == false),
      }
    case 'COLORCHANGE':
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id != action.payload.id) return item
          return {
            ...item,
            color: action.payload.color,
          }
        }),
      }
  }

  return { ...state }
}
