import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';  /*引入app组件*/


import registerServiceWorker from './registerServiceWorker';    /*不用管  开发服务器  并且可以换成数据  工具  */

import './static/css/index.css';  /*引入css*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
