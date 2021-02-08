var app3 = new Vue({

        el:'#introduce',
        data:{
            isShow:true
        },
        methods:{
            Enter:function () {
                this.isShow = false;
                app4.isShow = true
            }
        }
    })