// Day 3 && Day 4 && Day 5
 Vue.config.productionTip=false;


 Vue.filter('capitalize', function (value) {
 if (!value) return ''
 value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
});


Vue.filter('dateformate',function(value, format="DD MM YYYY"){
   return moment(value).format(format);   ;   

});

console.log(moment().format("DD / MM / YYYY"));
 
 Vue.component("avatars",{
     template:`<div><img :src='url'></div>`,

     data(){
         return{
             randomId:null,
         }
     },
     computed:{
         url(){
          return `https://api.adorable.io/avatars/80/${this.randomId}@adorable.png`
         }
     },
     created(){
         return this.randomId=Math.random();
     }
 })

 let app1 = new Vue({

     el:"#app1",
     data:{
        /* category:"Javascript",
         title:"Intro to javascript",
         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
         url:"https://www.w3schools.com/",*/
         posts:[
             {
             id:"1",
             category:"javascript",
             title:"Intro to javascript",
             content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
             url:"https://www.w3schools.com/",
             comments:['Variables','Methods'],
             published:"23,05,2020",
            },
     
            {
             id:"2",
             category:"mvc.net",
             title:"Intro to Mvc.net",
             content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
             url:"https://www.w3schools.com/",
             comments:[],
             published:"24,05,2020",
            },
           
     ],
     myobjects:{
         obj1:"value1",
         obj2:"value2"
     },
     x:true,
     size:25,
     firstname:"Noura",
     lastname:"Osama"
         
     },
     mounted(){
         console.log(this.$el);
     },
     created(){
         console.log(this.$el);
     },
     created(){

       this.sum(5,2);
     },
     methods:{
         sum(x,y){
             return console.log(x+y)
       
     },
     increasesize(event){
         this.size ++;
         console.log(event.currentTarget);
     },

     },
     computed:{
      fullname(){
         return this.firstname +" "+ this.lastname;
      }
     }
     
 });

   // Day 2
       //backtick
       let name= `noura
                  Mohamed Osama`;
       let myname=`</br> Hello ${name}`;
       document.write(myname);

       //functions && arrow functions
        /*1*/
      function myFun1(x){
           return document.write(`<br/> ${x}`);
       }
       myFun1(10);
        /*2*/
       let myFun2= () => {
           var x=20; 
           document.write(`<br/> ${x}`)
           };
       myFun2(); 
       /*3*/
       function myFun3(){

           return{

               x:30,
               getx:function (){

                   document.write(`<br/> ${this.x}`);
               }
           }
       }
       myFun3().getx();
       /*4*/ 
       function myFun4(x){
              return(x,{

                  y:2,
                  getmul:function(){

                      document.write(`<br>${x * this.y}`);
                  }
              })

      }
      myFun4(2).getmul();
      //make myFun4 as arrow Functions
      // Question
      let myFun5 = (x) => {
          return (x,{

              y:4,
              getpluse:()=> {
                  document.write(`<br> ${x + this.y}`)
                  },
          })
      }
      myFun5(4).getpluse();

     /* let myFun5 = (x) => {
          return (x,{

              y:4,
              getpluse:()=> {
                  document.write(`<br> ${this.y}`)
                  },
          })
      }
      myFun5(4).getpluse();

      /*5*/ 
      let  myFun6 = () =>  {
          return{
              x:10,
              getX:() =>{
                  document.write(`<br> ${this.x}`);
              }
          }
      }
      myFun6().getX();

       /*6*/ 
       let myBtn1= document.getElementById("mybtn1");
       myBtn1.addEventListener("click", function(){
        console.log(this);
       });

       /*7*/ 
       let myBtn2= document.getElementById("mybtn2");
       myBtn2.addEventListener("click", () => {
       console.log(this);
       });
      
