import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../component/Login'

const Account = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />}></Route>
    </Routes>
  )
}

export default Account