const initialstate = {
  status: 'all',
  colors: [],
}

export default function filtersReducer(state = initialstate, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged':
      return { ...state, status: action.payload }
    case 'COLORFILTER':
      if (action.payload.action == 'remove') {
        return {
          ...state,
          colors: state.colors.filter((item) => item !== action.payload.color),
        }
      } else if (action.payload.action == 'add') {
        return {
          ...state,
          colors: [...state.colors, action.payload.color],
        }
      }

      return { ...state }
  }

  return { ...state }
}
