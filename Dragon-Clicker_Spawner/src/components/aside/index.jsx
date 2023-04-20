export function Aside (props) {
    console.log(props)
    return (
      <aside className={props.css}>
        
        <h2>{props.title}</h2>
        <div>
          {props.children}
        </div>
      </aside>  
    ) 
  }