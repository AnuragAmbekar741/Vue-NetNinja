<template>
    <div>
        <h1>Passing data using Props</h1>
        <div v-for='name in names'>{{name}}</div>
    </div>
  
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
    props:['names'],
    setup(props){
        console.log(props.names)

        //Setup lifecycle hooks
        onMounted(()=>
            console.log('on mounted')
        )
        onUnmounted(()=>{
            console.log('on unmounted')
        })
        onUpdated(()=>{
            console.log('on updated')
        })
    }
}
</script>

<style>

</style>