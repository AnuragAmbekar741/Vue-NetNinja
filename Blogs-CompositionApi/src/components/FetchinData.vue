<template>
    <div>
    <div v-if="error">{{error}}</div>
    <div v-if="books.length">
        <DataView :books="books"/>
    </div>
    <div v-else>Loading...</div>
    </div>
</template>

<script>
import DataView from '../views/DataView.vue'
import fetchData from '../composables/fetchData.js'

export default {
    components:{DataView},
    setup(){
      
        const {books,error,load} = fetchData()

        load()

        return{books,error}
    }

}
</script>

<style scoped>
    .books{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .book{
        padding: 1rem;
        margin: 1rem;
        border: 1px solid skyblue;
    }
</style>