var app={

    set:function(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get:function(key){
        return JSON.parse(localStorage.getItem(key));

    },hasCollectionData(aid,StorageData){

        // [

        //     {
        //         aid:1,
        //         title:''
        //     },
            
        //     {
        //         aid:1,
        //         title:''
        //     }
        // ]

            for(var i=0;i<StorageData.length;i++){

                    if(aid==StorageData[i].aid){

                        return true;
                    }

            }

            return false;



    },deleteCollectionData(aid,StorageData){  /*从数组里面删除数据*/

            for(var i=0;i<StorageData.length;i++){

                    if(aid==StorageData[i].aid){

                        StorageData.splice(i,1);  /*删除数据*/
                    }

            }

            return StorageData;



    }
}

export default  app;