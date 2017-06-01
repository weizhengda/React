import React from 'react';

//首字母大写

class Header extends React.Component{


    constructor(props){  /*构造函数*/


        super(props);

        this.state={

            msg:'这是header组件里面的数据'
        }

        this.run=this.run.bind(this);  /*改变this的指向*/

    }
    run(){
        alert('执行run方法');


        this.setState({

            msg:'改变后的数据'
        })
    } 

    render(){
        return(

            <div>
                <h2>这是一个header组件---{this.state.msg}</h2>
                <button onClick={this.run}>执行事件</button>
            </div>
        )

    }
}


//一个组件就是一个模块   外部要用这个模块的话就得暴露这个模块

export default Header;