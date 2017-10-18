export const updateKey = payload => {
  return {
    type: 'UPDATE_KEY',
    text: payload.text,
    keyboardNum: payload.keyboardIndex,
    keyNum: payload.keyNum,
  }
}