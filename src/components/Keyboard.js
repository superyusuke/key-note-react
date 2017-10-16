import React from 'react'
import styles from './Keyboard.css'

const Keyboard = ({keys}) => {
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

  const Keys = () => {
    return keys.map((key, index) => {

      const css = octave[index] ? styles.white : styles.black
      return <li key={index} className={css}>{key}</li>
    })
  }
  return (
    <div>
      <ul className={styles.list}>
        <Keys/>
      </ul>
    </div>
  )
}

export default Keyboard