<template>
    <div class="books">
        <div class="book" v-for="book in books">
            <h3>{{book.title}}</h3>
        </div>
    </div>
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
        padding: 0.5rem;
        margin: 1rem;
        border-radius:10px;
        border: 1px solid skyblue;
    }
</style>