import { useEffect, useState, useRef } from 'react'

export const UserListApi = () => {
  const input = useRef()
  const state = useRef(3)

  const url = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])
  const [click, setClick] = useState(false)

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const data = await response.json()
      console.log('data', data)
      setUsers(data)
    }
    // if(click) getData()
  }, [click])

  // useEffect(() => {
    // console.log('input', input)
  //   state.current += 1
  //   console.log('state', state)
    // input.current.value = 10
  // }, [click])

  return (
    <div>
      <h1>User List</h1>
      <input type='text' ref={input} />
      <div>{state.current}</div>
      <button 
      style={{color: 'white'}} 
      onClick={() => {setClicks(!clicks)}}>
        Fetch Users
      </button>
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}: {user.email}</li>
        })}
      </ul>
    </div>
  )
}