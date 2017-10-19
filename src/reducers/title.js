const title = (state = 'title', action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      console.log(action.type)
      return state + '.'
    default:
      return state
  }
}

export default title