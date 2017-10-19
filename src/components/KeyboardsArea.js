import React from 'react'
import KeyboardContainer from '../containers/KeyboardContainer'
import styles from './KeyboardsArea.css'

const KeyboardsArea = ({keyboards,title,onClick}) => {
  const Keyboards = () => {
    return keyboards.map((keys, index) => {
      return (<li key={index}><KeyboardContainer keyboardIndex={index} keys={keys}/></li>)
    })
  }

  return (
    <div>
      <button onClick={onClick}>changeTitle</button>
      <h1>{title}</h1>
      <ul className={styles.list}>
        <Keyboards/>
      </ul>
    </div>

  )
}

export default KeyboardsArea