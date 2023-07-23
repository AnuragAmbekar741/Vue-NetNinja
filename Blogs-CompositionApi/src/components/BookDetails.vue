<template>
    <div>
        <h2>{{book.title}}</h2>
        <h3>{{book.author}}</h3>
        <h3>{{book.genre}}</h3>
        <h3>{{book.published_year}}</h3>

    </div>
</template>

<script>
import getBook from '../composables/getBook.js'
export default {
    props:['id'],
    setup(props){
        const {book,error,load} = getBook(props.id)
        load()
        return{book,error}
    }
}
</script>

<style>

</style>