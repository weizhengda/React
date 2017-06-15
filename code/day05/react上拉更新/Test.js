import React  from 'react';


import axios  from 'axios';

import Swiper from 'swiper';

import InfiniteScroll from 'react-infinite-scroller';

//引入react-router  link模块
import { Link,browserHistory} from 'react-router';

class Test extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            hasMoreItems: true,
            page: 1
        };
    }

    loadItems(page) {
      
         //请求数据

        var _that=this;

        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+_that.state.page)
        .then(function (response) {
            console.log(response);

            

            var listData=_that.state.lists.concat(response.data.result)

            var page=++_that.state.page;

            _that.setState({
                lists:listData,
                page:  page         
            })


        })
        .catch(function (error) {
            console.log(error);
        });

        
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
        this.state.lists.map((track, i) => {
            items.push(
                <div className="track" key={i}>                  
                    <p className="title">{track.title}</p>
                    
                </div>
            );
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <div className="tracks">
                    {items}
                </div>
            </InfiniteScroll>
        );
    }
}

export default Test;
