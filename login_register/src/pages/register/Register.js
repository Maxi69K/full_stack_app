import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../services/auth-service'

const Register = () => {
  const [state, setState] = useState({ name: '', pass: '' })

  const navigate = useNavigate()

  const onRegister = () => {
    RegisterUser(state).then((res) => {
      if (res.data === 'OK') {
        navigate('/')
      } else {
        navigate('/register')
      }
    })
  }

  return (
    <div className="container">
      <h1>Register</h1>
      <div className="col-6 offset-3">
        <input
          onChange={(e) => setState({ ...state, name: e.target.value })}
          type="text"
          placeholder="name"
          className="form-control"
          value={state.name}
        />
        <br />
        <input
          onChange={(e) => setState({ ...state, pass: e.target.value })}
          type="password"
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={onRegister} className="btn btn-primary">
          Register
        </button>
      </div>
    </div>
  )
}

export default Register

/*
// If in AuthService class
import AuthService from '../../services/auth-service';
const onRegister = () => {
  AuthService.register(state)
  .then((res) => {
    console.log(res.data)
  })
}
*/
