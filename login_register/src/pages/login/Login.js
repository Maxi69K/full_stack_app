import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser, StoreUserData } from '../../services/auth-service'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions'

const Login = () => {
  const [state, setState] = useState({ userName: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogin = () => {
    LoginUser(state).then((res) => {
      StoreUserData(res.data)
      dispatch(setUser(res.data))
      navigate('/home')
    })
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="col-6 offset-3">
        <input
          onChange={(e) => setState({ ...state, userName: e.target.value })}
          type="text"
          placeholder="name"
          className="form-control"
        />
        <br />
        <input
          onChange={(e) => setState({ ...state, password: e.target.value })}
          type="password"
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={onLogin} className="btn btn-info">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
