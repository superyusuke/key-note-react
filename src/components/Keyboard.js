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

  const KeyInput = ({text}) => {
    return (
      <input className={styles.keyInput} value={text}/>
    )
  }

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
          <KeyInput text={key.text}/>
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