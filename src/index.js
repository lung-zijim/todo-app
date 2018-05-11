import React from 'react';
// ReactDOM 可用在顶层，可以作为脱离 React 模块的一种方法。大部分的组件不应该使用此方法。
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 新增加
import App from "./components/App";
import { render } from "react-dom";
// npm install --save react-redux
import { Provider } from "react-redux";  // ?
// npm install --save redux
import { createStore } from "redux";     // ?
import rootReducer from "./reducers";

// 入口文件
const store = createStore(rootReducer);

render(
    // Provider 可以使后面的connect()调用可用。
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

