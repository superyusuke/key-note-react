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
  switch (action.type) {
    case 'UPDATE_KEY':
      console.log(`${action.text} KB:${action.keyboardNum} Key:${action.keyNum}`)
      return state

    case true:
      return true
    default:
      return state
  }
}

export default keys