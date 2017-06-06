1.react 和jq的区别？


2.为什么要用react 写项目？



3.React 语法基于jsx     javascript xml      （nodejs里面的模板ejs）


  ReactDOM.render(
        <div>
            <h2>你和React</h2>
            <ul>
                <li>列表1</li>
                <li>列表1</li>
                <li>列表1</li>
            </ul>           
        </div>
        ,
        document.getElementById('box')

    )



4. 模板里面渲染数据   {}



5.定义数据

es5 

	getInitialState:function(){  
        return{  

            msg:'这是InitialState里面的数据',
            name:'张三',
            list:''
        }

    }


    用这里的数据：this.state.数据名称


es6 


      constructor(props){
  
        super(props);       
        this.state={

            msg:'这是Life的msg',
            name:'张三',
            list:''
        }    
    }     


    用这里的数据：this.state.数据名称


6.定义模板


			render(){

                return(
                    <div>

                        <h2>这是一个内容组件-{this.state.msg}--{this.state.name}</h2>
                    </div>
                )
            }

6.定义组件
	

	es5 
		var Header=React.createClass({

			getInitialState:function(){  
		        return{  

		            msg:'这是InitialState里面的数据',
		            name:'张三',
		            list:''
		        }

		    },

		    render(){

		    	return (
		    		<div></div>
		    	)
		    }
		})

	
es6 

	class



7.模板里面执行方式

	onClick    注意大小写

	onClick={this.run}



	传值：

	onClick={this.run.bind(this,'传递的数据')}


8.获取数据 以及更改数据

	获取
	this.state.数据

	更改

	this.setState({

		msg:'更改后的数据'
	})

9.input 框  onChange事件会传递一个事件对象

	 console.log(e);

	 e.target.value

10.ref  获取dom节点

	给元素加ref属性   比如： <div ref='home'></div>	 


	this.refs.home  获取dom节点

11.	给模板里面的元素加属性

	注意：

		className 设置class

		htmlFor   设置for  

		<div>
		   <label htmlFor="user">用户名： </label>
		   <input type="text" id="user" placeholder="用户名" />
		</div>

	其他的以前怎么写还是怎么写  id


12.父子组件传值

	1.父组件给子组件传值，子组件获取父组件的数据和方法

		1.父组件  调用子组件的时候传值	
			<Header msg='这是一个数据' h={this} />

		2.子组件获取父亲组件的数据

			this.props.msg

	 2.子组件给父组件传值 ，父组件获取子组件的数据和方法

	 	1.父组件调用子组件的时候定义ref
	 		<Header ref='header' />

	 	2.this.refs.header拿到了子组件的对象。可以获取子组件的数据和方法


13.父子给组件传值的时候 propsTypes  defaultProps

	子组件里面通过 propsTypes  可以验证父组件传递数据的合法性


	defaultProps 父组件不给子组件传值的时候的默认值



	Header.propTypes = {
	  text: PropTypes.string   /*指定 text是字符串类型*/
	};

	//不传值的时候  给props一个默认值
	Header.defaultProps = {
	  username: '张三'
	};

14.生命周期函数

	生命周期函数：

       组件加载之前  加载完成    更新数据   销毁组件触发的一系列的方法就是生命周期函数


	componentWillMount   


https://facebook.github.io/react/docs/react-component.html




15.axios请求数据

	https://github.com/mzabriskie/axios


	1.安装
	2.引入
	3.使用


16.创建单文件组件

	https://facebook.github.io/react/docs/installation.html

	https://facebook.github.io/react/docs/installation.html


	1.安装脚手架 （ 项目生成工具）    只需要安装一次


	npm install -g create-react-app    /  cnpm install -g create-react-app
	 

	2.创建项目  （可以创建）

	create-react-app  项目名称

	cd 项目名称


	例如:

	create-react-app reactdemo01

	cd reactdemo01  

	npm start 执行项目


	3.运行  打开项目

	npm start


	4.正式打包 

	npm run build







17.路由配置  （老版本）


	1.安装react-router 
		注意要指定版本安装

		npm info react-router  查看路由的版本



		cnpm install react-router@2.8.1    老版本的稳定版本

	2.引入import { Router, Route, Link } from 'react-router'    

	(index.js  App.js)


	3.定义组件  首页 Home组件  新闻 News组件



	4.配置路由 （ index.js）



		/  加载APP组件


		/home   加载Home组件

		/news  加载News组件

		ReactDOM.render((
		  <Router>
		    <Route path="/" component={App}>
		      <Route path="home" component={Home} />
		      <Route path="news" component={Inbox}>     
		      </Route>
		    </Route>
		  </Router>
		), document.body)




	5.配置 加载的组件 的显示的地方   （App.js）


	  {this.props.children}


	6.页面跳转 （组件的跳转）   (任何的组件里面都可以写)

		 <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>


     7.Link动态传值

     	<Link to={{pathname:'newscontent/'+this.state.aid,query:{name:'zhangsan'}}}>跳转新闻详情</Link>

     8.获取动态传值

     	 {this.props.params.aid}


