import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

//引入react-router
import { Router, Route,browserHistory,IndexRoute } from 'react-router';


//引入组件

import Home from './components/Home';

import News from './components/News';


import NewsContent from './components/NewsContent';


//配置路由  history={browserHistory} 可以让路由变得又优美一些

//IndexRoute 默认加载的主页
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home}/>

      <Route path="home" component={Home} />
      <Route path="news" component={News}></Route>

      <Route path="newscontent/:aid" component={NewsContent}></Route>
    </Route>
  </Router>
), document.getElementById('root'))

//加载的组件
// {this.props.children}
registerServiceWorker();
