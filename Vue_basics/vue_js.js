// Vue.component('greeting',{
//     template: '<h1>Hello Everybody My name is {{name}}.<button v-on : click = "changeName">User Name is Changed.</button></h1>',
//     data:function(){
//         return{
//             name :'Azizbek',
//         }
//     },
//     methods : {
//         changeName : function(){
//             this.name = "CodingNewBie",
//         }
//     }
// });

let one = new Vue({
    el: "#vue-app",
    data:{
        message : 'Salom Uzbekistan',
        website : 'https://www.google.com/',
        year : 1990,
        UserAge : '',
        UserName : '',
        available : true,
        error : false,
        success : false,
        webNames : [
            {name : 'CodingNewBie', age : 12 },
            {name : 'Google', age : 13 },
            {name : 'YouTube', age : 14 },
            {name : 'NetNinja', age : 18 },
            {name : 'FreeLance', age : 56 }
        ]
    },
    methods: {
        add : function(){
            this.year++ ;
        },
        sub : function(){
            this.year-- ;
        },
        dbladd : function(inc){
            this.year += inc ;
        },
        dblsub : function(dec){
            this.year -= dec ;
        },
        click_website_link : function(){
            alert ("Sorry This website is not finished yet.");
        },
        logName : function(){
            console.log("Valid Name")
        },
        logAge : function(){
            console.log("Valid Age")
        },
    }

});

let two = new Vue({
    el : "#vue-app-two",

    data : {
        title : "I am second Instance in Vue",
        favFood : "_______",
    },
    methods :{
        titleChange : function(){
            one.message = "I am Brand New One";
        },
        readRefs: function(){
           this.favFood = this.$refs.user_active_name.value;
           
        },

    }
})