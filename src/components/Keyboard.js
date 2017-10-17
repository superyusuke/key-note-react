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
    true,
  ]

  const doubleOctave = [...octave, ...octave]

  const Keys = () => {
    return keys.map((key, index) => {

      const css = doubleOctave[index] ? styles.white : styles.black
      return <li key={index} className={css}>{key}</li>
    })
  }
  return (
    <ul className={styles.list}>
      <Keys/>
    </ul>
  )
}

export default Keyboard