const octave = [
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true
]

const keys = (state = octave, action) => {
  switch (action) {
    case true:
      return true
    default:
      return state
  }
}

export default keys