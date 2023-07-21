<template>
    <div class="books">
      <div v-for="book in books" class="book">
        <router-link :to="{name:'bookDetails',params:{id:book.id}}">
          <h3>{{book.title}}</h3>
          <h5>{{book.author}}</h5>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      books:[]
    }
  },
  mounted(){
    fetch("http://localhost:3000/books")
    .then((res)=>res.json())
    .then((data)=>{
        this.books = data.books.books
        console.log(this.books)
        console.log(data)
      })
    .catch(err=>console.log(err.message))
  }
}
</script>

<style>
    .books{
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
    }
    .book{
        padding: 1rem;
        margin: 1rem;
        width: 350px;
    }
    .boook img{
        width: 300px;
    }
</style>
