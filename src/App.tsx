import React from 'react'
import './App.scss'
import {Header} from './components/Header/Header'
import {Content} from './components/Content/Content'
import {Navbar} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
