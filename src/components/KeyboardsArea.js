import React from 'react'
import KeyboardContainer from '../containers/KeyboardContainer'
import styles from './KeyboardsArea.css'

const KeyboardsArea = ({keyboards}) => {
  const Keyboards = () => {
    return keyboards.map((keys, index) => {
      return (<li key={index}><KeyboardContainer keyboardIndex={index} keys={keys}/></li>)
    })
  }
  return (
    <ul className={styles.list}>
      <Keyboards/>
    </ul>
  )
}

export default KeyboardsArea