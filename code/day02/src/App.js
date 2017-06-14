import React, { Component } from 'react';

import logo from './static/images/logo.svg';
import './static/css/App.css';


//要用单文件组件就需要引入

import Header from './components/Header.js';


import Footer from './components/Footer.js';


import News from './components/News.js';



//  es5 引入模块的方式
// var Header=require('./components/Header.js')


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
            <News></News>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
