import { useState } from 'react'
import { DragonCard } from '../dragonCard'
import { MyDice } from '../dice'


const EventComponent = props => {
  const [clicks, setClicks] = useState(0)
  
  return (
    <button style={{color: "white", fontSize: "3rem"}} onClick={() => (setName('bob'), setClicks(clicks+1))}>
      Clicks: {clicks}
    </button>
  )
}

export function MyContent(props) {

  return (
    <>
    <MyDice max={6}/>
      
      <EventComponent />
     <DragonCard type={'fire'} icon={'🐉'}/>
     <DragonCard type={'water'} icon={'🐉'}/>
     <DragonCard type={'air'} icon={'🐉'}/>
     <DragonCard type={'earth'} icon={'🐉'}/>
     <DragonCard type={'fire'} icon={'🐉'}/>
     <DragonCard type={'fire'} icon={'🐉'}/>
    </>
  )
}