import React from 'react';


import PropTypes from 'prop-types';



class Header extends React.Component{

    
    constructor(props){

        super(props);

        this.getData=this.getData.bind(this);  /*每次定义方法都要改变this指向*/
        
    }
    getData(){

        alert('子组件的getdata');

        // this.props.header/*父组件*/


        this.props.header.requestData();  /*执行父组件的请求数据方法*/


    }

    render(){

        return(

            <div>   


                <header className='header'>
                
                    {this.props.title}---{this.props.text}--{this.props.username}

                    <button onClick={this.getData}>按钮</button>
                
                </header>
            
            
            </div>
        )
    }


}

//import PropTypes from 'prop-types';


//PropTypes验证父组件给子组件传值的类型

Header.propTypes = {
  text: PropTypes.string   /*指定 text是字符串类型*/
};

//不传值的时候  给props一个默认值
Header.defaultProps = {
  username: '张三'
};


export default Header;