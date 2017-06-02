import React, { Component } from 'react';


import News from './components/News';


import Life from './components/Life';


import './components/static/css/index.css';




class App extends Component {

  constructor(props){
    super(props);

    this.state={

      msg:'根组件的msg'
    }

    this.setData=this.setData.bind(this);
  }
  setData(){
    this.setState({

       msg:'改变根组件props里面的数据'
    })

  }
  render() {
    return (
      <div className="App">
         {/* <News></News>*/}


         <Life msg={this.state.msg}></Life>
----------------------------
         <button onClick={this.setData}>执行setData  （app组件）</button>
      </div>
    );
  }
}

export default App;
