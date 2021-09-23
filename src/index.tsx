import reportWebVitals from './reportWebVitals';
import {StateType, store} from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type rerenderEntireTreeType = (state:StateType)=>void

const rerenderEntireTree:rerenderEntireTreeType = () => {
  console.log(store.getState())

  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
