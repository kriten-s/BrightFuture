import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'


const MyRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          </Route> 
        </Routes>
      </Router>
    </div>
  )
}

export default MyRoutes