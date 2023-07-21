<template>
    <div>
    <h1>Book details page</h1>
    <h1>Book id is {{id}}</h1>
    </div>
</template>

<script>
export default {
    props:['id','book'],
    // data(){
    //     return{
    //         id:this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>