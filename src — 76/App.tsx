import React from 'react'
import './App.scss'
import {Content} from './components/Content/Content'
import {Navbar, NavigationType} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import {HashRouter} from 'react-router-dom'
import {DialogPropsType} from "./components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Content/Dialogs/Message/Message";
import {PostItemType} from "./Redux/profile-reducer";
import {ActionsType} from "./Redux/redux-store";
import {ConnectedHeaderContainer} from "./components/Header/HeaderContainer";

type AppPropsType = {
  state: {
    navBar: {
      navigation: Array<NavigationType>
    }
    profilePage: {
      myPostsData: Array<PostItemType>
    }
    messagesPage: {
      dialogsData: Array<DialogPropsType>
      messagesData: Array<MessageType>
    }
    newsPage: {}
    musicPage: {},
    settingsPage: {}
  }
  dispatch: (action: ActionsType) => void
}

const App = (props: AppPropsType) => {
  return (
    <HashRouter>
      <div className="app">
        <ConnectedHeaderContainer/>
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
    </HashRouter>
  )
}

export default App
