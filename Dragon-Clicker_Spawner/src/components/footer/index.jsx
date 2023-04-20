import { useState, useEffect } from 'react'

export function Footer() {
  return <footer className="footer">
    My footer
    <Counter someProps={n => n > 5 ? 'goodbye' : 'hello'} />
    </footer>
}

const Counter = ({ someProps }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount - fires once at the beginning');
    return () => {
      console.log('componentWillUnmount - fires once at the end');
    }
  }, []);
  useEffect(() => {
    console.log('ComponentDidUpdate - fires every update (not recommended)')
  })
  useEffect(() => {
    console.log('only fires when `count` changed');
    if(count < 50) {
      
    }
  }, [count]);
  useEffect(() => {
    console.log('only fires when `someProps` changed');
  }, [someProps]);
  return (
    <button style={{color: 'white'}} onClick={() => { setCount(count + 1); }}>
      {someProps(count)} Count: {count} 
    </button>
  );
};