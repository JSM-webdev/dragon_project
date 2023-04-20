import { useState } from 'react'
import './index.css'

export function DragonCard(props) {
  const [clicks, setClicks] = useState(0)
  console.log(props)
  return (
    <div 
    className={props.type + ' dragon-card'} 
    onClick={() => setClicks(clicks + 1)} >
      <h1>{props.type}</h1>
      <div>
        {props.icon} 
        <span>{clicks}</span>
      </div>
    </div>
  )
}