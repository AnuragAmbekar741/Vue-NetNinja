<template>
    <div class="books">
        <div class="book" v-for="book in books">
            <router-link :to="{name:'details',params:{id:book.id}}"><h3>{{book.title}}</h3></router-link>
            <h4>{{book.author}}</h4>
        </div>
        <br>
    </div>
    <router-view/>  
</template>

<script>

export default {
    props:['books']



}
</script>
<style>
 .books{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .book{
        padding: 0.1rem 1rem;
        margin: 1rem;
        border-radius:10px;
        border: 1px solid skyblue;
    }
</style>