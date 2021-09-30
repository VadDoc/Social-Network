import reportWebVitals from './reportWebVitals';
import {StateType, store} from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

export type rerenderEntireTreeType = (state:StateType)=>void

const rerenderEntireTree:rerenderEntireTreeType = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
      </Provider>
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
