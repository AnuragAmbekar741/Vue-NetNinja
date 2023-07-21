<template>
    <div>
    <div v-if="book" class="book">
        <h2>Name : {{book.title}}</h2>
        <h2>Genre : {{book.genre}}</h2>
        <h2>Published year : {{book.published_year}}</h2>
        <h2>Author : {{book.author}}</h2>
    </div>
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            book:null
        }
    },
    mounted(){
        fetch("http://localhost:3000/books/"+this.id)
        .then((res)=>res.json())
        .then((data)=>{
        this.book = data
        })
        .catch(err=>console.log(err.message))
    }
}
</script>

<style scoped>
    .book{
        margin: 40px;
        padding: 1rem;
    }
</style>