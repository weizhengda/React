import React from 'react';

import  axios from 'axios';  /*引入插件    安装插件  https://www.npmjs.com/package/axios*/


class News extends React.Component{



    constructor(props){  /*初始化触发的构造函数*/

        super(props);  /*继承父类的构造方法*/


        this.state={   /*这个和以前的 getIinitialState优点类似 放数据*/

            list:[]
        }

        this.getData=this.getData.bind(this);  //把当前组件this赋值给这个方法
    }
    getData(){


        // alert(123);

        // alert(this);  //null




        // var _that=this;   /*改变this的指向*/

        // axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
        // .then(function (response) {
        //     console.log(response);

        //     _that.setState({

        //         list:response.data.result
        //     })
            
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        
        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
        .then(function (response) {
            console.log(response);

            this.setState({   /*用this的时候一定要注意....*/

                list:response.data.result
            })
            
        }.bind(this))   /*getData的this传递到 成功的回调函数里面*/
        .catch(function (error) {
            console.log(error);
        });







        
    }
    render(){

        return(
            <div>
                这是一个新闻

                <button onClick={this.getData}>请求数据</button>



                <ul>
                {

                    this.state.list.map(function(value,key){

                            return <li key={key}>{value.title}</li>

                    })
                }
                    
                </ul>
            </div>
        )

    }
}

export default News;