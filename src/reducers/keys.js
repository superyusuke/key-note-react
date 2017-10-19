let key1 = {
  text: '1',
  on: false,
}

let key2 = {
  text: '',
  on: false,
}

let keyTrue = {
  text: '',
  on: true,
}

const doubleOctave = [
  keyTrue,
  key2,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
  key1,
]

const defaultKeyboards = [
  doubleOctave, doubleOctave, doubleOctave,
]

const keys = (state = defaultKeyboards, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      const keyboardNum = action.keyboardNum
      const keyNum = action.keyNum
      const updateText = action.text
      const updateState = (keyboardNum, keyNum, updateText) => {
        return state.map((keys, keyboardIndex) => {
          return keys.map((key, keyIndex) => {
            if (keyboardIndex === keyboardNum && keyIndex === keyNum) {
              key = {
                ...key,
                text: updateText
              }
            }
            return key
          })
        })
      }

      return updateState(keyboardNum, keyNum, updateText)

    case true:
      return true
    default:
      return state
  }
}

export default keys