import React from 'react'
import styles from './Keyboard.css'

const Keyboard = ({keys}) => {
  const Keys = () => {
    return keys.map((key,index) => {
      if (key) {
        return <li key={index} className={styles.white}>{key}</li>
      }

      if (!key) {
        return <li key={index} className={styles.black}>{key}</li>
      }

      return null
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