import { combineReducers } from 'redux'

import todosReducer from './todoReducer'
import filtersReducer from './filterReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
