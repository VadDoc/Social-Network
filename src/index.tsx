import reportWebVitals from './reportWebVitals';
import {state, subscribe} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType, updateNewPostText} from "./Redux/state";

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();
