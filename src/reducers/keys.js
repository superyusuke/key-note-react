let key = {
  text: 'text',
  on: false
}

let keyTrue = {
  text: 'TEXT',
    on: true
}

const doubleOctave = [
  keyTrue,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key,key
]

const defaultKeyboards = [
  doubleOctave, doubleOctave, doubleOctave
]

const keys = (state = defaultKeyboards, action) => {
  switch (action) {
    case true:
      return true
    default:
      return state
  }
}

export default keys