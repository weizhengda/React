import React  from 'react';

import axios  from 'axios';


import c1 from './static/01.png';

// import logo from './static/logo.svg';
import c2 from './static/02.png';

//引入 Storage模块.
import Storage from './model/storage.js';

// console.log(Storage)

class NewsContent extends React.Component{

//https://facebook.github.io/react/docs/dom-elements.html


    constructor(props){

        super(props);            

        this.state={
            content:[],
            is_collect:true  /*判断有没有收藏*/,

            list:[]
        } 

        this.requestData=this.requestData.bind(this);

        this.createMarkup=this.createMarkup.bind(this);

        this.collect=this.collect.bind(this);

    }
    //渲染html代码
    createMarkup() {
        return {__html: this.state.content.content};
    }


    componentWillMount(){  
        this.requestData(); 

    }
    componentDidMount(){

        console.log(this.props.params.aid );

        var collectlist= Storage.get('collectlist');
       
       //this.props.params.aid 传递过来的
        this.setState({

            is_collect:Storage.hasCollectionData(this.props.params.aid,collectlist)
        })
    }
    requestData(){

        //请求数据

        //http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=121

        //获取url传过来的aid

        var aid=this.props.params.aid;
        // console.log(aid);

        var _that=this;
        var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        axios.get(url)
        .then(function (response) {
             console.log(response);

            _that.setState({

                content:response.data.result[0]

            })

          
        })
        .catch(function (error) {
            console.log(error);
        });




    }

    collect(){


        //1.获取localstorage的数据   判断有没有数据

        //2.判断当前这个数据 （aid） 在localstorage有没有

        //3.如果有 localstorage删除这个数据，重新写入localstorage

        //4.如果没有 直接把这个数据放入到localstorage


       


        var newContentData={  /*收藏的数据*/

            aid:this.state.content.aid,

            title:this.state.content.title
        }
        

       // 1.获取localstorage的数据

        var collectlist= Storage.get('collectlist');

        // this.state.list=collectlist;  /*模拟看数据对不对*/

        console.log(collectlist);


        if(collectlist){  /*有数据*/

             
         //2.判断当前这个数据 （aid） 在localstorage有没有

            if(Storage.hasCollectionData(newContentData.aid,collectlist)){  /*存在 删除*/

                    var list=Storage.deleteCollectionData(newContentData.aid,collectlist);
                    Storage.set('collectlist',list);  /*重新写入*/

                    this.setState({

                        is_collect:false
                    })

            }else{/*添加*/

                   this.setState({

                        is_collect:true
                    })

                    collectlist.push(newContentData);

                    Storage.set('collectlist',collectlist);  /*重新写入*/
            }


        }else{ /*第一次*/

                var list=[];

                list.push(newContentData)

                Storage.set('collectlist',list);

                  this.setState({

                        is_collect:true
                    })
        }


        // console.log(newContentData);



                           

    }

    render(){

        // var imgLIst='';

        // if(this.state.is_collect){
        //     imgLIst=<img src={c2} />
        // }else{

        //     imgLIst=<img src={c2} />
        // }



        return(

            <div>
                
               <h2>{this.state.content.title}  ---  

               <button onClick={this.collect}> 

                {

                    this.state.is_collect?<img src={c2} />:<img src={c1} />
                }
               
               </button>                                                 
               </h2>

               <div className="content">
                   <div dangerouslySetInnerHTML={this.createMarkup()}></div>
               </div>
            

            </div>
        )
    }
}

export default NewsContent;
