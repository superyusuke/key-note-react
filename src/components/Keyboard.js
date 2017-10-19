import React from 'react'
import styles from './Keyboard.css'
import KeyContainer from '../containers/KeyContainer'

const Keyboard = ({keys, onChange, keyboardIndex}) => {
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
      //const css = doubleOctave[index] ? styles.white : styles.black
      //const css = !key.on ? styles.white : styles.black

      const css = () => {
        if (doubleOctave[index] && !key.on) {
          return styles.white
        }

        if (doubleOctave[index] && key.on) {
          return styles.whiteOn
        }

        if (!doubleOctave[index] && !key.on) {
          return styles.black
        }

        if (!doubleOctave[index] && key.on) {
          return styles.blackOn
        }
      }

      return (
        <li key={index} className={css()}>
          <KeyContainer keyboardIndex={keyboardIndex} keyNum={index} text={key.text} onChange={onChange}/>
        </li>
      )
    })
  }
  return (
    <ul className={styles.list}>
      <Keys/>
    </ul>
  )
}

export default Keyboard