import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import View from './Components/View'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [appName, setAppname] = useState('StudApp');
  // let appName="StudApp"

  return (
    <>
      <h1> Welcome To {appName} Project</h1>
      <Navbar/>
      
  <Routes>
    <Route path='/' element={<View/>}></Route>
    <Route path='/add' element={<Add person={{"name":"Aishwarya","adm":"PH1290","Department":"chemistry","Semester":"s4"}}/>}>
    </Route>
</Routes>
</>
  )
}

export default App
