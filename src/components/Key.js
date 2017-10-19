import React from 'react'
import styles from './Keyboard.css'

const Key = ({text, onChange, keyboardIndex, keyNum}) => {
  const payload = {
    keyboardIndex,
    keyNum
  }

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