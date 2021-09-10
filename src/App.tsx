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
import {addMessage} from "./Redux/state";

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
    }

    newsPage: {}
    musicPage: {},
    settingsPage: {}
  }
  updateNewPostText: (post: string) => void
  addPost: () => void
  addMessage: (message: string) => void
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
          updateNewPostText={props.updateNewPostText}
          addPost={props.addPost}
          addMessage={addMessage}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
