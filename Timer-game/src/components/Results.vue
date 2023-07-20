<template>
    <p >Reaction time is {{score}} ms Ranks - {{this.rank}}</p>
</template>

<script>
export default {
    props:['score'],
    data(){
        return{
            rank:null
        }
    },
    mounted(){
        if(this.score<250) this.rank = "Ninja fingers"
        else if(this.score<550) this.rank = "Good reflexes"
        else this.rank = "Snail pace..."
    }
}
</script>

<style>

</style>