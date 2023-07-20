<template>
  <div class="wrap">
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Start</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <Results v-if="showResult" :score="score"/>
  </div>
</template>

<script >
  import Block from './components/Block.vue'
  import Results from './components/Results.vue'
  export default{
    name:'App',
    components:{Block,Results},
    data(){
      return{
        isPlaying:false,
        delay:null,
        score:null,
        showResult:false
      }
    },
    methods:{
      start(){
        this.isPlaying = true
        this.score = 0
        this.delay = 2000 + Math.floor(Math.random()*5000)
        console.log(this.delay)
        this.showResult = false
      },
      endGame(time){
        this.score = time
        this.isPlaying = false
        this.showResult = true
      }
    },
  }
</script>

<style scoped>
  .wrap{
    width:100vw;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  button{
    padding: 1rem;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    /* width: 50px; */
  }
</style>
