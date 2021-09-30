import React from 'react'
import './App.scss'
import {Header} from './components/Header/Header'
import {Content} from './components/Content/Content'
import {Navbar, NavigationType} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {PostItemType} from "./components/Content/Profile/MyPosts/MyPosts";
import {DialogPropsType} from "./components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Content/Dialogs/Message/Message";
import {ActionType} from "./Redux/redux-store";

type AppPropsType = {
  state: {
    navBar: {
      navigation: Array<NavigationType>
    }

    profilePage: {
      myPostsData: Array<PostItemType>
      newPostText: string
    }

    messagesPage: {
      dialogsData: Array<DialogPropsType>
      messagesData: Array<MessageType>
      newMessageText: string
    }

    newsPage: {}
    musicPage: {},
    settingsPage: {}
  }
  dispatch: (action: ActionType) => void
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
          dispatch={props.dispatch}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
