const defaultKeys = [
  0,1,2,3,4,5,6,7,8,9,10,11
]

const keys = (state = defaultKeys, action) => {
  switch (action) {
    case true:
      return true
    default:
      return state
  }
}

export default keys