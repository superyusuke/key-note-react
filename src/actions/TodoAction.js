export const updateText = payload => {
  return {
    type: 'UPDATE_TEXT',
    text: payload.text,
    keyboardNum: payload.keyboardIndex,
    keyNum: payload.keyNum,
  }
}