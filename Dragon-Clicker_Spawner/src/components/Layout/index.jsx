import { Header } from '../header'
import { Footer } from '../footer'
import { Aside } from '../aside'
import './holygrail.css'

export function Layout(props) {
  const types = ['fire', 'water', 'air', 'earth', 'tree', 'ether']
  const handleClick = (type) => {
    props.setDragons(prevState => [...prevState, {
      type,
      icon: '🐉'
    }])
  }

  return (
    <div className="wrapper">
      <Header />
      {/* <Aside css="sidenav" content={"This is the left side"}>
        {[1,2,3].map(num => <section key={num}>Child Content {num}</section>)}
      </Aside> */}
      {props.children}
      <Aside 
        css="sidebar" 
        title={"Dragon Types"}>
          {
            types.map(type => {
              return <div key={type}>
                <button onClick={() => handleClick(type)}>{type}</button>
              </div>
            })
          }
      </Aside>
      <Footer />
    </div>
  )
}