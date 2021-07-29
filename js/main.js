
//TodoList
Vue.config.productionTip=false;

let todolList = new Vue({

    el:"#todolist", 
    data:{
 
     search:"",
     tasklist:[],
     filter:1,
 
    },
    computed:{
        filtertasklist(){
         switch (this.filter) {
             case 1:
             return this.tasklist;
             case 2:
             return this.tasklist.filter(function(task){
                return !task.completed
             });
             case 3:
             return this.tasklist.filter(function(task){
                return task.completed
             });
                                       
         }
        
        },
        filtertasklength(){
         return this.tasklist.filter(function(task){
                return !task.completed
             });
 
        }
 
    },
    created(){
        let tasks=localStorage.getItem('tasks')
        if(tasks){
            this.tasklist= JSON.parse(tasks)
        }
        else{

         localStorage.setItem('tasks',JSON.stringify(this.tasklist));

        }
    }, 

    methods:{
        onkeypress(){
            if(this.search){
              this.tasklist.push({
                  result:this.search,
                  completed:false,
              })
            }
            localStorage.setItem('tasks',JSON.stringify(this.tasklist));

            this.search="";
        },
        ondelete(tasks){
        this.tasklist.splice(this.tasklist.indexOf(tasks),1);
          localStorage.setItem('tasks',JSON.stringify(this.tasklist));

        },
        clearCompleted(){
        this.tasklist= this.filtertasklength;
       localStorage.setItem('tasks',JSON.stringify(this.tasklist));


       },
       ondone(index){
            let donelist=this.tasklist[index];
            donelist.completed = !donelist.completed;
            localStorage.setItem('tasks',JSON.stringify(this.tasklist));
        }
    
  
    }
  
 });
 