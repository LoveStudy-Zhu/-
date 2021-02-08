var app2 = new Vue({

        el:'#function_select',
        data:{
            current_index:0,
            function_list:
                [
                    {'name':'库房漫游','img':'img/虚拟漫游.png'},
                    {'name':'操作培训','img':'img/操作.png'},
                    {'name':'器具信息','img':'img/后台.png'}
                ],
            trainItems:{
                'item0':['安全帽','绝缘衣','绝缘鞋子','绝缘手套','绝缘毯'],
                'item1':[''],
                'item2':[],
                'item3':[],
                'item4':[],
            }
        },
        methods:{
            Training:function(name){
                if(this.trainItems[name]){
                    app.objectArray = this.trainItems[name];
                    app.current_index = 0;
                    initStep(app.current_index)
                }

            },
            functionSelected:function (item,index) {
                app5.isShow = (item.name == '器具信息');
                app3.isShow = (item.name == '库房漫游');
                // app4.isShow =  (item.name == '器具信息')
                if (item.name == '器具信息'){
                    window.top.con.location.href = "A.html";
                    var itemList = [{'name':'返回','img':'img/back.png'}];
                    for(var i = 0;i < 15;i++ ){
                        itemList.push({'name':'item'+i,'img':'img/op_item.png'})
                    }
                    this.function_list = itemList
                }
                if(item.name == '库房漫游'){
                    this.current_index = -1;
                }else{
                    this.current_index = index;
                }
                if(item.name == '操作培训'){
                    var itemList = [{'name':'返回','img':'img/back.png'}];
                    for(var i = 0;i < 15;i++ ){
                        itemList.push({'name':'item'+i,'img':'img/op_item.png'})
                    }
                    this.function_list = itemList
                }else if(item.name =='返回'){
                    this.function_list = [
                        {'name':'库房漫游','img':'img/虚拟漫游.png'},
                        {'name':'操作培训','img':'img/操作.png'},
                        {'name':'器具信息','img':'img/后台.png'}
                    ]
                }
            }
        }
    });

