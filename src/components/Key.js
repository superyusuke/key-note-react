import React from 'react'
import styles from './Keyboard.css'

const Key = ({text, onChange, keyboardIndex, keyNum, state}) => {
  const payload = {
    keyboardIndex,
    keyNum
  }

  const textState = state.keyboards[keyboardIndex][keyNum]
  console.log(textState)

  const localOnChange = (e) => {
    e.preventDefault()
    payload.text = e.target.value
    onChange(payload)
  }

  return (
    <input className={styles.keyInput} onChange={e => localOnChange(
      e)} value={text} name={keyboardIndex} data={keyNum}/>
  )
}

export default Key