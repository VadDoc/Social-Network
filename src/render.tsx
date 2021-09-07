import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType} from "./Redux/state";

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
