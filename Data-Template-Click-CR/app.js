const app = Vue.createApp({
    data(){
        return{
            showBook:true,
            title:'Chamber of Secret',
            author:'JK Rowling',
            age:'58'       
        }
    },
    methods:{
        changeTitle(title){
            // this.title = 'The Philosphers stone'
            this.title = title //getting data/title from arg
            console.log("changing title")
        },
        toggleShow(){
            this.showBook = !this.showBook
        }

    }
})
app.mount('#app')
// console.log(app)