import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GetUserData, Logout } from '../../services/auth-service'
import { removeUser, setUser } from '../login/store/actions'

const Home = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((store) => store.userStore)
  const navigate = useNavigate()

  useEffect(() => {
    if (GetUserData() === null) {
      navigate('/')
    }
    if (userStore) {
      dispatch(setUser(GetUserData()))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onLogout = () => {
    Logout(navigate)
    dispatch(removeUser())
  }

  return (
    <div className="container">
      <h1>Home Page</h1>
      <h2>Hello {userStore.name}</h2>
      <button className="btn btn-warning" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
