import React from 'react'
import './App.scss'
import {Header} from './components/Header/Header'
import {Content} from './components/Content/Content'
import {Navbar, NavigationType} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {DialogPropsType, MessagePropsType} from "./components/Content/Dialogs/Dialogs";
import {PostItemType} from "./components/Content/Profile/MyPosts/MyPosts";

export type AppPropsType = {
  state: {
    navBar: {
      navigation: Array<NavigationType>
    }

    profilePage: {
      myPostsData: Array<PostItemType>
    }

    messagesPage: {
      dialogsData: Array<DialogPropsType>
      messagesData: Array<MessagePropsType>
    }

    newsPage: {}
    musicPage: {},
    settingsPage: {}
  }
}

const App = (props: AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar navBar={props.state.navBar}/>
        <Content
          profilePage={props.state.profilePage}
          messagesPage={props.state.messagesPage}
          newsPage={props.state.newsPage}
          musicPage={props.state.musicPage}
          settingsPage={props.state.settingsPage}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
