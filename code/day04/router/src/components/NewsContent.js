import React  from 'react';


class NewsContent extends React.Component{

    constructor(props){

        super(props);

    }

    render(){

        return(

            <div>
                
               新闻详情

               获取id
               {this.props.params.aid}


            </div>
        )
    }
}

export default NewsContent;
