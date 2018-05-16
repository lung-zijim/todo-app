import React from 'react';
// ReactDOM 可用在顶层，可以作为脱离 React 模块的一种方法。大部分的组件不应该使用此方法。
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// 新增加
import App from "./components/App";
// 渲染元(element)素入dom，这个dom会在容器(container)里面，还可以返回一个指示(callback)入组建。
// ReactDOM.render(element, container[, callback])
import { render } from "react-dom";  
// 先安装 npm install --save redux
// 创建一个Redux 存储，这个存储持有完整的App状态树（一个App只可以有一个存储）
import { createStore } from "redux";
// 先安装 npm install --save react-redux
// Provider 可以使 App 里面用 connect() 调用存储 store。
import { Provider } from "react-redux";  // ?
// 引入自己的reducer（这里引入的是combine文件）
import rootReducer from "./reducers";

// reducer文件生成存储
const store = createStore(rootReducer);

render(
    // Provider 可以使 App 里面用 connect() 调用存储 store。
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")  // 在index.html里面有 
                                     // <div id="root"></div>
);

