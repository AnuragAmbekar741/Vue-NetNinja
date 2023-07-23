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
import {ref,onMounted} from 'vue'
export default {
    components:{DataView},
    setup(){
        const books = ref([])
        const error = ref(null)

        const load = async () =>{
            try{
                const data = await fetch("http://localhost:3000/books")
                if(!data.ok){
                    throw Error('No data available')
                }
                books.value = await data.json()
                books.value = books.value.books.books                 
            }
            catch(err){
                error.value = err.message
                console.log(error.value)
            }
        }

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