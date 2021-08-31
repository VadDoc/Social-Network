import React from 'react'
import './App.scss'
import {Header} from './components/Header/Header'
import {Content} from './components/Content/Content'
import {Navbar} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {DialogPropsType, MessagePropsType} from "./components/Content/Dialogs/Dialogs";
import {PostItemType} from "./components/Content/Profile/MyPosts/MyPosts";

export type AppPropsType = {
  dialogsData: Array<DialogPropsType>
  messagesData: Array<MessagePropsType>
  myPostsData: Array<PostItemType>
}

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <Content dialogsData={props.dialogsData} messagesData={props.messagesData} myPostsData={props.myPostsData}/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
