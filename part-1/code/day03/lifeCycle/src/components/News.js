import React from 'react';

import Header from './Header';


import Cart from './Cart';

class News extends React.Component{


    constructor(props){  /*初始化的方法 每次定义组件都必须加上*/


        super(props);

        this.state={

            num:123
        }

        this.requestData=this.requestData.bind(this);  /*每次定义方法都要改变this指向*/

        this.getCart=this.getCart.bind(this);  /*每次定义方法都要改变this指向*/



    }

    requestData(){

        alert('请求数据');
    }

    getCart(){
        alert(this.refs.cart.state.msg);  /*获取了子组件的数据*/

        this.refs.cart.run();/*执行子组件的方法*/


    }

    render(){

        return(

            <div>   

                <Header title="新闻" username='李四' text={this.state.num}  header={this}></Header>


                <Cart ref='cart'></Cart>


                --------------------

                这是一个新闻页面

                <button onClick={this.getCart}>获取cart的数据和方法</button>
            
            </div>
        )
    }


}


export default News;