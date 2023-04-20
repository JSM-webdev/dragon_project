function Nav (props) {
    return (
      <nav>
        {/* <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#profile">Profile</a> */}
        {props.links.map(link => {
          return <a key={link.id} href={`#${link.name}`}>{link.name}</a>
        })}
      </nav>
    )
  }
  
  export function Header() {
    const links = [
      {name: 'Home', id: 1}, 
      {name:'Blog', id: 2}, 
      {name: 'Contact', id: 3}, 
      {name: 'Profile', id: 4}
    ]
    return (
      <header className="header">
        <h1>Responsive Grid Layout</h1>
        <Nav links={links}/>
      </header>
    )
  }
  