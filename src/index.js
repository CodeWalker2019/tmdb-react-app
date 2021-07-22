import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import {store} from "./redux/store";
import {HashRouter} from "react-router-dom";

const app = (
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
