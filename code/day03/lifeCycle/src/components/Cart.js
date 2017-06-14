import React from 'react';

class Cart extends React.Component{

    
    constructor(props){

        super(props);     


        this.state={

            msg:'这是cart的msg'
        }        

        this.run=this.run.bind(this);

    }  

    run(){
        this.setState({
            msg:'这是cart改变后的msg'

        })

    }

    render(){

        return(

            <div>   


                购物车组件---{this.state.msg}
            
            
            </div>
        )
    }
}


export default Cart;