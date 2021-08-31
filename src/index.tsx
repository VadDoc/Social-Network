import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";
import {DialogPropsType, MessagePropsType} from "./components/Content/Dialogs/Dialogs";
import img1 from "./images/ava1.jpeg";
import img2 from "./images/ava2.jpeg";
import {PostItemType} from "./components/Content/Profile/MyPosts/MyPosts";

const dialogsData: Array<DialogPropsType> = [
  {id: v1(), name: 'Ann'},
  {id: v1(), name: 'Nick'},
  {id: v1(), name: 'Jhon'},
  {id: v1(), name: 'Jane'},
]

const messagesData: Array<MessagePropsType> = [
  {id: v1(), message: 'Hello'},
  {id: v1(), message: 'How are you?'},
]

const myPostsData: Array<PostItemType> = [
  {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
  {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
]

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
      myPostsData={myPostsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
