import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

/*
    如果你想让你的应用离线工作，加载速度更快，你可以改变
    取消注册()以注册()。注意，这有一些陷阱。
    了解更多关于服务工作者的信息:https://bit.ly/CRA-PWA
*/

serviceWorker.unregister();
