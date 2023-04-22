import { useRef, useState } from 'react'

export const UncontrolledForm = () => {
  const input = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(
      data.get('email'), 
      data.get('password'),
      input.current.value
      )
  }

  return (
    <form onSubmit={handleSubmit}>
       <h2>Uncontrolled</h2>
       <div>
        <label htmlFor='email'>Email: </label>
        <input ref={input} id='email' type='email' name='email' placeholder='enter email' />
       </div>
       <div>
        <label htmlFor='password'>Password: </label>
        <input id='password' type='password' name='password' placeholder='enter password' />
       </div>
       <div>
        <button style={{color: 'black'}} type='submit'>Login</button>
       </div>
    </form>
  )
}

export const ControlledForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState)
  }

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }


  return (
    <form onSubmit={handleSubmit}>
       <h2>Controlled</h2>
       <div>
        <label htmlFor='email'>Email: </label>
        <input onChange={handleOnChange} id='email' type='email' name='email' placeholder='enter email' />
       </div>
       <div>
        <label htmlFor='password'>Password: </label>
        <input onChange={handleOnChange} id='password' type='password' name='password' placeholder='enter password' />
       </div>
       <div>
        <button style={{color: 'black'}} type='submit'>Login</button>
       </div>
    </form>
  )
}