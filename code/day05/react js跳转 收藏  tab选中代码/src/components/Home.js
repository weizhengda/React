import React  from 'react';

import {browserHistory } from 'react-router';
class Home extends React.Component{

    constructor(props){

        super(props);

        this.state={
                list:['导航一','导航二','导航三'],            
                content:[
                    {item:'内容一'},
                    {item:'内容二'},
                    {item:'内容三'}
                ],
                current:0
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(index){
        this.setState({ current:index });
    }

    currentClass(index){

        return this.state.current === index ? 'current' : '';
    }
    contentClass(index){
        return this.state.current === index ? 'active' : '';
    }

    go(){

        browserHistory.push('news')
    }



    render(){

        return(

            <div>
             <div id="outer" >
                <ul id="tab" >                  
                    { this.state.list.map( (val,index ) => {
                            return (<li className={this.currentClass(index)} onClick={this.handleClick.bind(this,index)}  key={index}>{val}</li>) ;
                                
                        })
                   }
                </ul>
                <div id="content" >
                    { this.state.content.map( ( val,index ) => {


                            return (<div className={this.contentClass(index)}  key={index} >{ val.item }</div>)
                    })}
                </div>
            </div>

            <button onClick={this.go}>执行事件</button>
            </div>
        )
    }
}

export default Home;
