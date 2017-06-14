import React  from 'react';


import axios  from 'axios';

//引入react-router  link模块
import { Link } from 'react-router';

class News extends React.Component{

    constructor(props){

        super(props);

        this.state={

            list:[]
        }

        this.requestData=this.requestData.bind(this);


    }
    componentWillMount(){  /*渲染之前请求数据*/
        this.requestData();

    }

    requestData(){

        //请求数据

        var _that=this;

        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
        .then(function (response) {
            console.log(response);

            _that.setState({

                list:response.data.result,
                aid:123
            })


        })
        .catch(function (error) {
            console.log(error);
        });


    }
    render(){

        //<Link to={{pathname:'newscontent/'+this.state.aid,query:{name:'zhangsan'}}}>跳转新闻详情</Link>
        
        return(

            <div>
                新闻列表

                <div>
                                
                    <Link to={{pathname:'newscontent/'+this.state.aid}}>跳转新闻详情</Link>
                </div>
                
                <ul>
                    {
                        this.state.list.map((value,key)=>{

                           
                            
                            return  <li key={key}><Link to={{pathname:'newscontent/'+value.aid}}>{value.title}</Link></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default News;
