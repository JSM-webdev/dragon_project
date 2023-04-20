import { useState } from 'react'
import './index.css'

export function MyDice(props) {
  const [roll, setRoll] = useState(1)
  const [rotate, setRotate] = useState(false)

  const handleClick = () => {
    setRotate(true)
    setRoll(Math.ceil(Math.random() * props.max))
  }
  return (
    <div>
      <div 
      className={`dice max${props.max} d${roll} ${rotate ? 'roll' : ''}`}
      onAnimationEnd={() => setRotate(false) }
      ></div>
      <br />
      <button onClick={handleClick}>Roll the Dice!</button>
      <br />
      <output>{roll}</output>
    </div>
  )
}