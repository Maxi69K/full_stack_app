import React from "react";
//import axios from "axios";
//import { useEffect } from "react";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"

import { Provider } from "react-redux";
import store from './store';

function App() {

/*   useEffect(() => {
    axios
      .get('/data')
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []) */

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
