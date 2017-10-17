import React from 'react'
import Keyboard from '../components/Keyboard'

const KeyboardsArea = ({keyboards}) => {
  const Keyboards = () => {
    return keyboards.map((keys, index) => {
      return (<li key={index}><Keyboard keys={keys}/></li>)
    })
  }
  return (
    <ul>
      <Keyboards/>
    </ul>
  )
}

export default KeyboardsArea