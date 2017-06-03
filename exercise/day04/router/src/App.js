import React, { Component } from 'react';

import './components/static/css/index.css';

import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
           <ul>
             <li>
               <Link to='/home'>首页</Link>
             </li>
             <li>
               <Link to='/news'>新闻</Link>
             </li>
           </ul>
        </div>
        <div className="content">
              {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
