import React from 'react'
import './App.scss'
import Content from './components/Content/Content'
import Navbar from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {HashRouter} from 'react-router-dom'
import Header from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App
