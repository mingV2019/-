var app = new Vue({
    el: '#app',
    data: {
        Ip_Json: [{
            id: 1,
            name: 'iphone 8',
            price: 5099,
            count: 1
        },
            {
                id: 2,
                name: 'iphone xs',
                price: 8699,
                count: 1
            },
            {
                id: 3,
                name: 'iphone xr',
                price: 6499,
                count: 1
            }]

    },
    methods:{
        totalPrice : function(){
            var totalP = 0;
            for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
                totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
            }
            return totalP;
        }


    }
})