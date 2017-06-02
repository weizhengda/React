import React from 'react';

import axios from 'axios'

class Life extends React.Component{

    
    constructor(props){
        console.log('实例化的时候触发','constructor');
        super(props); 

        this.run=this.run.bind(this);

        this.requestData=this.requestData.bind(this);  /*改变this执行*/

        this.state={

            msg:'这是Life的msg'
        }    
    }     

    requestData(){

        alert('请求数据');

        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    componentWillMount(){  /*react 的内置方法*/
        console.log('组件渲染之前触发的方法','componentWillMount');

    
        this.requestData();   /*生命周期函数里面直接用this*/
        //请求数据就放在这个里面
    }
    componentDidMount(){  /*react 的内置方法*/
        console.log('组件渲染完成','componentDidMount');

        //这个里面请求数据可能会有问题
    }

    shouldComponentUpdate(nextProps, nextState){  /*组件  返回true 表示允许修改数据，返回false表示不许修改数据*/

        console.log('即将开始更新组件...shouldComponentUpdate');
        console.log(nextProps);   /*改变的props 的数据*/

        console.log(nextState);   /*改变的数据    当前组件的数据*/

        return true;
    }


    componentWillUpdate(){  /*数据将要更新之前*/

         console.log('数据将要更新之前 --componentWillUpdate');
    }

    
    componentDidUpdate(){  /*数据更新完成*/

         console.log('数据更新完成--componentDidUpdate');
    }

    run(){

        this.setState({
            msg:'这是改变后的msg'
        })
    }

    render(){

        console.log('开始渲染模板--render');
        return(

            <div>   

                演示生命周期函数           

                生命周期函数：

                组件加载之前  加载完成    更新数据   销毁组件触发的一系列的方法就是生命周期函数
                <h2>{this.state.msg}---{this.props.msg}</h2>
                <button onClick={this.run}>改变数据</button>
            </div>
        )
    }
}


export default Life;