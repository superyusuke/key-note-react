import React from 'react'
import KeyboardContainer from '../containers/KeyboardContainer'

const KeyboardsArea = ({keyboards}) => {
  const Keyboards = () => {
    return keyboards.map((keys, index) => {
      return (<li key={index}><KeyboardContainer keys={keys}/></li>)
    })
  }
  return (
    <ul>
      <Keyboards/>
    </ul>
  )
}

export default KeyboardsArea