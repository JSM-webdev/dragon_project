import { useState } from 'react'
import { Layout } from './components/Layout'
import { DragonCard } from './components/dragonCard'
import { UserListApi } from './components/userListApi'
import { UncontrolledForm, ControlledForm } from './components/myForms'
// import './App.css'
//import { main } from './components/main'
//import { myContent } from './components/myContent'

function App() {
  const [dragons, setDragons] = useState ([{
    type: 'fire',
    icon: '🐉' 
}])

  return (
    <Layout setDragons={setDragons}>
        {/* <Main>
        <section id="Profile">New Profile Page</section>
        </Main> */}
      <main>
        {
          dragons.map((dragon, i) => {
            return <DragonCard 
                    key={dragon.type+i}
                    type={dragon.type} 
                    icon={dragon.icon} />
          })
        }
        <hr />
        <UserListApi />
        <hr />
        <UncontrolledForm />
        <hr />
        <ControlledForm />
      </main>
    </Layout>
  )
}

export function OtherApp() {
  return (
    <Layout>
      <main>Other content</main>
    </Layout>
  )
}


export default App
