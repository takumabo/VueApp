Vue.createApp({
    data: function() {
        return {
            todoTitle:'',
            todoDescription: '',
            todoCategories: [],
            hideDoneTodo: false,
            order:'',
            selectedCategory:'',
            searchWord: ''
         }
    },
    computed:{
        canCreateTodo:function(){
            return this.todoTitle !== ''
        },
    },
}).mount('#app')



Vue.createApp({
    data:function(){
        return{
            counter: 0
        }
    },
    methods: {
        onClickCountUp: function(event){
            console.log(event)
            return this.counter += 1
        }
    }
}).mount('#sample')