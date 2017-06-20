import React, { Component } from 'react';

import './components/static/css/basic.css';


//引入react-router  link模块

//路由里面加载的组件通过这句话显示到这里 {this.props.children}  
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

            <div className="header">

              <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/news">新闻</Link></li>
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
